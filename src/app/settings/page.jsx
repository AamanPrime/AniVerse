"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

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
      console.log(decoded)
      if (!decoded || !decoded.username || !decoded.email) {
        throw new Error("Invalid token structure");
      }

      // Fill state with decoded info
      const userInfo = {
        username: decoded.username,
        email: decoded.email,
        bio: decoded.bio,
        profilePic: decoded.profilePic || "https://i.pravatar.cc/150?img=8",
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
    console.log(formData.bio)
    console.log(formData.profilePic)

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
      if (data.token) {
        localStorage.setItem("token", data.token);
      }
      alert("Settings updated!");
      window.location.reload();

    } else {
      alert(data.error || "Failed to update.");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg animate-pulse">Loading settings...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="bg-gray-900 rounded-2xl shadow-lg w-full max-w-5xl grid md:grid-cols-2 gap-8 p-6">
        {/* Left: Profile Preview */}
        <div className="flex flex-col items-center text-center">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-red-500 shadow-md mb-4 object-cover"
          />
          <h2 className="text-2xl font-bold text-red-400">{user.username}</h2>
          <p className="text-gray-400 text-sm mt-1">{user.email}</p>
          <p className="mt-4 text-gray-300 italic max-w-sm">{user.bio}</p>
        </div>

        {/* Right: Edit Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Update Bio</label>
            <textarea
              name="bio"
              rows={4}
              value={formData.bio}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white resize-none"
              placeholder="Write something about yourself..."
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">Profile Picture URL</label>
            <input
              type="url"
              name="profilePic"
              value={formData.profilePic}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 text-white"
              placeholder="https://your-image-url.com/profile.jpg"
            />
          </div>

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
