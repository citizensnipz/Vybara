import ChatSidebar from "../../components/ChatSidebar";

// Dummy chat data for sidebar
const chats = [
  {
    id: "abc123",
    name: "Sasha",
    avatarUrl: undefined,
    lastMessage: "Looking forward to hearing more...",
    unreadCount: 0,
  },
  {
    id: "def456",
    name: "Jordan",
    avatarUrl: undefined,
    lastMessage: "Thanks for sharing that with me...",
    unreadCount: 2,
  },
  {
    id: "ghi789",
    name: "Alex",
    avatarUrl: undefined,
    lastMessage: "I'd love to hear more about that...",
    unreadCount: 0,
  },
];

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-3xl mx-auto flex flex-col min-h-screen p-4">
        <div className="flex-grow relative">
          {children}
        </div>
      </div>
      <ChatSidebar chats={chats} />
    </div>
  );
} 