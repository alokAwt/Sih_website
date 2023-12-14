import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFile,
  faGraduationCap,
  faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";

const SampleTable = () => {
  // Sample data
  const data = [
    { id: 1, name: "John Doe", state: "CA", status: "Active" },
    { id: 2, name: "Jane Doe", state: "NY", status: "Inactive" },
    { id: 2, name: "Jane Doe", state: "NY", status: "Inactive" },
    { id: 2, name: "Jane Doe", state: "NY", status: "Inactive" },
    { id: 2, name: "Jane Doe", state: "NY", status: "Inactive" },
    { id: 2, name: "Jane Doe", state: "NY", status: "Inactive" },
    // Add more data as needed
  ];

  const handleViewClick = (id) => {
    // Handle view click action
    window.open("/StudentList", "_blank");
    console.log(`View clicked for ID: ${id}`);
  };

  const handleApprovalClick = (id) => {
    // Handle approval click action
    console.log(`Approval clicked for ID: ${id}`);
  };

  return (
    <table className="min-w-full bg-white-500 border border-gray-300  shadow-md rounded-lg">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">State</th>
          <th className="py-2 px-4 border-b">Status</th>
          <th className="py-2 px-4 border-b">View</th>
          <th className="py-2 px-4 border-b">Approval</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="py-2 px-4 border-b">{item.name}</td>
            <td className="py-2 px-4 border-b">{item.state}</td>
            <td className="py-2 px-4 border-b">{item.status}</td>
            <td className="py-2 px-4 border-b">
              {/* Add your view icon here */}
              <span
                className="cursor-pointer text-blue-500 hover:text-blue-700"
                onClick={() => handleViewClick(item.id)}
              >
                View
              </span>
            </td>
            <td className="py-2 px-4 border-b justify-center">
              {/* approval button here */}
              <button
                className={`bg-${
                  item.approved ? "red" : "green"
                }-500 text-white px-4 py-2 rounded-full hover:bg-${
                  item.approved ? "red" : "green"
                }-700 ml-6 `}
                onClick={() => handleApprovalClick(item.id, index)}
              >
                {item.approved ? "Approved" : "Approve"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const StudentDashBoard = () => {
  const [ticketTitle, setTicketTitle] = useState("");
  const [ticketDescription, setTicketDescription] = useState("");

  const handleCreateTicket = () => {
    // Add logic to create a ticket (send to backend, etc.)
    console.log("Ticket created:", { ticketTitle, ticketDescription });

    // Reset form after creating a ticket
    setTicketTitle("");
    setTicketDescription("");
  };

  const cardsData = [
    { id: 1, color: "bg-blue-500 ", title: " Student applied", content: "57" },
    { id: 2, color: "bg-green-500", title: "Student Approved", content: "21" },
    {
      id: 3,
      color: "bg-yellow-500",
      title: "Student Pending",
      content: "Information for Card 3",
    },
    {
      id: 4,
      color: "bg-red-500",
      title: "Card 4",
      content: "Information for Card 4",
    },
  ];
  return (
    <>
      <div>
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="bg-gray-800 text-white w-64 py-6 flex-shrink-0">
              <div className="text-2xl font-semibold text-center">
                College Dashboard
              </div>
              {/* Add sidebar links here */}
              <ul className="mt-6">
                <li className="mb-4">
                  <a
                    href="#"
                    className="flex items-center  p-2 rounded hover:bg-gray-700"
                  >
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    Student List
                  </a>
                </li>

                <li className="mb-4">
                  <a
                    href="#"
                    className="flex items-center  p-2 rounded hover:bg-gray-700"
                  >
                    <FontAwesomeIcon icon={faFile} className="mr-2" />
                    Documents
                  </a>
                </li>

                <li className="mb-4">
                  <Link
                    to="/Scholarship"
                    className="flex items-center  p-2 rounded hover:bg-gray-700"
                  >
                    <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
                    Scholarships
                  </Link>
                </li>

                <li className="mb-4">
                  <a
                    href="#"
                    className="flex items-center p-2 rounded hover:bg-gray-700"
                  >
                    <FontAwesomeIcon icon={faTicketAlt} className="mr-2" />
                    Ticket
                  </a>
                </li>
                {/* Add more sidebar links as needed */}
              </ul>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-x-hidden overflow-y-auto">
            {/* Header */}
            <header className="bg-white shadow-md p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Collage Name</h2>
                <button className="bg-red-500 text-slate-200 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded ">
                  Logout
                </button>
                {/* Add user profile or logout button */}
              </div>
              <div></div>
            </header>
            <div className="flex flex-wrap mt-5 ml-3 mr-3  border rounded-lg shadow-lg  ">
              {cardsData.map((card) => (
                <div
                  key={card.id}
                  className={`w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4 text-xl ${card.color} text-white`}
                >
                  <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                  <p>{card.content}</p>
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className="mt-5 mr-5 ml-5 p-5">
              <SampleTable />
            </div>
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
      </div>
    </>
  );
};

export default StudentDashBoard;
