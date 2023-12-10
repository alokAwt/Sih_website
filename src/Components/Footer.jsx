import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-800 to-violet-500 text-white p-4 text-center flex flex-col ">
      <div className="flex justify-center space-x-6">
        <a href="/" className="hover:text-gray-300">Home</a>
        <a href="/faq" className="hover:text-gray-300">FAQ</a>
        <a href="/feedback" className="hover:text-gray-300">Feedback</a>
        <a href="/scholarship-2023" className="hover:text-gray-300">Scholarship 2023</a>
        <a href="/scholarship-2023" className="hover:text-gray-300">Terms & Conditions</a>
        <a href="/scholarship-2023" className="hover:text-gray-300">Privacy</a>
        {/* Add more links as needed */}
      </div>
      <p>&copy; 2023 Vitaran. All rights reserved.</p>
    </footer>
  )
}
