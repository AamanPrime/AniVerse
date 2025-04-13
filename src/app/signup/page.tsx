"use client";

import Link from "next/link";
import React from "react";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (res.ok) {
        alert("User registered successfully!");
      } else {
        alert(data.error || "Signup failed!");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("An error occurred during signup.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/illustration-anime-city_23-2151779672.jpg?t=st=1744560896~exp=1744564496~hmac=ca1bd2e9bd6bde4e6524131e771b27d63d238803bc002b699762e07bf11f90a3&w=1800')", // Change to your favorite anime wallpaper
      }}
    >
      <div className="bg-black/60 backdrop-blur-md rounded-3xl p-10 w-full max-w-md shadow-xl border border-gray-600">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Welcome to <span className="text-pink-500">Aniverse</span>!<br />Create an Account
        </h1>

        <label htmlFor="username" className="block text-sm text-gray-300 mb-1">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Enter your username"
          className="w-full p-3 mb-4 bg-white/10 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-500"
        />

        <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter your email"
          className="w-full p-3 mb-4 bg-white/10 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-500"
        />

        <label htmlFor="password" className="block text-sm text-gray-300 mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter your password"
          className="w-full p-3 mb-6 bg-white/10 text-white rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 border border-gray-500"
        />

        <button
          onClick={onSignup}
          className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold py-3 rounded-full transition-transform transform hover:scale-105 shadow-lg"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-300 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
