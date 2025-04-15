"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

const PremiumSubscription = () => {
  const router = useRouter();
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);

  const plan = {
    title: "Premium",
    price: "$15",
    duration: 30,
    features: [
      "Ad-free",
      "4K Streaming",
      "Offline Downloads",
      "Priority Support",
    ],
  };

  useEffect(() => {
    const checkPremium = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("/api/premium", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setIsPremium(data.isPremium);
        }
      } catch (err) {
        console.error("Error checking premium status:", err);
      } finally {
        setLoading(false);
      }
    };

    checkPremium();
  }, []);

  const handleSubscribe = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to subscribe.");
      router.push("/login");
      return;
    }

    try {
      jwtDecode(token); // Validates token
    } catch (err) {
      alert("Invalid token. Please login again.");
      localStorage.removeItem("token");
      router.push("/login");
      return;
    }

    try {
      const res = await fetch("/api/premium", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ price: 15, duration: plan.duration }),
      });

      if (res.ok) {
        alert("You're now a premium member!");
        setIsPremium(true);
        router.push("/");
      } else {
        const data = await res.json();
        alert("Failed to subscribe: " + data.error);
      }
    } catch (error) {
      console.error("Subscription error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-10">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-8">
          Go Premium
        </h1>
        <p className="text-center text-lg mb-6">
          Unlock all features and enjoy the ultimate anime experience.
        </p>
        <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-pink-500/50 transition-all duration-300">
          <h2 className="text-2xl font-bold text-center mb-4">{plan.title}</h2>
          <p className="text-center text-xl font-semibold mb-4">
            {plan.price}/month
          </p>
          <ul className="mb-6">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center mb-2">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
          <button
            className={`w-full py-2 bg-gradient-to-r ${
              isPremium
                ? "from-gray-600 to-gray-700 cursor-not-allowed"
                : "from-pink-500 via-red-500 to-yellow-500 hover:opacity-90"
            } text-white font-bold rounded-lg transition-all duration-300`}
            onClick={handleSubscribe}
            disabled={isPremium || loading}
          >
            {loading ? "Checking..." : isPremium ? "Subscribed" : "Subscribe Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumSubscription;
