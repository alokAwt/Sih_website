import React from 'react'
import Footer from '../Components/Footer'

export default function Admin() {
  return (
    <>
    
    <div className="flex h-screen bg-gray-100">
    {/* Sidebar */}
    <div className="bg-gray-800 text-white w-64 py-6 flex-shrink-0">
      <div className="text-2xl font-semibold text-center">Admin Dashboard</div>
      {/* Add sidebar links here */}
      <ul className="mt-6">
        <li className="mb-4">
          <a href="#" className="block p-2 rounded hover:bg-gray-700">Dashboard</a>
        </li>
        <li className="mb-4">
          <a href="#" className="block p-2 rounded hover:bg-gray-700">Users</a>
        </li>
        <li className="mb-4">
          <a href="#" className="block p-2 rounded hover:bg-gray-700">Listing</a>
        </li>
        {/* Add more sidebar links as needed */}
      </ul>
    </div>

    {/* Main Content Area */}
    <div className="flex-1 overflow-x-hidden overflow-y-auto">
      {/* Header */}
      <header className="bg-white shadow-md p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Welcome, Admin!</h2>
          {/* Add user profile or logout button */}
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Dashboard components go here */}
        <div className="bg-white p-4 rounded-md shadow-md">
          <h3 className="text-lg font-semibold mb-4">Dashboard Overview</h3>
          {/* Add charts, statistics, or other components */}
          <p>Placeholder for dashboard content.</p>
        </div>
      </main>
    </div>
  </div>
  <Footer/>
  </>
  )
}
