import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const DocumentTable = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const documentData = [
    { id: 1, name: 'Income Certificate', type: 'PDF', pdfUrl: '/path/to/income_certificate.pdf' },
    { id: 2, name: 'Resident Certificate', type: 'PDF', pdfUrl: '/path/to/resident_certificate.pdf' },
    { id: 3, name: 'Caste Certificate', type: 'PDF', pdfUrl: '/path/to/caste_certificate.pdf' },
    { id: 4, name: 'Marksheet', type: 'PDF', pdfUrl: '/path/to/marksheet.pdf' },
    // Add more documents as needed
  ];

  const openPdf = (pdfUrl) => {
    setSelectedDocument(pdfUrl);
  };

  const closePdf = () => {
    setSelectedDocument(null);
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
                <button onClick={() => openPdf(document.pdfUrl)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedDocument && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            <button onClick={closePdf}>Close</button>
            <Document file={selectedDocument} onLoadSuccess={closePdf}>
              <Page pageNumber={1} />
            </Document>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentTable;