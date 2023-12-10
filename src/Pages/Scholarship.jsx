import React from 'react'
import ScholarshipCard from './ScholarshipCard';
const scholarshipData = [
  {
    name: 'Scholarship 1',
    registrationStartDate: '2023-01-01',
    endDate: '2023-12-31',
    applyLink: 'https://example.com/scholarship1',
  },
  {
    name: 'Scholarship 2',
    registrationStartDate: '2023-02-01',
    endDate: '2023-11-30',
    applyLink: 'https://example.com/scholarship2',
  },
  {
    name: 'Scholarship 3',
    registrationStartDate: '2023-03-01',
    endDate: '2023-10-31',
    applyLink: 'https://example.com/scholarship3',
  },
  {
    name: 'Scholarship 4',
    registrationStartDate: '2023-04-01',
    endDate: '2023-09-30',
    applyLink: 'https://example.com/scholarship4',
  },
  {
    name: 'Scholarship 4',
    registrationStartDate: '2023-04-01',
    endDate: '2023-09-30',
    applyLink: 'https://example.com/scholarship4',
  },
  {
    name: 'Scholarship 4',
    registrationStartDate: '2023-04-01',
    endDate: '2023-09-30',
    applyLink: 'https://example.com/scholarship4',
  },
  {
    name: 'Scholarship 4',
    registrationStartDate: '2023-04-01',
    endDate: '2023-09-30',
    applyLink: 'https://example.com/scholarship4',
  },
  // Add more scholarship data as needed
];
export default function Scholarship() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100" style={{ backgroundImage: 'url(" https://images.unsplash.com/photo-1510070009289-b5bc34383727?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
        {scholarshipData.map((scholarship, index) => (
          <ScholarshipCard key={index} {...scholarship} />
        ))}
      </div>
    </div>
  )
}
