"use client";
import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { FaCrown } from "react-icons/fa";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const dropdownRef = useRef();
  const router = useRouter();

  const signOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/search/${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const getInitials = (name) =>
    name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("/api/authstatus", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (data.authenticated) {
          setIsAuthenticated(true);
          setUser(data.user);
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <>
      <div className="bg-black/30 backdrop-blur-md sticky top-0 z-50">
        <nav className="bg-transparent text-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-5 flex justify-between items-center">
            {/* Brand */}
            <Link
              href="/"
              className="text-4xl font-extrabold tracking-widest text-gradient bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 bg-clip-text text-transparent hover:scale-110 transform transition-all duration-300"
            >
              AniVerse
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="hover:text-orange-300 transition duration-200 text-lg font-medium"
              >
                Home
              </Link>
              <Link
                href="/watchhistory"
                className="hover:text-orange-300 transition duration-200 text-lg font-medium"
              >
                Watch History
              </Link>
              <Link
                href="/watchlist"
                className="hover:text-orange-300 transition duration-200 text-lg font-medium"
              >
                Watchlist
              </Link>

              {/* 🔍 SearchBar */}
              <div className="w-full max-w-md px-4">
                <SearchBox
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  handleSearch={handleSearch}
                  handleKeyDown={handleKeyDown}
                />
              </div>

              <Link
                href="/premium"
                className="flex items-center space-x-2 hover:text-yellow-400 transition"
              >
                <FaCrown className="text-yellow-400" />
                <span>Premium</span>
              </Link>

              {/* Auth Dropdown */}
              {!loading && isAuthenticated ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold flex items-center justify-center hover:ring-2 ring-orange-300 transition"
                  >
                    {user?.avatar ? (
                      <img
                        src={user.avatar}
                        alt="avatar"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      getInitials(user?.name || "U")
                    )}
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-2 z-50">
                      <Link
                        href="/settings"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                      <Link
                        href="/watchhistory"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Watch History
                      </Link>
                      <Link
                        href="/watchlist"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Watchlist
                      </Link>
                      <button
                        onClick={signOut}
                        className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                !loading && (
                  <div className="flex space-x-6">
                    <Link
                      href="/login"
                      className="hover:text-orange-300 transition duration-200 text-lg font-medium"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/signup"
                      className="hover:text-orange-300 transition duration-200 text-lg font-medium"
                    >
                      Sign Up
                    </Link>
                  </div>
                )
              )}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:bg-orange-600 ring-2 ring-orange-300 transition"
              >
                <svg
                  className={`w-6 h-6 text-white transition-transform duration-300 ${
                    menuOpen ? "rotate-90" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-black/70 backdrop-blur-md shadow-md rounded-b-lg mx-4 py-6 space-y-4 text-sm text-white">
              <Link
                href="/"
                className="block px-4 py-2 hover:bg-orange-600 rounded-md transition"
              >
                Home
              </Link>
              <Link
                href="/watchhistory"
                className="block px-4 py-2 hover:bg-orange-600 rounded-md transition"
              >
                Watch History
              </Link>
              <Link
                href="/watchlist"
                className="block px-4 py-2 hover:bg-orange-600 rounded-md transition"
              >
                Watchlist
              </Link>

              {!loading && isAuthenticated ? (
                <>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 hover:bg-orange-600 rounded-md transition"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={signOut}
                    className="w-full text-left px-4 py-2 hover:bg-orange-600 rounded-md transition"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block px-4 py-2 hover:bg-orange-600 rounded-md transition"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="block px-4 py-2 hover:bg-orange-600 rounded-md transition"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
