// ScholarshipCard.js
import React from "react";
import { Link } from "react-router-dom";

const ScholarshipCard = ({
  SchlorshipName,
  Description,
  Deadline,
  State,
  Type,
  _id,
}) => {
  return (
    <div className="max-w-xs bg-pink-200 rounded overflow-hidden shadow-md mb-4 mr-4 font-mono hover:scale-110">
      <div className="p-6">
        <div className="font-bold text-xl mb-2 text-gray-800">
          {SchlorshipName}
        </div>
        <p className="text-gray-700 text-sm mb-2">
          <strong>Registration Start Date:</strong> {Deadline}
        </p>
        <p className="text-gray-700 text-sm mb-2">
          <strong>End Date:</strong> {Deadline}
        </p>
        <p className="text-gray-700 text-sm mb-2">
          <strong>State:</strong> {State}
        </p>
      </div>
      <div cl assName="p-4">
        <Link to={`/Detail/${_id}`}>
          <button
            //this is for showing details of Scholrship
            className="bg-pink-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 mb-5 ml-6 rounded-full"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ScholarshipCard;
