// ScholarshipCard.js
import React from 'react';


const ScholarshipCard = ({ name, registrationStartDate, endDate, applyLink }) => {
  return (
    <div className="max-w-xs bg-pink-200 rounded overflow-hidden shadow-md mb-4 mr-4 font-mono hover:scale-110">
      <div className="p-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{name}</div>
        <p className="text-gray-700 text-sm mb-2">
          <strong>Registration Start Date:</strong> {registrationStartDate}
        </p>
        <p className="text-gray-700 text-sm mb-2">
          <strong>End Date:</strong> {endDate}
        </p>
      </div>
      <div className="p-4">
        <a
          href={applyLink} //this is for showing details of Scholrship
          className="bg-pink-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default ScholarshipCard;