"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import Navbar from "@/Components/Navbar";

export default function UserSettingsPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({
    username: "",
    email: "",
    bio: "",
    profilePic: "",
  });

  const [formData, setFormData] = useState({
    bio: "",
    profilePic: "",
  });

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token");

      const decoded = jwtDecode(token);
      if (!decoded || !decoded.username || !decoded.email) {
        throw new Error("Invalid token structure");
      }

      const userInfo = {
        username: decoded.username,
        email: decoded.email,
        bio: decoded.bio || "",
        profilePic: decoded.profilepicture || "https://i.pravatar.cc/150?img=8",
      };

      setUser(userInfo);
      setFormData({
        bio: userInfo.bio,
        profilePic: userInfo.profilePic,
      });

      setIsLoading(false);
    } catch (err) {
      console.error("Authorization failed:", err);
      router.push("/");
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/updatesettings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        bio: formData.bio,
        profilePic: formData.profilePic,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Settings updated!");
      setUser((prev) => ({
        ...prev,
        bio: formData.bio,
        profilePic: formData.profilePic,
      }));
    } else {
      alert(data.error || "Failed to update.");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white text-lg animate-pulse">Loading your settings...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center p-6">
        <div className="w-full max-w-6xl bg-gray-950 rounded-3xl shadow-2xl grid md:grid-cols-2 gap-10 p-10">
          {/* Profile Preview */}
          <div className="flex flex-col items-center text-center animate-fade-in">
            <img
              src={user.profilePic}
              alt="Profile"
              className="w-36 h-36 rounded-full border-4 border-red-500 shadow-lg object-cover mb-5 hover:scale-105 transition-transform"
            />
            <h2 className="text-3xl font-bold text-red-400">{user.username}</h2>
            <p className="text-gray-400 text-sm mt-1">{user.email}</p>
            <div className="mt-4 px-4">
              <p className="text-gray-300 italic">
                {user.bio || "No bio added yet."}
              </p>
            </div>
          </div>

          {/* Settings Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 animate-fade-in delay-100"
          >
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Update Bio
              </label>
              <textarea
                name="bio"
                rows={4}
                value={formData.bio}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white border border-gray-700 rounded-xl p-4 resize-none focus:ring-2 focus:ring-red-500"
                placeholder="Tell us something about yourself..."
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Profile Picture URL
              </label>
              <input
                type="url"
                name="profilePic"
                value={formData.profilePic}
                onChange={handleChange}
                className="w-full bg-gray-800 text-white border border-gray-700 rounded-xl p-4 focus:ring-2 focus:ring-red-500"
                placeholder="https://your-image-url.com/avatar.jpg"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition-transform hover:scale-105"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
