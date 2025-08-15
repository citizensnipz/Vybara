"use client";

import ActionButton from "@/components/ActionButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    // <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
    <div className="min-h-screen bg-[var(--color-surface-alt)]">
      {/* Hero Section */}
      <section className="relative h-[640px] px-4 py-32 sm:px-6 lg:px-8">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/lady_online.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Find someone who{" "}
            <span className="text-primary-light">feels</span> like
            home—even if they're a world away.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 sm:text-xl">
            We match you based on your soul, not your swipe style. AI-assisted
            emotional compatibility for real connection.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <ActionButton
              label="Get Started"
              onClick={() => {
                router.push("/signup");
              }}
              rank="primary"
            />
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
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent)] dark:bg-[var(--color-accent)] mb-6">
                <span className="text-2xl font-bold text-[var(--color-text)] dark:text-[var(--color-text-light)]">
                  1
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Answer a few thoughtful questions
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Share your values, dreams, and what makes you feel truly
                understood.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent)] dark:bg-[var(--color-accent)] mb-6">
                <span className="text-2xl font-bold text-[var(--color-text)] dark:text-[var(--color-text-light)]">
                  2
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Let our AI find your emotional match
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our advanced AI analyzes compatibility beyond surface-level
                preferences.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-accent)] dark:bg-[var(--color-accent)] mb-6">
                <span className="text-2xl font-bold text-[var(--color-text)] dark:text-[var(--color-text-light)]">
                  3
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Chat with someone who gets you
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Start conversations that feel natural, deep, and genuinely
                meaningful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Why Us Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 bg-[var(--color-surface)] dark:bg-[var(--color-surface-dark)]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-8">
            Tired of surface-level swiping? So are we.
          </h2>
          <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
            Our platform is designed to help people connect across distance,
            language, and culture—because we believe real connection goes deeper
            than proximity.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="get-started" className="relative h-[640px] px-4 py-32 sm:px-6 lg:px-8">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/man_online.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Ready to find your person?
          </h2>
          <p className="text-lg text-gray-200 mb-10">
            It only takes a few minutes to change your story.
          </p>
          <ActionButton
            label="Start Your Journey"
            onClick={() => {
              router.push("/signup");
            }}
            rank="primary"
          />
        </div>
      </section>
    </div>
  );
}
