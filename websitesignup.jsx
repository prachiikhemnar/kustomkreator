import React, { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import SiteFooter from "./sitefooter";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import "./style1.css";

export function WebsiteSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // To display error messages

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Form Validation
  const validateForm = () => {
    if (formData.phone.length !== 10) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return false;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setErrorMessage("Phone number must contain only digits.");
      return false;
    }

    if (!formData.email.endsWith("@gmail.com")) {
      setErrorMessage("Email must end with @gmail.com.");
      return false;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(formData.password)) {
      setErrorMessage(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return false;
    }

    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({ name: "", phone: "", email: "", password: "" });
        navigate("/websitesignup2");
      } else {
        setErrorMessage(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error occurred during signup:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const handleGoogleSignin = useCallback((response) => {
    if (response.credential) {
      console.log("Google Sign-In successful:", response.credential);
  
      const googleData = {
        name: response.given_name || "",
        email: response.email || "",
        google_id: response.sub, // Using 'sub' as Google ID
      };
  
      fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(googleData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            navigate("/websitesignup2");
          } else {
            setErrorMessage(data.message || "Google Sign-In failed.");
          }
        })
        .catch((error) => {
          console.error("Error occurred during Google signup:", error);
          setErrorMessage("Google Sign-In failed.");
        });
    } else {
      setErrorMessage("Google Sign-In failed.");
    }
  }, [navigate]);
  google.accounts.id.initialize({
    client_id: "367358727546-uq5nu53678153hrb073t0h3qs536dkbo.apps.googleusercontent.com",
    callback: handleGoogleSignin,
  });
  
  google.accounts.id.renderButton(
    document.getElementById("google-signup-button"),
    {
      theme: "outline",
      size: "large",
    }
  );
  
  useEffect(() => {
    const initializeGoogleSignUp = () => {
      /* global google */
      google.accounts.id.initialize({
        client_id:
          "367358727546-uq5nu53678153hrb073t0h3qs536dkbo.apps.googleusercontent.com",
        callback: handleGoogleSignin,
      });
      google.accounts.id.renderButton(
        document.getElementById("google-signup-button"),
        {
          theme: "outline",
          size: "large",
        }
      );
    };

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.onload = initializeGoogleSignUp;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script on component unmount
    };
  }, [handleGoogleSignin]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute top-4 left-4">
        <img src="/sellercentrallogo.png" alt="Logo" className="w-60 h-30" />
      </div>

      <div className="w-full max-w-2xl p-10 mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center mb-8">Sign Up</h2>
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        <form className="space-y-6" onSubmit={handleSignup}>
          <div>
            <label htmlFor="name" className="block text-sm text-gray-500">
              Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-md border-gray-300 w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm text-gray-500">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="rounded-md border-gray-300 w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-500">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-md border-gray-300 w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-500">
              Password <span className="text-red-500">*</span>
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="rounded-md border-gray-300 w-full"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md hover:bg-blue-600"
          >
            Sign Up
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

        <div id="google-signup-button"></div>
      </div>

      <SiteFooter />
    </div>
  );
}

export default WebsiteSignup;
