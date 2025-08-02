export default function ProfileSetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header - Placeholder for future navbar */}
      <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand - Placeholder */}
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Vybara
              </h1>
            </div>
            
            {/* Navigation - Placeholder for future nav items */}
            <nav className="hidden md:flex space-x-8">
              {/* Future navigation items will go here */}
            </nav>
            
            {/* User menu - Placeholder */}
            <div className="flex items-center space-x-4">
              {/* Future user menu will go here */}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-2xl mx-auto p-4">
          {children}
        </div>
      </main>

      {/* Footer - Placeholder for future footer content */}
      <footer className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info - Placeholder */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Vybara
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Connecting souls across the world through AI-powered emotional compatibility.
              </p>
            </div>
            
            {/* Quick Links - Placeholder */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
                    Safety
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Support - Placeholder */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                Support
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-slate-700 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © 2025 Vybara. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 