"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });
  const [error, setError] = React.useState("");
  const router = useRouter();

  const onLogin = async () => {
    setError(""); // Reset error before request

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username.toLowerCase(),
          password: user.password,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      router.push("/");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/japan-background-digital-art_23-2151546139.jpg?t=st=1744560542~exp=1744564142~hmac=2471fb0ac129ca5b815cbf3237d6606ac0a6804bd47e985fb72e1a8e7e43a168&w=1800')", // Replace with your favorite anime image URL
      }}
    >
      <div className="bg-black/60 backdrop-blur-md rounded-3xl p-10 w-full max-w-md shadow-xl border border-gray-600">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Welcome to <span className="text-pink-500">AniVerse</span>!
        </h1>

        {error && (
          <div className="bg-red-500/20 text-red-300 text-sm p-3 mb-4 rounded-lg text-center">
            {error}
          </div>
        )}

        <label htmlFor="username" className="block text-sm text-gray-300 mb-1">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Enter your username"
          className="w-full p-3 mb-4 bg-white/10 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-500"
        />

        <label htmlFor="password" className="block text-sm text-gray-300 mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter your password"
          className="w-full p-3 mb-6 bg-white/10 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 border border-gray-500"
        />

        <button
          onClick={onLogin}
          className="w-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white font-semibold py-3 rounded-full transition-transform transform hover:scale-105 shadow-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
}
