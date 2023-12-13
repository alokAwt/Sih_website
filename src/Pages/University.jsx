import React from 'react'
import { Link } from 'react-router-dom'

export default function University() {
    
  return (
    <div className='min-h-screen flex items-center justify-center bg-cover' style={{ backgroundImage: 'url(" https://img.freepik.com/free-vector/college-students-concept-illustration_114360-10205.jpg?w=996&t=st=1702288022~exp=1702288622~hmac=b102a5dbfa26a384e52393eee41874ad7a353ca3aaf3596c00c3c4b1d7d089de' }}>
        <div className='bg-white p-8 rounded-lg shadow-md w-96'>
         <h2 className='text-2xl font-bold font-mono mb-4 text-blue-600'>
            Institute Login
         </h2>
         <form>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email:</label>
            <input className='border rounded w-full py-2 px-3' 
            type='email'
            placeholder='Enter College Email'

            >
            
            </input>
            <label className='block text-gray-700 mt-5 text-sm font-bold mb-2' htmlFor='email'>OTP on registered mail:</label>
            <input className='border rounded w-full py-2 px-3 ' 
            type='text'
            placeholder='Enter OTP'

            >
            
            </input>
            <Link to={'/College'}>
            <button className="bg-green-500 mt-4 text-white py-2 px-4 rounded hover:bg-red-600">
            Login

            </button>
            </Link>
          
            
            
            
            
            
         </form>
        </div>
    
    </div>
  )
}
