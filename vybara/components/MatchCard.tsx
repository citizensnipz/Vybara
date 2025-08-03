"use client";

import { useState } from "react";
import Image from "next/image";

interface MatchCardProps {
  avatarUrl?: string;
  name: string;
  age: number;
  sex: string;
  location: string;
  summary: string;
  promptLabel: string;
  promptResponse: string;
  onDismiss: () => void;
  onInvite: () => void;
}

export default function MatchCard({
  avatarUrl,
  name,
  age,
  sex,
  location,
  summary,
  promptLabel,
  promptResponse,
  onDismiss,
  onInvite,
}: MatchCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't expand if clicking on buttons
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Main Card Content */}
      <div 
        className="p-6 cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="flex items-start space-x-4">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt={`${name}'s avatar`}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-white text-xl font-semibold">
                  {name.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
          </div>

          {/* Match Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {age} / {sex} / {location}
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDismiss();
                  }}
                  className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                  aria-label="Dismiss match"
                >
                  <span className="text-xl">❌</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onInvite();
                  }}
                  className="p-2 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                  aria-label="Invite to chat"
                >
                  <span className="text-xl">💬</span>
                </button>
              </div>
            </div>
            
            <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
              {summary}
            </p>
          </div>
        </div>
      </div>

      {/* Expandable Prompt Section */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 border-t border-gray-200 dark:border-slate-700">
          <div className="pt-4">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
              {promptLabel}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {promptResponse}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 