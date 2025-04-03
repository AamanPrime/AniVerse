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
                    username:user.username.toLowerCase(),
                    password: user.password,
                }),
            });

            const data = await response.json();
            if (!response.ok) {
                setError(data.error || "Login failed");
                return;
            }

            // Store token in local storage
            localStorage.setItem("token", data.token);

            // Redirect to home/dashboard
            router.push("/");
        } catch (err) {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="flex flex-col bg-gray-800 p-10 rounded-2xl shadow-lg w-96 text-white">
                <h1 className="text-center text-2xl font-semibold mb-6">Login</h1>

                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

                <label className="text-sm font-medium mb-1" htmlFor="username">Username</label>
                <input
                    type="text"
                    className="mb-4 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    id="username"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder="Enter your username"
                />

                <label className="text-sm font-medium mb-1" htmlFor="password">Password</label>
                <input
                    type="password"
                    className="mb-4 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    id="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="Enter your password"
                />

                <button onClick={onLogin} className="p-3 bg-white text-black rounded-full font-semibold text-lg w-full hover:bg-gray-300 transition mb-4">
                    Login
                </button>
            </div>
        </div>
    );
}
