import React from 'react';
import { Download } from 'lucide-react';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Certifications from './Certifications';

const Resume = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/src/assets/Collins_Mahigi_Resume.pdf';
    link.download = 'Collins_Mahigi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Resume</h2>
          <button 
            onClick={handleDownload}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </button>
        </div>
        
        <div className="space-y-8">
          <Experience />
          <Education />
          <Skills />
          <Certifications />
        </div>
      </div>
    </section>
  );
};

export default Resume;