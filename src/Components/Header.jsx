import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  let token = localStorage.getItem("token");
  let user = localStorage.getItem("user");
  const navigate = useNavigate();

  // Assume isLoggedIn state is managed in your application
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Logout = () => {
    localStorage.clear();
    navigate("/Register");
  };

  return (
    <header className=" sticky top-0 z-50 bg-gray-900 ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap">
            <span className="text-slate-200 font-mono">Vita</span>
            <span className="text-yellow-500 font-serif">ran</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-2.5 rounded-lg flex items-center">
          <FaSearch className="text-slate-600" />
          <input
            type="text"
            placeholder="Search.."
            className="bg-transparent focus:outline-none w-24 sm:w-64 p-1"
          />
        </form>
        <ul className="flex gap-4 ml-10">
          <Link to="/">
            <li className="hidden sm:inline text-slate-200 hover:underline">
              <a href="#div3">Home</a>
            </li>
          </Link>
          <Link to="/scholarship">
            <li className="hidden sm:inline text-slate-200 hover:underline">
              <a href="#div3">Schlorship</a>
            </li>
          </Link>
          {token ? (
            <>
              {user ? (
                <Link to="/college">
                  <li className="hidden sm:inline text-slate-200 hover:underline">
                    <a href="#div3">Dashboard</a>
                  </li>
                </Link>
              ) : (
                <Link to="/studentdashboard">
                  <li className="hidden sm:inline text-slate-200 hover:underline">
                    <a href="#div3">Application</a>
                  </li>
                </Link>
              )}
            </>
          ) : null}

          <li className="hidden sm:inline text-slate-200 hover:underline">
            <a href="#div2">FAQ</a>
          </li>
          <li className="text-slate-200 hover:underline">
            <a href="#div1">Notification</a>
          </li>
        </ul>
        {token ? (
          <span
            className="text-slate-200 ml-4 hover:underline "
            style={{
              fontSize: 20,
              color: "red",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => Logout()}
          >
            Logout
          </span>
        ) : (
          <Link to="/Register">
            <button className="bg-transparent hover:bg-yellow-500 text-slate-200 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
              Register
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}
