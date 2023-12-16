import React from "react"; // Login with digilocker
import { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function LoginWithDigi() {
  const [AdharNumber, setAadharNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the form from submitting

    // Check if AdharNumber is not empty before sending OTP
    if (!AdharNumber.trim()) {
      alert("Please enter the Aadhar Card Number.");
      return;
    }

    let result = await fetch(
      "https://sih-backend-ivory.vercel.app/api/v1/Users/digilocker/OtpSend",
      {
        method: "POST",
        body: JSON.stringify({ AdharNumber }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data2 = await result.json();
    localStorage.setItem("otp", data2.otp);
    localStorage.setItem("adhar", AdharNumber);
    navigate("/Loginopt");
  };
  return (
    <div className="bg-gradient-to-r from-indigo-800 to-violet-500 min-h-screen py-40">
      <div className="container mx-auto">
        <div className="flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-1/2 hidden md:block">
            <img
              className="object-cover h-full"
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden mt-5">
            <h2 className="text-3xl mb-4 uppercase font-semibold font-mono text-blue-700">
              Register with digilocker:
            </h2>
            <p className="mb-4 font-noral">
              Create your account. It's free and only takes a minute.
            </p>
            <form>
              {/* Aadhar Card Number */}
              <div className="mb-4">
                <label
                  htmlFor="aadharNumber"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Aadhar Card Number
                </label>
                <input
                  type="text"
                  id="aadharNumber"
                  className="w-full p-2 border rounded-lg mt-3"
                  placeholder="Enter Aadhar Card Number"
                  value={AdharNumber}
                  onChange={(e) => setAadharNumber(e.target.value)}
                  required
                />

                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-red-500 text-white p-2  rounded-md mt-3 ml-4 mb-3 hover:scale-110"
                  disabled={!AdharNumber.trim()} // Disable button if AdharNumber is empty
                >
                  Send OTP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
