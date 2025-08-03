"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface Chat {
  id: string;
  name: string;
  avatarUrl?: string;
  lastMessage: string;
  unreadCount?: number;
}

interface ChatSidebarProps {
  chats: Chat[];
}

export default function ChatSidebar({ chats }: ChatSidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-20 left-4 z-40 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Toggle chat sidebar"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 shadow-lg transition-all duration-300 ease-in-out z-30 ${
          isExpanded ? "w-80 translate-x-0" : "w-0 -translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Conversations
            </h2>
            <button
              onClick={toggleSidebar}
              className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              aria-label="Close sidebar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto">
            {chats.length === 0 ? (
              <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                <p>No conversations yet</p>
              </div>
            ) : (
              <div className="p-2">
                {chats.map((chat) => {
                  const isActive = pathname === `/chat/${chat.id}`;
                  return (
                    <Link
                      key={chat.id}
                      href={`/chat/${chat.id}`}
                      onClick={() => setIsExpanded(false)}
                      className={`block p-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                          : "hover:bg-gray-50 dark:hover:bg-slate-700"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                            {chat.avatarUrl ? (
                              <Image
                                src={chat.avatarUrl}
                                alt={`${chat.name}'s avatar`}
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span className="text-white font-semibold">
                                {chat.name.charAt(0).toUpperCase()}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Chat Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className={`text-sm font-medium truncate ${
                              isActive
                                ? "text-blue-900 dark:text-blue-100"
                                : "text-gray-900 dark:text-white"
                            }`}>
                              {chat.name}
                            </h3>
                            {chat.unreadCount && chat.unreadCount > 0 && (
                              <span className="flex-shrink-0 ml-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {chat.unreadCount}
                              </span>
                            )}
                          </div>
                          <p className={`text-xs truncate ${
                            isActive
                              ? "text-blue-700 dark:text-blue-200"
                              : "text-gray-500 dark:text-gray-400"
                          }`}>
                            {chat.lastMessage}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Backdrop for mobile */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
} 