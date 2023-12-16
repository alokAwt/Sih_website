import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Otp() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      let incomes = localStorage.getItem("otp");
      let Adhar = localStorage.getItem("adhar");

      if (!password.trim()) {
        alert("Please enter the OTP."); // Show an alert or handle the error appropriately
        return;
      }

      if (password === incomes) {
        let res = await fetch(
          `https://sih-backend-ivory.vercel.app/api/v1/Users/Adhar/Login`,
          {
            method: "POST",
            body: JSON.stringify({ AdharNumber: Adhar }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        res = await res.json();
        if (res) {
          localStorage.setItem("token", res.token);
          navigate("/StudentDashBoard");
        }
        console.log(res.token)

        // Redirect to StudentDashBoard if the login is successful
       
      } else {
        alert("Invalid OTP. Please enter the correct OTP.");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center 
    bg-gradient-to-r from-indigo-800 to-violet-500"
    >
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-6 font-serif">
          {" "}
          Login with AdharCardNumber
        </h2>
        <form>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-medium mb-2"
            >
              OTP
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
