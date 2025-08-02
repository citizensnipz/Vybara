export default function MatchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-4 py-8">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Matching!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Your profile has been saved successfully. We're now finding your perfect matches based on your preferences.
        </p>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            This is where the matching algorithm would display potential matches. In a real application, you would see profiles that match your preferences and compatibility scores.
          </p>
        </div>
      </div>
    </div>
  );
} 