import React from 'react'

export default function Detail() {
  return (
    <div className='grid grid-cols-2 mt-7'>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <div className="mb-4">
        <span className="text-xs text-gray-500 uppercase font-semibold">New</span>
      </div>
      <h2 className="text-xl font-bold mb-4">Scholarship Details</h2>
      <div className="mb-4 flex justify-between items-center">
        <div>
          <span className="text-sm text-gray-600 font-semibold">Scholarship Name</span>
          <p className="text-lg text-gray-800">Prime Ministers Scholarship Scheme for RPF RPSF</p>
        </div>
        <div>
          <span className="text-sm text-gray-600 font-semibold">Rewards</span>
          <p className="text-lg text-gray-800">₹3,000</p>
        </div>
      </div>
      <div className="mb-4 flex justify-between items-center">
        <div>
          <span className="text-sm text-gray-600 font-semibold">Provider</span>
          <p className="text-lg text-gray-800">Ministry of Railways in India</p>
        </div>
      </div>
      <div className="mb-4 flex justify-between items-center">
        <div>
          <span className="text-sm text-gray-600 font-semibold">Start Date</span>
          <p className="text-lg text-gray-800">13 Dec 2023</p>
        </div>
        <div>
          <span className="text-sm text-gray-600 font-semibold">End Date</span>
          <p className="text-lg text-gray-800">31 Dec 2023</p>
        </div>
      </div>
    </div>
    <div className="max-w-sm mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-500 uppercase font-semibold">New</span>
        <span className="text-xs text-gray-500 font-semibold">13 Dec 2023 - 31 Dec 2023</span>
      </div>
      <div className="mb-2">
        <p className="text-sm text-gray-600 font-semibold">Scholarship Name</p>
        <p className="text-md text-gray-800">Prime Ministers Scholarship Scheme for RPF RPSF</p>
      </div>
      <div className="mb-2">
        <p className="text-sm text-gray-600 font-semibold">Provider</p>
        <p className="text-md text-gray-800">Ministry of Railways in India</p>
      </div>
      <div className="mb-2">
        <p className="text-sm text-gray-600 font-semibold">Rewards</p>
        <p className="text-md text-gray-800">₹3,000</p>
      </div>
      
    </div>
    
        
    
    </div>
  )
}
