import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFile,
  faGraduationCap,
  faTicketAlt,
} from "@fortawesome/free-solid-svg-icons";
import VerificationStatus from "./NotVerfied";

const SampleTable = () => {
  const [data, setData] = useState([]);
  const GetApplication = async () => {
    let token = localStorage.getItem("token");
    let res = await fetch(
      `https://sih-backend-ivory.vercel.app/api/v1/Application/Get/Application/college/pending`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
      }
    );
    res = await res.json();
    console.log("alok", res);
    setData(res.data);
  };
  useEffect(() => {
    GetApplication();
  }, []);
  // Sample data
  // const data = [
  //   { id: 1, name: "John Doe", state: "CA", status: "Active" },
  //   { id: 2, name: "Jane Doe", state: "NY", status: "Inactive" },
  //   { id: 2, name: "Jane Doe", state: "NY", status: "Inactive" },
  //   { id: 2, name: "Jane Doe", state: "NY", status: "Inactive" },
  //   { id: 2, name: "Jane Doe", state: "NY", status: "Inactive" },
  //   { id: 2, name: "Jane Doe", state: "NY", status: "Inactive" },
  //   // Add more data as needed
  // ];

  const handleViewClick = (id) => {
    // Handle view click action
    window.open("/StudentList", "_blank");
    console.log(`View clicked for ID: ${id}`);
  };

  const handleApprovalClick = async (id) => {
    let token = localStorage.getItem("token");
    let response = await fetch(
      `https://sih-backend-ivory.vercel.app/api/v1/application/Update/Schlorship`,
      {
        method: "PUT",
        body: JSON.stringify({
          applicationid: id,
          Status: " Approved by College",
          collegeVerified: "Verified",
          Stage3: "Pending",
          Email: "alokkumar11746@gmail.com",
        }),
        headers: {
          "content-type": "application/json",
          token: token,
        },
      }
    );
    response = await response.json();
    if (response.status === "success") {
      GetApplication();
    }
  };

  return (
    <table className="min-w-full bg-white-500 border border-gray-300  shadow-md rounded-lg">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Student Name</th>
          <th className="py-2 px-4 border-b">College Name</th>
          <th className="py-2 px-4 border-b">Phonenumber</th>
          <th className="py-2 px-4 border-b">Email</th>
          <th className="py-2 px-4 border-b">Documents</th>
          <th className="py-2 px-4 border-b">Status</th>
          <th className="py-2 px-4 border-b">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="py-2 px-4 border-b">{item.StudentName}</td>
            <td className="py-2 px-4 border-b">{item.CollegeName}</td>
            <td className="py-2 px-4 border-b">{item.Phonenumber}</td>
            <td className="py-2 px-4 border-b">{item.Email}</td>
            <td className="py-2 px-4 border-b">
              {/* Add your view icon here */}
              <span
                className="cursor-pointer text-blue-500 hover:text-blue-700"
                onClick={() => handleViewClick(item.id)}
              >
                View
              </span>
            </td>
            <td className="py-2 px-4 border-b">{item.Status}</td>

            <td className="py-2 px-4 border-b justify-center">
              {/* approval button here */}
              <button
                className={`bg-${
                  item.approved ? "red" : "green"
                }-500 text-white px-4 py-2 rounded-full hover:bg-${
                  item.approved ? "red" : "green"
                }-700 ml-6 `}
                onClick={() => handleApprovalClick(item._id)}
              >
                {item.Status != "Pending" ? "Approved Successfully" : "Approve"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const StudentDashBoard = () => {
  const [tableData, setTableData] = useState([]);

  const GetOwnDetails = async () => {
    let token = localStorage.getItem("token");
    let res = await fetch(
      `https://sih-backend-ivory.vercel.app/api/v1/College/GetDetails`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          token: token,
        },
      }
    );
    res = await res.json();
    console.log(res.data);
    setTableData(res.data);
  };

  useEffect(() => {
    GetOwnDetails();
  }, []);

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
                <li className="mb-4 ml-5">
                  {tableData.VerfiedState && tableData.VerfiedState.length > 0
                    ? // <a
                      //   href="#"
                      //   className="flex items-center  p-2 rounded hover:bg-gray-700"
                      // >
                      //   <FontAwesomeIcon icon={faUser} className="mr-2" />
                      //   Application List
                      // </a>
                      null
                    : null}
                </li>

                <li className="mb-4 ml-5">
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

                {/* Add user profile or logout button */}
              </div>
              <div></div>
            </header>
            {/* <div className="flex flex-wrap mt-5 ml-3 mr-3  border rounded-lg shadow-lg  ">
              {cardsData.map((card) => (
                <div
                  key={card.id}
                  className={`w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4 text-xl ${card.color} text-white`}
                >
                  <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                  <p>{card.content}</p>
                </div>
              ))}
            </div> */}

            {/* Main Content */}
            {tableData.VerfiedState && tableData.VerfiedState.length > 0 ? (
              <div className="mt-5 mr-5 ml-5 p-5">
                <SampleTable />
              </div>
            ) : (
              <VerificationStatus></VerificationStatus>
            )}
            <Link to={"/Ticket"}>
              <div className="flex justify-end bottom-0 right-0 p-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Raise Ticket
                </button>
              </div>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default StudentDashBoard;
