"use client";

import { useEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

import Navbar from "@/Components/Navbar";

export default function Main() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const adminActions = [
    { label: "Add Movie", action: () => redirect("/admin/addmovie") },
    {
      label: "Delete Comments",
      action: () => alert("Delete Comments clicked"),
    },
    { label: "Manage Reviews", action: () => alert("Manage Reviews clicked") },
    { label: "Moderate Users", action: () => alert("Moderate Users clicked") },
    {
      label: "View Dashboard Analytics",
      action: () => alert("Analytics clicked"),
    },
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const decoded = jwtDecode(token);
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
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white mt-4 text-lg">Checking admin access...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) return null;

  return (
    <>
      <Navbar />

      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-6"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/japan-background-digital-art_23-2151546197.jpg?t=st=1744538383~exp=1744541983~hmac=b0a4dbc716630b34f48e94708166707c1834183fe50c8bb5c7cc68612b547451&w=1800')",
        }}
      >
        <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 bg-opacity-80 backdrop-blur-lg min-h-screen flex flex-col items-center justify-center">
          <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-3xl p-10 shadow-2xl border border-gray-700">
              <h1 className="text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500">
                Admin Panel
              </h1>
              <div className="grid gap-8 md:grid-cols-2">
                {adminActions.map((item, index) => (
                  <button
                    key={index}
                    onClick={item.action}
                    className="relative py-4 px-6 bg-gray-900 bg-opacity-90 rounded-2xl text-white font-semibold shadow-lg hover:shadow-red-500/50 transition-all duration-300 group overflow-hidden"
                  >
                    <span className="relative z-10 text-lg">{item.label}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-40 transition duration-300 blur-md"></span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}