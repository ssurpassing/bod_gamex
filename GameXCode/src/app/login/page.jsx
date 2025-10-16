"use client";
import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      console.log('Attempting login with:', { email, password });
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        // Redirect on successful login
        console.log("Login successful, redirecting to /admin/game");
        router.push("/admin/game");
      } else {
        // Display error message
        console.log("Login failed:", data.message);
        setError(data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An unexpected error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-1 flex-col gap-6">
      <div className=" p-8 rounded-lg shadow-lg color-2 w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>
        <div className="flex flex-col gap-4">
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            labelPlacement="outside"
            className="w-full"
            color="primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            label="Password"
            color="primary"
            placeholder="Enter your password"
            labelPlacement="outside"
            className="w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-center">{error}</p>}
          <Button
            className="bg-blue-700 text-white hover:bg-blue-800 mt-4"
            onClick={handleLogin}
          >
            Login
          </Button>
          <div>
            <p>Email- admin</p>
            <p>Password- password</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;