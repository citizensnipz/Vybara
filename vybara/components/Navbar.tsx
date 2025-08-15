"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown when pressing Escape key
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/profile", label: "Profile" },
    { href: "/match", label: "Matches" },
    { href: "/chat", label: "Chats" },
    { href: "/account", label: "Account" },
  ];

  return (
    <nav className="sticky top-0 pb-2 pt-2 z-50 bg-[var(--color-surface)] shadow-sm">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-15">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
            onClick={closeDropdown}
          >
            <Image
              src="/logoName.png"
              alt="Vybara"
              width={95}
              height={32}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Links and Account Icon for Medium Screens and Larger */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/chat"
              className={`text-sm font-medium transition-colors ${
                pathname === "/chat"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Chats
            </Link>
            <Link
              href="/match"
              className={`text-sm font-medium transition-colors ${
                pathname === "/match"
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Matches
            </Link>
            {user ? (
              <button
                onClick={handleLogout}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/signup"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Login/Signup
              </Link>
            )}
            <Link
              href="/profile"
              className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
              aria-label="Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-gray-600 dark:text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM4.5 18.75a8.25 8.25 0 0115 0"
                />
              </svg>
            </Link>
          </div>

          {/* Hamburger Menu Button for Smaller Screens */}
          <div className="relative md:hidden">
            <button
              ref={buttonRef}
              onClick={toggleDropdown}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Toggle navigation menu"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isDropdownOpen ? "rotate-45 translate-y-1" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out mt-1 ${
                    isDropdownOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out mt-1 ${
                    isDropdownOpen ? "-rotate-45 -translate-y-1" : ""
                  }`}
                />
              </div>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 py-2 z-50"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeDropdown}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      pathname === item.href
                        ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                        : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700"
                    }`}
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    handleLogout();
                    closeDropdown();
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                  role="menuitem"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}