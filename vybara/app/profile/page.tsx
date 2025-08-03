"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import FloatingConfirmBar from "../../components/FloatingConfirmBar";

interface UserProfile {
  displayName: string;
  age: number;
  pronouns: string;
  matchPreferences: string[];
  languageCompatibility: boolean;
  whatMakesYouFeelAlive: string;
  somethingAboutMe: string;
  profilePhoto?: string;
}

// Dummy user data from onboarding
const initialUserData: UserProfile = {
  displayName: "Alex Chen",
  age: 28,
  pronouns: "they/them",
  matchPreferences: ["Female", "Nonbinary"],
  languageCompatibility: true,
  whatMakesYouFeelAlive: "Exploring new cities and discovering hidden coffee shops where I can people-watch while reading a good book. There's something magical about being in a new place and feeling completely anonymous yet connected to the world around me.",
  somethingAboutMe: "I'm an introvert who loves deep conversations but needs time to recharge. I often get lost in thought about the meaning of life and find beauty in small moments that others might miss.",
  profilePhoto: undefined,
};

export default function ProfilePage() {
  const [userData, setUserData] = useState<UserProfile>(initialUserData);
  const [originalData] = useState<UserProfile>(initialUserData);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const hasUnsavedChanges = JSON.stringify(userData) !== JSON.stringify(originalData);

  const startEditing = (field: string, value: string) => {
    setEditingField(field);
    setEditValue(value);
  };

  const cancelEditing = () => {
    setEditingField(null);
    setEditValue("");
  };

  const saveField = () => {
    if (editingField) {
      setUserData(prev => ({
        ...prev,
        [editingField]: editValue,
      }));
      setEditingField(null);
      setEditValue("");
    }
  };

  const handleProfilePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserData(prev => ({
          ...prev,
          profilePhoto: e.target?.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    // In a real app, this would save to the backend
    console.log("Saving profile changes:", userData);
    // For now, just update the original data
    Object.assign(originalData, userData);
  };

  const handleDiscardChanges = () => {
    setUserData({ ...originalData });
  };

  const renderEditableField = (
    label: string,
    field: keyof UserProfile,
    value: string | number | boolean | string[],
    type: "text" | "number" | "textarea" | "checkbox" | "select" = "text",
    options?: string[]
  ) => {
    const isEditing = editingField === field;
    const displayValue = Array.isArray(value) ? value.join(", ") : String(value);

    return (
      <div className="flex items-start justify-between py-4 border-b border-gray-200 dark:border-slate-700">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {label}
          </label>
          
          {isEditing ? (
            <div className="space-y-2">
              {type === "textarea" ? (
                <textarea
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white resize-none"
                />
              ) : type === "select" ? (
                <select
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                >
                  {options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : type === "checkbox" ? (
                <input
                  type="checkbox"
                  checked={editValue === "true"}
                  onChange={(e) => setEditValue(e.target.checked.toString())}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              ) : (
                <input
                  type={type}
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                />
              )}
              
              <div className="flex space-x-2">
                <button
                  onClick={saveField}
                  className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                >
                  Save
                </button>
                <button
                  onClick={cancelEditing}
                  className="px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-900 dark:text-white">
              {type === "checkbox" ? (value ? "Open to cross-language matches" : "Not open to cross-language matches") : displayValue}
            </p>
          )}
        </div>
        
        {!isEditing && (
          <button
            onClick={() => startEditing(field, String(value))}
            className="ml-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            aria-label={`Edit ${label}`}
          >
            ✏️
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="py-8 pb-40">
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Your Profile
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              View and edit your profile information
            </p>
          </div>

          {/* Profile Photo */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center mx-auto mb-4">
                {userData.profilePhoto ? (
                  <Image
                    src={userData.profilePhoto}
                    alt="Profile photo"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-white text-4xl font-bold">
                    {userData.displayName.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
            </div>
            
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {userData.profilePhoto ? "Change Photo" : "Upload Photo"}
            </button>
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleProfilePhotoChange}
              className="hidden"
            />
          </div>

          {/* Profile Fields */}
          <div className="space-y-2">
            {renderEditableField("Display Name", "displayName", userData.displayName, "text")}
            {renderEditableField("Age", "age", userData.age, "number")}
            {renderEditableField("Pronouns", "pronouns", userData.pronouns, "select", [
              "he/him",
              "she/her",
              "they/them",
              "custom"
            ])}
            {renderEditableField("Match Preferences", "matchPreferences", userData.matchPreferences, "text")}
            {renderEditableField("Language Compatibility", "languageCompatibility", userData.languageCompatibility, "checkbox")}
            
            {/* Prompt Answers */}
            <div className="py-4 border-b border-gray-200 dark:border-slate-700">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    What makes you feel alive?
                  </label>
                  {editingField === "whatMakesYouFeelAlive" ? (
                    <div className="space-y-2">
                      <textarea
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white resize-none"
                      />
                      <div className="flex space-x-2">
                        <button
                          onClick={saveField}
                          className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEditing}
                          className="px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-900 dark:text-white">
                      {userData.whatMakesYouFeelAlive}
                    </p>
                  )}
                </div>
                
                {editingField !== "whatMakesYouFeelAlive" && (
                  <button
                    onClick={() => startEditing("whatMakesYouFeelAlive", userData.whatMakesYouFeelAlive)}
                    className="ml-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                    aria-label="Edit What makes you feel alive?"
                  >
                    ✏️
                  </button>
                )}
              </div>
            </div>

            <div className="py-4 border-b border-gray-200 dark:border-slate-700">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Something I wish more people understood about me...
                  </label>
                  {editingField === "somethingAboutMe" ? (
                    <div className="space-y-2">
                      <textarea
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white resize-none"
                      />
                      <div className="flex space-x-2">
                        <button
                          onClick={saveField}
                          className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEditing}
                          className="px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-900 dark:text-white">
                      {userData.somethingAboutMe}
                    </p>
                  )}
                </div>
                
                {editingField !== "somethingAboutMe" && (
                  <button
                    onClick={() => startEditing("somethingAboutMe", userData.somethingAboutMe)}
                    className="ml-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                    aria-label="Edit Something I wish more people understood about me..."
                  >
                    ✏️
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Save Widget */}
      <FloatingConfirmBar
        visible={hasUnsavedChanges}
        onSave={handleSaveChanges}
        onDiscard={handleDiscardChanges}
      />
    </div>
  );
} 