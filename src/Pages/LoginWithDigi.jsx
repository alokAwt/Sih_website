import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginWithDigi() {
    const [AdharNumber, setAadharNumber] = useState("");
    const [otp, setOtp] = useState("");
    const [income, setIncome] = useState("");
   
    //const [loading,setLoading]=useState(false);
    //const [otpResent, setOtpResent] = useState(false);
    const [verificationResult, setVerificationResult] = useState("");
    //const [loading,setLoading]
    const navigate = useNavigate();
  
    
    const handleSubmit = async (e) => {
     
        let res = await fetch(
          "https://sih-backend-ivory.vercel.app/api/v1/Users/OtpSend",
          {
            method: "POST",
            body: JSON.stringify({ AdharNumber }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
    
        if (!res.ok) {
          // If response status is not okay (e.g., 404 Not Found, 500 Internal Server Error), throw an error
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
    
        const data = await res.json();
        console.log("Response:", data.otp);
       
        setIncome(data.otp);
        
      
    };
    
    
    const handleVerify = () => {
        // Check if both OTP and income have values
        if (otp && income) {
          if (income === otp) {
            // If OTPs match, navigate to the home page
            navigate("/");
          } else {
            // Handle incorrect OTP
            alert('Incorrect OTP');
          }
        } else {
          // Handle case where either OTP or income is missing
          alert('Please enter OTP and proceed.');
        }
      };
    return (
      <div className="bg-gradient-to-r from-indigo-800 to-violet-500 min-h-screen py-40">
        <div className="container mx-auto">
          <div className="flex w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-1/2 hidden md:block ">
              <img
                className="  object-cover h-full  "
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className=" max-w-md mx-auto bg-white rounded-md overflow-hidden  mt-5">
              <h2 className="text-3xl mb-4 uppercase font-semibold font-mono text-blue-600">
                Register With DigiLocker
              </h2>
              <p className="mb-4 font-noral">
                Create your account.It's free and only take a minute.
              </p>
              <form onSubmit={handleSubmit}>
                {/* Aadhar Card Number */}
                <div className="mb-4 ">
                  <label
                    htmlFor="aadharNumber"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Aadhar Card Number
                  </label>
                  <input
                   
                    type="text"
                    id="aadharNumber"
                    className="w-full p-2 border rounded-lg"
                    placeholder="Enter Aadhar Card Number"
                    value={AdharNumber}
                    onChange={(e) => setAadharNumber(e.target.value)}
                    required
                  />
                   <button onClick={handleSubmit}
                  type="submit"
                  className="bg-blue-500 text-white p-1 rounded-md mt-2 hover:bg-blue-600 mb-3"
                
                  
                >
                    Proceed
               
                </button>
                
                </div>
                
  
                {/* OTP */}
                <div className="mb-4">
                  <label
                    htmlFor="otp"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    OTP
                  </label>
                  <input
                    type="text"
                    id="otp"
                    className="w-full p-2 border rounded-lg"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                  />
                </div>
  
                {/* Resend OTP */}
               
  
                {/* Submit Button */}
                <button
                  onClick={handleVerify}
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mb-3 w-full"
                >
                  Verify
                </button>
                
  
                {/* Verification Result */}
              {verificationResult && (
                  <p
                    className={`mt-4 mb-4 ${
                      verificationResult.includes("Incorrect")
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {verificationResult}
                  </p> 
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
)}
