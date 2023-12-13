import React, { useState } from 'react';
import { MdVisibility } from 'react-icons/md'; // Import the view icon from a relevant library

const DocumentTable = () => {
  const documentData = [
    { id: 1, name: 'Income Certificate', type: 'PDF', content: 'Income Certificate content...' },
    { id: 2, name: 'Resident Certificate', type: 'PDF', content: 'Resident Certificate content...' },
    { id: 3, name: 'Caste Certificate', type: 'PDF', content: 'Caste Certificate content...' },
    { id: 4, name: 'Marksheet', type: 'PDF', content: 'Marksheet content...' },
    // Add more documents as needed
  ];

  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleViewClick = (document) => {
    setSelectedDocument(document);
  };

  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Document Name</th>
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {documentData.map((document) => (
            <tr key={document.id}>
              <td className="py-2 px-4 border-b">{document.name}</td>
              <td className="py-2 px-4 border-b">{document.type}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="text-blue-500"
                  onClick={() => handleViewClick(document)}
                >
                  <MdVisibility />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedDocument && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">
            Viewing: {selectedDocument.name}
          </h2>
          {/* Render the document view or details here */}
          <p>Type: {selectedDocument.type}</p>
          <div>
            <p>Content:</p>
            <pre>{selectedDocument.content}</pre>
          </div>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default DocumentTable;
