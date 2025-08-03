import Link from "next/link";

export default function ChatPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-8">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="text-6xl mb-4">💬</div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Chat
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Start a conversation with someone who might be a great match for you. Use the chat button to see your conversations.
        </p>
        <div className="space-y-3">
          <Link
            href="/chat/abc123"
            className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Chatting
          </Link>
          <Link
            href="/match"
            className="block w-full bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
          >
            Find More Matches
          </Link>
        </div>
      </div>
    </div>
  );
} 