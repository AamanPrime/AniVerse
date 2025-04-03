"use client"

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";
import LoginPage from "../login/page";

export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    });

        const onSignup = async () => {
            console.log("Clicked")
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
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="flex flex-col bg-slate-700 p-10 rounded-2xl shadow-lg w-96 text-white">
                <h1 className="text-center text-2xl font-semibold mb-6">Create an Account</h1>
                
                <label className="text-sm font-medium mb-1" htmlFor="username">Username</label>
                <input 
                    type="text"
                    className="mb-4 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    id="username"
                    value={user.username}
                    onChange={(e) => setUser({...user, username: e.target.value})}
                    placeholder="Enter your username"
                />

                <label className="text-sm font-medium mb-1" htmlFor="email">Email</label>
                <input 
                    type="email"
                    className="mb-4 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    id="email"
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    placeholder="Enter your email"
                />

                <label className="text-sm font-medium mb-1" htmlFor="password">Password</label>
                <input 
                    type="password"
                    className="mb-4 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    id="password"
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    placeholder="Enter your password"
                />

                <button onClick={onSignup} className="p-3 bg-white text-black rounded-full font-semibold text-lg w-full hover:bg-gray-300 transition mb-4">
                    Sign Up
                </button>
                
                <p className="text-center text-sm text-gray-400">
                    Already have an account? <Link href='/login' className="text-blue-400 hover:underline">Log in</Link>
                </p>
            </div>
        </div>
    );
}