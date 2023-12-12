import React from "react";
import { Link } from "react-router-dom";
import { FaUserGraduate, FaUniversity } from 'react-icons/fa';
import { MdAccountBalance } from 'react-icons/md';


export default function Register() {
  return (
    <div className="flex justify-center mt-40 ">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 mt-10 mb-5 font-sans">
            {/* Card 1 */}

            <div
            
              className="max-w-sm w-full lg:max-w-xs 
               hover:bg-gradient-to-r from-indigo-800 to-violet-500 text-black-200 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent 
      shadow-md rounded-md overflow-hidden mt-4 hover:translate-y-2.5"
            >
              <Link to={"/Student"}>
                <div className="px-10 py-8">
                
                  <div className="font-bold text-xl mb-2 text-center">
                  <FaUserGraduate size={50} className="blue-400 justify-center relative flex flex-col ml-12" />
                   <p className="mt-3 justify-evenly"> Student Login</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Card 2 */}
            <div
              className="max-w-sm w-full lg:max-w-xs  hover:bg-gradient-to-r from-indigo-800 to-violet-500 text-black-200 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent 
      shadow-md rounded-md overflow-hidden hover:translate-y-2.5"
            >
              <Link to={"/University"}>
              <div className="px-10 py-8">
                
                <div className="font-bold text-xl mb-2 text-center">
                <FaUniversity size={50} color="green" className="ml-12"/>
                  University Login
                </div>
              </div>
              </Link>
              
              
            
            </div>

            {/* Card 3 */}
            <div
              className="max-w-sm w-full lg:max-w-xs  hover:bg-gradient-to-r from-indigo-800 to-violet-500 text-black-200 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent 
      shadow-md rounded-md overflow-hidden hover:translate-y-2.5"
            >
              <Link to={"/DepartmentLogin"}>
              <div className="px-10 py-8">
                <div className="font-bold text-xl mb-2 text-center">
                <MdAccountBalance size={50} color="purple" className="ml-12"/>
                  Department Login
                </div>
              </div>
              </Link>
              
            </div>
          </div>
          <div></div>
        </div>
  );
}
