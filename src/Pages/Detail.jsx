import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Detail() {
  // Manually written scholarship requirements
  let token = localStorage.getItem("token");
const navigate=useNavigate()
  const [tabledata, setTableData] = useState([]);
  const scholarshipRequirements = [
    {
      title: "Citizenship",
      description: "Must be a citizen of India",
    },
    {
      title: "Academic Performance",
      description: "Minimum GPA of 3.0",
    },
    {
      title: "Enrollment",
      description: "Enrolled in a recognized institution",
    },
    {
      title: "Enrollment",
      description: "Enrolled in a recognized institution",
    },
    {
      title: "Enrollment",
      description: "Enrolled in a recognized institution",
    },
    // Add more requirements as needed
  ];

  // Manually written required documents
  const requiredDocuments = [
    "Copy of Aadhar card",
    "Transcript or mark sheets",
    "Proof of enrollment",
    "Proof of enrollment",
    "Proof of enrollment",
    // Add more required documents as needed
  ];
  const { id } = useParams();

  const SingleSchlorship = async () => {
    let data = await fetch(
      `https://sih-backend-ivory.vercel.app/api/v1/Government/AllSchlorship/${id}`
    );
    data = await data.json();
    console.log(data,"akal")
    setTableData(data.data);
  };

  useEffect(() => {
    SingleSchlorship();
  }, []);

  return (
    <>
      <div
        className="flex flex-wrap justify-center gap-0"
        style={{ marginBottom: 20 }}
      >
        {/* Scholarship Details Card */}
        <div className="sm:max-w-md mx-auto sm:mt-8 p-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md shadow-md text-white">
          <div className="mb-3">
            <span className="text-xs text-gray-300 uppercase font-semibold">
              New
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Scholarship Details</h2>
          <div className="mb-4 flex flex-col">
            <div className="mb-2">
              <span className="text-sm text-gray-300 font-semibold">
                Scholarship Name
              </span>
              <p className="text-lg font-semibold">
                {tabledata.SchlorshipName} Government of Jharkhand And Wellfere
              </p>
            </div>
            <div className="mb-2">
              <span className="text-sm text-gray-300 font-semibold">Type</span>
              <p className="text-lg font-semibold">{tabledata.Type}</p>
            </div>
            <div className="mb-2">
              <span className="text-sm text-gray-300 font-semibold">
                Provider
              </span>
              <p className="text-lg">{tabledata.State}</p>
            </div>
            <div className="mb-2">
              <span className="text-sm text-gray-300 font-semibold">
                Start Date
              </span>
              <p className="text-lg">{tabledata.Deadline}</p>
            </div>
            <div className="mb-2">
              <span className="text-sm text-gray-300 font-semibold">
                End Date
              </span>
              <p className="text-lg">{tabledata.Deadline}</p>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            {token ? (
             
                <button onClick={()=>navigate(`/apply/${tabledata.governmentId}/${tabledata._id}`)} className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-md font-semibold hover:bg-yellow-500">
                  Apply Now
                </button>
              
            ) : (
              <Link to="/Student">
                <button className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-md font-semibold hover:bg-yellow-500">
                  Apply Now
                </button>
              </Link>
            )}
          </div>
        </div>

        {/* Requirements Card */}
        <div className="sm:max-w-md mx-auto sm:mt-8 p-6 bg-white rounded-md shadow-md text-gray-800">
          <h2 className="text-2xl font-bold mb-4">Requirements</h2>
          <ul className="list-disc pl-6">
            {/* Map through the manually written requirements and display each requirement */}
            {scholarshipRequirements.map((requirement, index) => (
              <li key={index} className="text-lg mb-2">
                <span className="font-semibold">{requirement.title}:</span>{" "}
                {requirement.description}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mt-6 mb-4">Required Documents</h2>
          <ul className="list-disc pl-6">
            {/* Map through the manually written required documents and display each document */}
            {requiredDocuments.map((document, index) => (
              <li key={index} className="text-lg mb-2">
                {document}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}
