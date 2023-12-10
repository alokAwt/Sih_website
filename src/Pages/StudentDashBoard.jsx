import React, { useState } from 'react'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom';

export default function StudentDashBoard() {
  const [formData, setFormData] = useState({
    fname: '',
    lname:'',
    email: '',
    phone: '',
    state: '',
    district: '',
    address: '',
    Collage:'',
    annualIncome: '',
    fieldOfEducation: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      state: '',
      district: '',
      address: '',
      Collage:'',
      annualIncome: '',
      fieldOfEducation: '',
    });
  };
  return (
    <div>
       <>
    
    <div className="flex h-screen bg-gray-100">
    {/* Sidebar */}
    <div className="bg-gray-800 text-white w-64 py-6 flex-shrink-0">
      <div className="text-2xl font-semibold text-center">Student Dashboard</div>
      {/* Add sidebar links here */}
      <ul className="mt-6">
        <li className="mb-4">
          <a href="#" className="block p-2 rounded hover:bg-gray-700">Dashboard</a>
        </li>
        <Link to={"/"}>
        <li className="mb-4">
          <a  href="#" className="block p-2 rounded hover:bg-gray-700">Home</a>
        </li>
        </Link>
        
        <li className="mb-4">
          <a href="#" className="block p-2 rounded hover:bg-gray-700">Documents</a>
        </li>
        <Link to={'/Scholarship'}>
        <li className="mb-4">
          <a href="#" className="block p-2 rounded hover:bg-gray-700">Scholarship</a>
        </li>
        </Link>
        
        {/* Add more sidebar links as needed */}
      </ul>
    </div>

    {/* Main Content Area */}
    <div className="flex-1 overflow-x-hidden overflow-y-auto">
      {/* Header */}
      <header className="bg-white shadow-md p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Welcome Student!</h2>
          <button className='bg-red-500 text-slate-200 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded '>
            Logout
          </button>
          {/* Add user profile or logout button */}
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Dashboard components go here */}
       
        <form>
    <div class="grid gap-6 mb-6 md:grid-cols-2 bg-gray-800 p-4 border rounded-lg">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sagar"
             value={formData.fname}
             onChange={(e) => setFormData(e.target.value)}
             required />
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hariramani" 
             value={formData.lname}
             onChange={(e) => setFormData(e.target.value)}
             required />
        </div>
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="sagar@gmail.com"
             value={formData.email}
             onChange={(e) => setFormData(e.target.value)}
             required />
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="6261677514" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 
             value={formData.phone}
             onChange={(e) => setFormData(e.target.value)}
             required/>
        </div>
        <div>
            <label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
            <input type="text" id="state" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Chattisghar" 
             value={formData.state}
             onChange={(e) => setFormData(e.target.value)}
             required/>
        </div>
        <div>
            <label for="District" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">District</label>
            <input type="text" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bhilai" 
             value={formData.district}
             onChange={(e) => setFormData(e.target.value)}
             required/>
        </div>
        <div>
            <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Permanent Address</label>
            <input type="text" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bhilai 122 B CG" 
             value={formData.address}
             onChange={(e) => setFormData(e.target.value)}
             required/>
        </div>
      
    </div>
    <div class="grid gap-6 mb-6 md:grid-cols-2 bg-gray-800 p-4 border rounded-lg">
        <div>
            <label for="Collage" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Collage</label>
            <input type="text" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="IIT Delhi" 
             value={formData.Collage}
             onChange={(e) => setFormData(e.target.value)}
             required/>
        </div>
        <div>
            <label for="FeildofEducation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Feild of Education</label>
            <input type="text" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="B.Tech" 
            value={formData.fieldOfEducation}
            onChange={(e) => setFormData(e.target.value)}
            required/>
        </div>
        </div>
    
   
</form>
        
      </main>
    </div>
  </div>
  <Footer/>
  </>
    </div>
  )
}
