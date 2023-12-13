import React from 'react';

const DocumentTable = () => {
  const documentData = [
    { id: 1, name: 'Income Certificate', type: 'PDF' },
    { id: 2, name: 'Resident Certificate', type: 'PDF' },
    { id: 3, name: 'Caste Certificate', type: 'PDF' },
    { id: 4, name: 'Marksheet', type: 'PDF' },
    // Add more documents as needed
  ];

  return (
    <div className="container mx-auto mt-8">
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Document Name</th>
            <th className="py-2 px-4 border-b">Type</th>
          </tr>
        </thead>
        <tbody>
          {documentData.map((document) => (
            <tr key={document.id}>
              <td className="py-2 px-4 border-b">{document.name}</td>
              <td className="py-2 px-4 border-b">{document.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentTable;
