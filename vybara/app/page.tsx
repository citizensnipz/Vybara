export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Find someone who{" "}
            <span className="text-blue-600 dark:text-blue-400">feels</span>{" "}
            like home—even if they're a world away.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
            We match you based on your soul, not your swipe style. AI-assisted emotional compatibility for real connection.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/signup"
              className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Simple steps to meaningful connection
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mb-6">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Answer a few thoughtful questions
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Share your values, dreams, and what makes you feel truly understood.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mb-6">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Let our AI find your emotional match
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our advanced AI analyzes compatibility beyond surface-level preferences.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mb-6">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Chat with someone who gets you
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Start conversations that feel natural, deep, and genuinely meaningful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Why Us Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-8">
            Tired of surface-level swiping? So are we.
          </h2>
          <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
            Our platform is designed to help people connect across distance, language, and culture—because we believe real connection goes deeper than proximity.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="get-started" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">
            Ready to find your person?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            It only takes a few minutes to change your story.
          </p>
          <a
            href="/signup"
            className="inline-flex items-center rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Start Your Journey
          </a>
        </div>
      </section>

    </div>
  );
}
