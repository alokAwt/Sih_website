import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import logo from '../assets/logo.png'


export default function Header() {
  
  return (
    <header className='bg-gradient-to-r from-indigo-800 to-violet-500 '>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <Link to='/'>
      <img src={logo} alt="Logo" className="h-10 " />
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-200 font-mono'>Vita</span>
            <span className='text-yellow-500 font-serif'>ran</span>
          </h1>

      </Link>
      <form className='bg-slate-100 p-2.5 rounded-lg flex items-center'>
      <FaSearch className='text-slate-600' />
        <input type='text' placeholder='Search..' className='bg-transparent focus:outline-none w-24 sm:w-64 p-1'>

        </input>

      </form>
      <ul className='flex gap-4 ml-10'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-200 hover:underline'>Home</li>
            
          </Link>
          <li className='hidden sm:inline text-slate-200 hover:underline'>FAQ</li>
          <Link to={"/StudentLogin"}>
          <li className=' text-slate-200 hover:underline'> Login</li>
          </Link>
          
         
          </ul>
          <Link to="/Register">
          <button class="bg-transparent hover:bg-yellow-500 text-slate-200 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
              Register
          </button>
          </Link>
          
    </div>
</header>
  )
}

