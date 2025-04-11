"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // NEW: track auth check
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
        setLoading(false); // ✅ Done checking
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">AniVerse</h1>
      <div className="space-x-4">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="#" className="hover:text-gray-400">Watch History</a>
        <a href="#" className="hover:text-gray-400">User</a>

        {/* 👇 Don't show auth links until auth check is complete */}
        {!loading && (
          isAuthenticated ? (
            <a href="#" className="hover:text-gray-400" onClick={signOut}>SignOut</a>
          ) : (
            <>
              <a href="/login" className="hover:text-gray-400">SignIn</a>
              <a href="/signup" className="hover:text-gray-400">SignUp</a>
            </>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
