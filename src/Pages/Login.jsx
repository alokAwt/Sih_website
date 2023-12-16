import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  

  const SignUp = async (e) => {
    e.preventDefault();
    let res = await fetch(
      `https://sih-backend-ivory.vercel.app/api/v1/College/Login`,
      {
        method: "POST",
        body: JSON.stringify({
          Email: Email,
          Password: Password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    res = await res.json();
    console.log("alok", res);
    if (res.status === "success") {
      let user = "college";
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", user);
      navigate("/college/documents");
    }
  };
  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center bg-cover"
        style={{
          backgroundImage:
            'url(" https://img.freepik.com/free-vector/college-students-concept-illustration_114360-10205.jpg?w=996&t=st=1702288022~exp=1702288622~hmac=b102a5dbfa26a384e52393eee41874ad7a353ca3aaf3596c00c3c4b1d7d089de',
        }}
      >
        <div
          className="bg-white p-8 rounded-lg shadow-md "
          style={{ width: 350 }}
        >
          <h2 className="text-2xl font-bold font-mono mb-4 text-blue-600">
            Login Into App
          </h2>
          <form>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Enter Email
                </label>
                <input
                  className="border rounded w-full py-2 px-3"
                  type="text"
                  placeholder="Enter Email"
                  style={{ width: 250 }}
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Enter Password
                </label>
                <input
                  className="border rounded w-full py-2 px-3"
                  type="text"
                  placeholder="Enter Password"
                  style={{ width: 250 }}
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <div></div>
            </div>

            <button
              onClick={(e) => SignUp(e)}
              className="bg-green-500 mt-4 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
