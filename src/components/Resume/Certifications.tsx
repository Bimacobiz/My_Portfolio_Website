import React from 'react';

const Certifications = () => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h4 className="text-xl font-semibold text-gray-900">AWS Certified Developer</h4>
          <p className="text-gray-600">Amazon Web Services</p>
          <p className="text-gray-500">2022</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h4 className="text-xl font-semibold text-gray-900">Certified Digital Marketing Professional</h4>
          <p className="text-gray-600">Digital Marketing Institute</p>
          <p className="text-gray-500">2021</p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;