"use client";

import { useState, useRef, useEffect } from "react";
import { notFound } from "next/navigation";

interface Message {
  id: string;
  text: string;
  sender: "me" | "them";
  timestamp: Date;
}

interface Chat {
  id: string;
  name: string;
  avatarUrl?: string;
  lastMessage: string;
  messages: Message[];
}

// Dummy chat data
const chatData: Chat[] = [
  {
    id: "abc123",
    name: "Sasha",
    avatarUrl: undefined,
    lastMessage: "Looking forward to hearing more...",
    messages: [
      {
        id: "1",
        sender: "them",
        text: "Hey, how was your weekend?",
        timestamp: new Date(Date.now() - 86400000), // 1 day ago
      },
      {
        id: "2",
        sender: "me",
        text: "Pretty chill, how about yours?",
        timestamp: new Date(Date.now() - 82800000), // 23 hours ago
      },
      {
        id: "3",
        sender: "them",
        text: "It was great! I went hiking and discovered this amazing trail. The views were incredible.",
        timestamp: new Date(Date.now() - 7200000), // 2 hours ago
      },
      {
        id: "4",
        sender: "me",
        text: "That sounds amazing! I love hiking too. What trail was it?",
        timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      },
      {
        id: "5",
        sender: "them",
        text: "It was the Eagle Creek Trail. Looking forward to hearing more about your hiking adventures!",
        timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
      },
    ],
  },
  {
    id: "def456",
    name: "Jordan",
    avatarUrl: undefined,
    lastMessage: "Thanks for sharing that with me...",
    messages: [
      {
        id: "1",
        sender: "them",
        text: "Hi! I really enjoyed reading your profile. Your perspective on mental health really resonated with me.",
        timestamp: new Date(Date.now() - 172800000), // 2 days ago
      },
      {
        id: "2",
        sender: "me",
        text: "Thank you! That means a lot. It's something I'm really passionate about.",
        timestamp: new Date(Date.now() - 165600000), // 1.9 days ago
      },
      {
        id: "3",
        sender: "them",
        text: "I've been working on being more open about my own struggles. It's not easy, but it's so important.",
        timestamp: new Date(Date.now() - 14400000), // 4 hours ago
      },
      {
        id: "4",
        sender: "me",
        text: "Absolutely. Vulnerability is such a strength, even though it doesn't always feel that way.",
        timestamp: new Date(Date.now() - 7200000), // 2 hours ago
      },
      {
        id: "5",
        sender: "them",
        text: "Thanks for sharing that with me. It's refreshing to talk to someone who gets it.",
        timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      },
    ],
  },
  {
    id: "ghi789",
    name: "Alex",
    avatarUrl: undefined,
    lastMessage: "I'd love to hear more about that...",
    messages: [
      {
        id: "1",
        sender: "them",
        text: "Hey! I noticed we both love coffee shops. What's your favorite spot in the city?",
        timestamp: new Date(Date.now() - 259200000), // 3 days ago
      },
      {
        id: "2",
        sender: "me",
        text: "I love this little place called The Daily Grind. Great atmosphere and amazing pastries!",
        timestamp: new Date(Date.now() - 252000000), // 2.9 days ago
      },
      {
        id: "3",
        sender: "them",
        text: "I've been there! The owner is so friendly. Do you like their seasonal drinks?",
        timestamp: new Date(Date.now() - 21600000), // 6 hours ago
      },
      {
        id: "4",
        sender: "me",
        text: "Yes! Their pumpkin spice latte in the fall is incredible. What about you?",
        timestamp: new Date(Date.now() - 18000000), // 5 hours ago
      },
      {
        id: "5",
        sender: "them",
        text: "I'm more of a chai person, but I'd love to hear more about your coffee adventures!",
        timestamp: new Date(Date.now() - 9000000), // 2.5 hours ago
      },
    ],
  },
];

export default function ChatPage({ params }: { params: { id: string } }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Find the chat based on the ID
  const chat = chatData.find((c) => c.id === params.id);

  // If chat not found, show 404
  if (!chat) {
    notFound();
  }

  // Initialize messages when component mounts
  useEffect(() => {
    setMessages(chat.messages);
  }, [chat.id]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        text: newMessage.trim(),
        sender: "me",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, message]);
      setNewMessage("");
      
      // Simulate response after a short delay
      setTimeout(() => {
        const responses = [
          "That's really interesting! I'd love to hear more about that.",
          "I feel the same way! It's amazing how we can connect over shared experiences.",
          "Thanks for sharing that with me. It means a lot that you're opening up.",
          "I'm really enjoying our conversation. You seem like someone I could talk to for hours.",
          "That's such a thoughtful perspective. I appreciate you sharing that.",
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        const responseMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: randomResponse,
          sender: "them",
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, responseMessage]);
      }, 1000 + Math.random() * 2000);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] bg-white dark:bg-slate-800 rounded-2xl shadow-xl">
      {/* Chat Header */}
      <div className="flex items-center p-4 border-b border-gray-200 dark:border-slate-700">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
          {chat.avatarUrl ? (
            <img src={chat.avatarUrl} alt={`${chat.name}'s avatar`} className="w-full h-full object-cover rounded-full" />
          ) : (
            chat.name.charAt(0).toUpperCase()
          )}
        </div>
        <div>
          <h2 className="font-semibold text-gray-900 dark:text-white">{chat.name}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Online</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[70vh]">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                message.sender === "me"
                  ? "bg-blue-600 text-white rounded-br-md"
                  : "bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white rounded-bl-md"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.text}</p>
              <p
                className={`text-xs mt-1 ${
                  message.sender === "me"
                    ? "text-blue-100"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {formatTime(message.timestamp)}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 dark:border-slate-700">
        <form onSubmit={handleSendMessage} className="flex space-x-3">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
} 