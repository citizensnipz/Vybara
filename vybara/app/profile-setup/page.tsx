"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  displayName: string;
  age: string;
  pronouns: string;
  matchPreferences: string[];
  languageCompatibility: boolean;
  whatMakesYouFeelAlive: string;
  somethingAboutMe: string;
}

interface FormErrors {
  displayName?: string;
  age?: string;
  pronouns?: string;
  matchPreferences?: string;
  languageCompatibility?: string;
  whatMakesYouFeelAlive?: string;
  somethingAboutMe?: string;
}

export default function ProfileSetupPage() {
  const [formData, setFormData] = useState<FormData>({
    displayName: "",
    age: "",
    pronouns: "",
    matchPreferences: [],
    languageCompatibility: false,
    whatMakesYouFeelAlive: "",
    somethingAboutMe: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);
  const router = useRouter();

  const totalSections = 3;

  const validateSection = (section: number): boolean => {
    const newErrors: FormErrors = {};

    if (section === 1) {
      if (!formData.displayName.trim()) {
        newErrors.displayName = "Display name is required";
      }
      if (!formData.age) {
        newErrors.age = "Age is required";
      } else {
        const ageNum = parseInt(formData.age);
        if (isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
          newErrors.age = "Please enter a valid age between 18 and 100";
        }
      }
      if (!formData.pronouns) {
        newErrors.pronouns = "Please select your pronouns";
      }
    }

    if (section === 2) {
      if (formData.matchPreferences.length === 0) {
        newErrors.matchPreferences = "Please select at least one match preference";
      }
    }

    if (section === 3) {
      if (!formData.whatMakesYouFeelAlive.trim()) {
        newErrors.whatMakesYouFeelAlive = "This field is required";
      } else if (formData.whatMakesYouFeelAlive.trim().length < 20) {
        newErrors.whatMakesYouFeelAlive = "Please write at least 20 characters";
      }
      if (!formData.somethingAboutMe.trim()) {
        newErrors.somethingAboutMe = "This field is required";
      } else if (formData.somethingAboutMe.trim().length < 20) {
        newErrors.somethingAboutMe = "Please write at least 20 characters";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleMatchPreferenceChange = (preference: string) => {
    setFormData(prev => ({
      ...prev,
      matchPreferences: prev.matchPreferences.includes(preference)
        ? prev.matchPreferences.filter(p => p !== preference)
        : [...prev.matchPreferences, preference]
    }));
    if (errors.matchPreferences) {
      setErrors(prev => ({ ...prev, matchPreferences: undefined }));
    }
  };

  const nextSection = () => {
    if (validateSection(currentSection)) {
      setCurrentSection(prev => Math.min(prev + 1, totalSections));
    }
  };

  const prevSection = () => {
    setCurrentSection(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateSection(currentSection)) {
      return;
    }

    // Validate all sections
    let allValid = true;
    for (let i = 1; i <= totalSections; i++) {
      if (!validateSection(i)) {
        allValid = false;
        break;
      }
    }

    if (!allValid) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Log form data
      console.log("Profile setup data:", formData);
      
      // Redirect to match page
      router.push("/match");
    } catch (error) {
      console.error("Error saving profile:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderProgressBar = () => (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Step {currentSection} of {totalSections}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {Math.round((currentSection / totalSections) * 100)}% Complete
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(currentSection / totalSections) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  const renderSection1 = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Basic Information
      </h2>
      
      {/* Display Name */}
      <div>
        <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Display Name *
        </label>
        <input
          type="text"
          id="displayName"
          value={formData.displayName}
          onChange={(e) => handleInputChange("displayName", e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
            errors.displayName
              ? "border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20"
              : "border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
          }`}
          placeholder="Enter your display name"
        />
        {errors.displayName && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.displayName}</p>
        )}
      </div>

      {/* Age */}
      <div>
        <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Age *
        </label>
        <input
          type="number"
          id="age"
          value={formData.age}
          onChange={(e) => handleInputChange("age", e.target.value)}
          min="18"
          max="100"
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
            errors.age
              ? "border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20"
              : "border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
          }`}
          placeholder="Enter your age"
        />
        {errors.age && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.age}</p>
        )}
      </div>

      {/* Pronouns */}
      <div>
        <label htmlFor="pronouns" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Pronouns *
        </label>
        <select
          id="pronouns"
          value={formData.pronouns}
          onChange={(e) => handleInputChange("pronouns", e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
            errors.pronouns
              ? "border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20"
              : "border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
          }`}
        >
          <option value="">Select your pronouns</option>
          <option value="he/him">He/Him</option>
          <option value="she/her">She/Her</option>
          <option value="they/them">They/Them</option>
          <option value="custom">Custom</option>
        </select>
        {errors.pronouns && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.pronouns}</p>
        )}
      </div>
    </div>
  );

  const renderSection2 = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Match Preferences
      </h2>
      
      {/* Match Preferences */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          I'm interested in matching with: *
        </label>
        <div className="space-y-3">
          {["Male", "Female", "Nonbinary"].map((preference) => (
            <label key={preference} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.matchPreferences.includes(preference)}
                onChange={() => handleMatchPreferenceChange(preference)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-3 text-gray-700 dark:text-gray-300">{preference}</span>
            </label>
          ))}
        </div>
        {errors.matchPreferences && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.matchPreferences}</p>
        )}
      </div>

      {/* Language Compatibility */}
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={formData.languageCompatibility}
            onChange={(e) => handleInputChange("languageCompatibility", e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <span className="ml-3 text-gray-700 dark:text-gray-300">
            Are you open to matches who speak a different language?
          </span>
        </label>
      </div>
    </div>
  );

  const renderSection3 = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Tell Us About Yourself
      </h2>
      
      {/* What makes you feel alive */}
      <div>
        <label htmlFor="whatMakesYouFeelAlive" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          What makes you feel alive? *
        </label>
        <textarea
          id="whatMakesYouFeelAlive"
          value={formData.whatMakesYouFeelAlive}
          onChange={(e) => handleInputChange("whatMakesYouFeelAlive", e.target.value)}
          rows={4}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
            errors.whatMakesYouFeelAlive
              ? "border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20"
              : "border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
          }`}
          placeholder="Share what brings you joy, excitement, or a sense of purpose..."
        />
        <div className="flex justify-between items-center mt-1">
          {errors.whatMakesYouFeelAlive && (
            <p className="text-sm text-red-600 dark:text-red-400">{errors.whatMakesYouFeelAlive}</p>
          )}
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-auto">
            {formData.whatMakesYouFeelAlive.length}/500
          </span>
        </div>
      </div>

      {/* Something about me */}
      <div>
        <label htmlFor="somethingAboutMe" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Something I wish more people understood about me… *
        </label>
        <textarea
          id="somethingAboutMe"
          value={formData.somethingAboutMe}
          onChange={(e) => handleInputChange("somethingAboutMe", e.target.value)}
          rows={4}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
            errors.somethingAboutMe
              ? "border-red-300 dark:border-red-600 bg-red-50 dark:bg-red-900/20"
              : "border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
          }`}
          placeholder="Share something meaningful about yourself that others might not see at first glance..."
        />
        <div className="flex justify-between items-center mt-1">
          {errors.somethingAboutMe && (
            <p className="text-sm text-red-600 dark:text-red-400">{errors.somethingAboutMe}</p>
          )}
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-auto">
            {formData.somethingAboutMe.length}/500
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-8">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Complete Your Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Help us find your perfect match by sharing a bit about yourself
          </p>
        </div>

        {/* Progress Bar */}
        {renderProgressBar()}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Basic Information */}
          {currentSection === 1 && renderSection1()}

          {/* Section 2: Match Preferences */}
          {currentSection === 2 && renderSection2()}

          {/* Section 3: About You */}
          {currentSection === 3 && renderSection3()}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <button
              type="button"
              onClick={prevSection}
              disabled={currentSection === 1}
              className="px-6 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>

            {currentSection < totalSections ? (
              <button
                type="button"
                onClick={nextSection}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Saving...
                  </div>
                ) : (
                  "Save and Start Matching"
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
} 