import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function DepartmentLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
   
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-800 to-violet-500">
    <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-6 font-serif">Login</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">
            LoginID
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
            Password
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
        <Link to={"/Admin"}>
        <button
          type="button"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        
        >
          Login
        </button>
        </Link>
        
        
      </form>
    </div>
  </div>
  )
}
