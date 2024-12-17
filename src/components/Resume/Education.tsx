import React from 'react';

const Education = () => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h4 className="text-xl font-semibold text-gray-900">Software Engineering</h4>
          <p className="text-gray-600">African Leadership Exchange (ALX)</p>
          <p className="text-gray-500">2023 - 2024</p>
          <p className="text-gray-700 mt-2">
            Relevant coursework: Data Structures, Algorithms, Programming Languages, Computer Networks, 
            DevOPs, Database Management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;