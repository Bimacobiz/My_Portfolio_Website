import React from 'react';

const Experience = () => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h3>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h4 className="text-xl font-semibold text-gray-900">Freelance Software Developer</h4>
          <p className="text-gray-600">Various clients</p>
          <p className="text-gray-500">2020 - Present</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            <li>Led development of enterprise-level web applications</li>
            <li>Implemented microservices architecture using Node.js and Docker</li>
            <li>Mentored junior developers and conducted code reviews</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h4 className="text-xl font-semibold text-gray-900">Content Writer & Digital Marketer</h4>
          <p className="text-gray-600">Several Clients</p>
          <p className="text-gray-500">2019 - Present</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
            <li>Created technical content and documentation for software products</li>
            <li>Developed and executed digital marketing strategies</li>
            <li>Increased client website traffic by 150% through SEO optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;