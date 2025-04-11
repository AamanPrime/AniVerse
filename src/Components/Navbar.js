"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const signOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

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
    <nav className="bg-gradient-to-r from-orange-600 to-gray-800 text-gray-200 p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer hover:scale-105 transition-transform text-orange-300">
          AniVerse
        </h1>
        <div className="space-x-6 text-lg">
          <a href="/" className="hover:text-orange-400 transition-colors">Home</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Watch History</a>
          <a href="#" className="hover:text-orange-400 transition-colors">User</a>

          {!loading && (
            isAuthenticated ? (
              <a
                href="#"
                className="hover:text-orange-400 transition-colors"
                onClick={signOut}
              >
                SignOut
              </a>
            ) : (
              <>
                <a href="/login" className="hover:text-orange-400 transition-colors">SignIn</a>
                <a href="/signup" className="hover:text-orange-400 transition-colors">SignUp</a>
              </>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
