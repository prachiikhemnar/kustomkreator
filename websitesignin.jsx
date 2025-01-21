import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SiteFooter from "./sitefooter";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import "./style1.css";
import { Eye } from "lucide-react";
import axios from "axios"; // Import axios for HTTP requests

export function WebsiteSignin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error messages

  useEffect(() => {
    const initializeGoogleSignIn = () => {
      /* global google */
      google.accounts.id.initialize({
        client_id: "367358727546-kf90skhgjodk2fufloc3jbip2ue98qhu.apps.googleusercontent.com", // Replace with your Client ID
        callback: handleGoogleResponse,
      });
      google.accounts.id.renderButton(
        document.getElementById("google-signin-button"),
        {
          theme: "outline",
          size: "large",
        }
      );
    };
    const handleGoogleResponse = (response) => {
      console.log('Google response:', response);
  
      // Send the Google token to your backend
      fetch('http://localhost:5000/auth/google', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ tokenId: response.credential }),
      })
          .then((res) => res.json())
          .then((data) => {
              console.log('Login successful:', data);
              // Handle successful login (e.g., store token in local storage, redirect user)
          })
          .catch((err) => {
              console.error('Error logging in with Google:', err);
          });
  };  
  

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.onload = initializeGoogleSignIn;
    document.body.appendChild(script);
  }, [navigate]);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });

      // Handle successful login
      if (response.status === 200) {
        alert("Login successful!");
        navigate("/mainpage1");
      }
    } catch (error) {
      // Handle errors
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute top-4 left-4">
        <img src="/logo.png" alt="Logo" className="w-60 h-30" />
      </div>
      <div className="w-full max-w-2xl p-10 mx-auto mt-20">
        <h2 className="text-3xl font-bold text-left mb-8">Sign In</h2>
        <form className="space-y-6" onSubmit={handleSignIn}>
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <label htmlFor="email" className="block text-sm text-gray-500">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="rounded-md border-gray-300 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm text-gray-500">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative flex items-center">
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Eye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer sm:right-4 md:right-5" />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md hover:bg-blue-600"
          >
            Sign In
          </Button>
        </form>
        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative text-center">
            <span className="bg-white px-3 text-sm text-gray-500">OR</span>
          </div>
        </div>
        <div id="google-signin-button" className="mt-6"></div>
      </div>
      <SiteFooter />
    </div>
  );
}

export default WebsiteSignin;
