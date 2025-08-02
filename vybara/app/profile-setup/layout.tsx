import Footer from "@/components/Footer";

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
      <Footer />
    </div>
  );
} 