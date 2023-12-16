import React, { useState } from "react";

const VerificationStatus = () => {
  // Example state to simulate user verification status
  const [isVerified, setIsVerified] = useState(false);

  const handleRaiseTicket = () => {
    // Add logic to handle raising a ticket
    console.log("Ticket raised!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-96" style={{marginTop:-200}}>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Verification Status
        </h1>
        <div className="mb-6" >
          {isVerified ? (
            <p className="text-green-500 text-center font-semibold">
              You are verified! 🎉
            </p>
          ) : (
            <p className="text-red-500 text-center font-semibold">
              You are not verified. Please wait for verification or raise a
              ticket.
            </p>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={handleRaiseTicket}
          >
            Raise Ticket
          </button>
          <button
            className={`bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none ${
              isVerified && "opacity-50 cursor-not-allowed"
            }`}
            disabled={isVerified} // Disable the button if already verified
          >
            Wait for Verification
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationStatus;
