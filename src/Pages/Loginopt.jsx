import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Loginopt() {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = async () => {
      try {
        let incomes = localStorage.getItem('otpdigi');
  
        if (!password.trim()) {
          alert('Please enter the OTP.'); // Show an alert or handle the error appropriately
          return;
        }
           console.log(incomes);
        if (password === incomes) {
          let res = await fetch(
            `https://sih-backend-ivory.vercel.app/api/v1/Users/DigiLocker/Login`,
            {
              method: 'POST',
              body: JSON.stringify({ AdharNumber: '213456787654' }),
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
  
          res = await res.json();
          console.log(res);
          localStorage.setItem('token', res.token);
  
        
          navigate('/StudentDashBoard');
        } else {
          alert('Invalid OTP. Please enter the correct OTP.');
        }
      } catch (error) {
        alert(error.message);
      }
    };
  return (
   <div className='min-h-screen flex items-center justify-center 
   bg-gradient-to-r from-indigo-800 to-violet-500'>
    <div className='max-w-md w-full p-6 bg-white shadow-md rounded-md'>
        <h2 className='text-2xl font-semibold font-mono mb-6'>
            Login with digilocker
        </h2>
        <form>
            <div className='mb--6'>
                <label htmlFor="otp" 
                className='block text-gray-600 text-sm font-medium mb-2'
                >
                    Enter OTP 
                </label>
                <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="OTP"
              required
            />

            </div>
            <button
            type="button"
            className="w-full mt-5 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
 
    </div>
   </div>
  )
}
