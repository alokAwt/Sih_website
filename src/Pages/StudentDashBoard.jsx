import React, { useState } from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faHome, faFile, faGraduationCap, faTicketAlt } from '@fortawesome/free-solid-svg-icons';

export default function StudentDashBoard() {
  const [ticketTitle, setTicketTitle] = useState("");
  const [ticketDescription, setTicketDescription] = useState("");

  const handleCreateTicket = () => {
    // Add logic to create a ticket (send to backend, etc.)
    console.log("Ticket created:", { ticketTitle, ticketDescription });

    // Reset form after creating a ticket
    setTicketTitle("");
    setTicketDescription("");
  };
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    state: "",
    district: "",
    address: "",
    Collage: "",
    annualIncome: "",
    fieldOfEducation: "",
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
      name: "",
      email: "",
      phone: "",
      state: "",
      district: "",
      address: "",
      Collage: "",
      annualIncome: "",
      fieldOfEducation: "",
    });
  };
  return (
    <div>
      <>
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <div className="bg-gray-800 text-white w-64 py-6 flex-shrink-0">
      <div className="text-2xl font-semibold text-center">
        Student Dashboard
      </div>
      {/* Add sidebar links here */}
      <ul className="mt-6">
        

        <li className="mb-4">
          <Link to="/" className="flex items-center  p-2 rounded hover:bg-gray-700">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </Link>
        </li>

        <li className="mb-4">
          <Link to="#" className="flex items-center  p-2 rounded hover:bg-gray-700">
            <FontAwesomeIcon icon={faFile} className="mr-2" />
            Documents
          </Link>
        </li>

        <li className="mb-4">
          <Link to="/Scholarship" className="flex items-center  p-2 rounded hover:bg-gray-700">
            <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
            Scholarship
          </Link>
        </li>

        <li className="mb-4">
          <Link to="#" className="flex items-center  p-2 rounded hover:bg-gray-700">
            <FontAwesomeIcon icon={faTicketAlt} className="mr-2" />
            Ticket
          </Link>
        </li>

        {/* Add more sidebar links as needed */}
      </ul>
    </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-x-hidden overflow-y-auto">
            {/* Header */}
            <header className="bg-white shadow-md p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Welcome Student!</h2>
                <button className="bg-red-500 text-slate-200 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded ">
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
                    <label
                      for="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Sagar"
                      value={formData.fname}
                      onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      for=" tickets"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tickets
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Hariramani"
                      value={formData.lname}
                      onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="company"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="sagar@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="phonenumber"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                     PhoneNumber
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="6261677514"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      value={formData.phone}
                      onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="city"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="state"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Chattisghar"
                      value={formData.state}
                      onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="District"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      District
                    </label>
                    <input
                      type="text"
                      id="visitors"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Bhilai"
                      value={formData.district}
                      onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="landmark"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Landmark
                    </label>
                    <input
                      type="text"
                      id="visitors"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Bhilai 122 B CG"
                      value={formData.address}
                      onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="logintype"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                     LoginType
                    </label>
                    <input
                      type="text"
                      id="visitors"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Bhilai 122 B CG"
                      value={formData.address}
                      onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="application"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Application
                    </label>
                    <input
                      type="text"
                      id="visitors"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Bhilai 122 B CG"
                      value={formData.address}
                      onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="adharcardnumber"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    AdharCardNumber
                    </label>
                    <input
                      type="text"
                      id="visitors"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Bhilai 122 B CG"
                      value={formData.address}
                      onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="adharcard"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                     AdharCard
                    </label>
                    <input
                      type="text"
                      id="visitors"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Bhilai 122 B CG"
                      value={formData.address}
                      onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                 
                 
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-2 bg-gray-800 p-4 border rounded-lg">
                  <div>
                    <label
                      for="CasteCertificate"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      CasteCertificate
                    </label>
                    <input
                      type="text"
                      id="visitors"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="IIT Delhi"
                      value={formData.Collage}
                      onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="IncomeCertificate"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      IncomeCertificate
                    </label>
                    <input
                      type="text"
                      id="visitors"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="IIT Delhi"
                      value={formData.Collage}
                      onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="Marksheet"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                     Marksheet
                    </label>
                    <input
                      type="text"
                      id="visitors"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="IIT Delhi"
                      value={formData.Collage}
                      onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="RecidentCertificate"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      RecidentCertificate
                    </label>
                    <input
                      type="text"
                      id="visitors"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="B.Tech"
                      value={formData.fieldOfEducation}
                      onChange={(e) => setFormData(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </form>
            </main>
            <div className="p-5 mr-6 ml-6 rounded-lg shadow-lg mb-5 bg-black/40">
              <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md mb-5 ">
                <h2 className="text-2xl font-bold mb-4">Create a New Ticket</h2>
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-semibold mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={ticketTitle}
                    onChange={(e) => setTicketTitle(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600 text-sm font-semibold mb-2">
                    Description
                  </label>
                  <textarea
                    value={ticketDescription}
                    onChange={(e) => setTicketDescription(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  ></textarea>
                </div>
                <button
                  onClick={handleCreateTicket}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Create Ticket
                </button>
              </div>
            </div>
          </div>
         
        </div>
        
        <Footer />
      </>
    </div>
  );
}