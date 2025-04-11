"use client";
import Navbar from "@/Components/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Main() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // 👈 Added loading state
  const router = useRouter();

  const adminActions = [
    { label: "Add Movie", action: () => alert("Add Movie clicked") },
    { label: "Delete Comments", action: () => alert("Delete Comments clicked") },
    { label: "Manage Reviews", action: () => alert("Manage Reviews clicked") },
    { label: "Moderate Users", action: () => alert("Moderate Users clicked") },
    { label: "View Dashboard Analytics", action: () => alert("Analytics clicked") },
  ];

  useEffect(() => {
    const checkAdmin = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/signin");
        return;
      }

      try {
        const res = await fetch("/api/checkadmin", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();

        if (data.admin) {
          setIsAdmin(true);
        } else {
          router.push("/not-authorized");
        }
      } catch (err) {
        console.error("Error checking admin:", err);
        router.push("/signin");
      } finally {
        setIsLoading(false); // 👈 Done loading
      }
    };

    checkAdmin();
  }, [router]);

  // Show loading while checking
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg animate-pulse">Checking admin access...</p>
      </div>
    );
  }

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
