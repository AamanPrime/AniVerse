"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import jwt_decode from "jwt-decode";
import Navbar from "@/Components/Navbar";

export default function Main() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const adminActions = [
    { label: "Add Movie", action: () => alert("Add Movie clicked") },
    { label: "Delete Comments", action: () => alert("Delete Comments clicked") },
    { label: "Manage Reviews", action: () => alert("Manage Reviews clicked") },
    { label: "Moderate Users", action: () => alert("Moderate Users clicked") },
    { label: "View Dashboard Analytics", action: () => alert("Analytics clicked") },
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const decoded = jwt_decode(token);
      console.log("Decoded token:", decoded); // Debug: Check the role

      if (decoded?.role?.toLowerCase() === "admin") {
        setIsAdmin(true);
      } else {
        router.push("/");
      }
    } catch (err) {
      console.error("Token decoding failed:", err);
      router.push("/login");
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg animate-pulse">Checking admin access...</p>
      </div>
    );
  }

  if (!isAdmin) return null; // Prevents UI flicker before redirect

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-red-500">Admin Panel</h1>
        <div className="grid gap-4 md:grid-cols-2">
          {adminActions.map((item, index) => (
            <button
              key={index}
              onClick={item.action}
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-6 rounded-2xl shadow-md transition duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
