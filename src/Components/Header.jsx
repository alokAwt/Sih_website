import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  // Assume isLoggedIn state is managed in your application
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-2xl flex flex-wrap'>
            <span className='text-slate-200 font-mono'>Vita</span>
            <span className='text-yellow-500 font-serif'>ran</span>
          </h1>
        </Link>
        <form className='bg-slate-100 p-2.5 rounded-lg flex items-center'>
          <FaSearch className='text-slate-600' />
          <input type='text' placeholder='Search..' className='bg-transparent focus:outline-none w-24 sm:w-64 p-1' />
        </form>
        <ul className='flex gap-4 ml-10'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-200 hover:underline'>Home</li>
          </Link>
          <li className='hidden sm:inline text-slate-200 hover:underline'>FAQ</li>
          <li className='text-slate-200 hover:underline'>
            <a href="#div1">Notification</a>
          </li>
        </ul>
        {isLoggedIn ? (
          <span className='text-slate-200 ml-4 hover:underline'>My Application</span>
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
