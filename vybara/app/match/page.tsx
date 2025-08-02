"use client";

import { useState } from "react";

interface Match {
  id: number;
  name: string;
  age: number;
  pronouns: string;
  whatMakesYouFeelAlive: string;
  somethingAboutMe: string;
}

const mockMatches: Match[] = [
  {
    id: 1,
    name: "Alex",
    age: 28,
    pronouns: "they/them",
    whatMakesYouFeelAlive: "Exploring new cities and discovering hidden coffee shops where I can people-watch while reading a good book. There's something magical about being in a new place and feeling completely anonymous yet connected to the world around me.",
    somethingAboutMe: "I'm an introvert who loves deep conversations but needs time to recharge. I often get lost in thought about the meaning of life and find beauty in small moments that others might miss."
  },
  {
    id: 2,
    name: "Jordan",
    age: 31,
    pronouns: "he/him",
    whatMakesYouFeelAlive: "Playing guitar under the stars and writing songs that capture the emotions I can't express in words. Music has always been my way of connecting with the world and understanding my own feelings.",
    somethingAboutMe: "I'm passionate about mental health advocacy and believe everyone deserves to be heard without judgment. I've learned that vulnerability is actually a strength, not a weakness."
  },
  {
    id: 3,
    name: "Sam",
    age: 26,
    pronouns: "she/her",
    whatMakesYouFeelAlive: "Hiking in the mountains and feeling completely insignificant yet somehow more connected to everything. There's nothing like reaching a summit and realizing how small we are in the grand scheme of things.",
    somethingAboutMe: "I'm a recovering perfectionist who's learning to embrace imperfection. I used to think I had to have everything figured out, but now I find beauty in the messy, uncertain parts of life."
  }
];

export default function MatchPage() {
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [hasLiked, setHasLiked] = useState<number[]>([]);
  const [hasPassed, setHasPassed] = useState<number[]>([]);

  const currentMatch = mockMatches[currentMatchIndex];
  const isLastMatch = currentMatchIndex === mockMatches.length - 1;

  const handleLike = () => {
    if (currentMatch) {
      setHasLiked(prev => [...prev, currentMatch.id]);
      if (!isLastMatch) {
        setCurrentMatchIndex(prev => prev + 1);
      }
    }
  };

  const handlePass = () => {
    if (currentMatch) {
      setHasPassed(prev => [...prev, currentMatch.id]);
      if (!isLastMatch) {
        setCurrentMatchIndex(prev => prev + 1);
      }
    }
  };

  const handleSkip = () => {
    if (!isLastMatch) {
      setCurrentMatchIndex(prev => prev + 1);
    }
  };

  if (currentMatchIndex >= mockMatches.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="text-6xl mb-4">💫</div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            No more matches for now
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We're working on finding more people who might be a great match for you. Check back later!
          </p>
          <button
            onClick={() => {
              setCurrentMatchIndex(0);
              setHasLiked([]);
              setHasPassed([]);
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-8">
      {/* Match Card */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 max-w-md w-full">
        {/* Profile Header */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
            {currentMatch.name.charAt(0)}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {currentMatch.name}, {currentMatch.age}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {currentMatch.pronouns}
          </p>
        </div>

        {/* Profile Content */}
        <div className="space-y-6">
          {/* What makes you feel alive */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              What makes me feel alive:
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {currentMatch.whatMakesYouFeelAlive}
            </p>
          </div>

          {/* Something about me */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Something I wish more people understood about me:
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {currentMatch.somethingAboutMe}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={handlePass}
            className="flex items-center justify-center w-16 h-16 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors shadow-lg"
            aria-label="Pass on this match"
          >
            <span className="text-2xl">❌</span>
          </button>

          <button
            onClick={handleSkip}
            className="flex items-center justify-center w-16 h-16 bg-gray-500 hover:bg-gray-600 text-white rounded-full transition-colors shadow-lg"
            aria-label="Skip for now"
          >
            <span className="text-2xl">⏭️</span>
          </button>

          <button
            onClick={handleLike}
            className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors shadow-lg"
            aria-label="Like this match"
          >
            <span className="text-2xl">❤️</span>
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {currentMatchIndex + 1} of {mockMatches.length}
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-6 flex space-x-6 text-sm text-gray-600 dark:text-gray-300">
        <span>❤️ {hasLiked.length} liked</span>
        <span>❌ {hasPassed.length} passed</span>
      </div>
    </div>
  );
} 