'use client';
import { useState } from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const Reports = () => {
  const pdfFiles = [
    { id: 1, src: '/assets/pdfs/sample1.pdf', title: 'Report 1' },
    { id: 2, src: '/assets/pdfs/sample2.pdf', title: 'Report 2' },
    { id: 3, src: '/assets/pdfs/sample3.pdf', title: 'Report 3' },
  ];

  const [selectedPdf, setSelectedPdf] = useState(null);

  return (
    <div className="w-full p-5">
      {selectedPdf ? (
        <>
          <button className="bg-gray-500 text-white px-4 py-2 mb-3" onClick={() => setSelectedPdf(null)}>
            Back to Reports
          </button>
          <iframe src={selectedPdf.src} className="w-full h-[500px]"></iframe>
        </>
      ) : (
        <div className="flex">
          {/* Image on the left */}
          <div className="w-1/4 mb-4">
            <img
              src="/assets/images/reportTemplate.png"
              alt="Report Template"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Report links on the right */}
          <div className="w-3/4 ml-6">
            <div className="grid gap-4">
              {pdfFiles.map((pdf) => (
                <div
                  key={pdf.id}
                  className="flex justify-between items-center p-3 border cursor-pointer hover:bg-gray-300"
                  onClick={() => setSelectedPdf(pdf)}
                >
                  <div className="flex items-center space-x-2">
                    <div className="bg-pink-900 p-1 rounded">
                      <FontAwesomeIcon icon={faFilePdf} className="w-6 h-6 text-white" />
                    </div>
                    <p>{pdf.title}</p>
                  </div>
                  <a href={pdf.src} download className="flex items-center space-x-1">
                    <ArrowDownTrayIcon className="w-6 h-6 text-blue-500" />
                    <span>Download</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;