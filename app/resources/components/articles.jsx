'use client';
import { useState } from 'react';

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
        <div className="grid gap-4">
          {pdfFiles.map((pdf) => (
            <div key={pdf.id} className="flex justify-between p-3 border" onClick={() => setSelectedPdf(pdf)}>
              <p>{pdf.title}</p>
              <a href={pdf.src} download>
                <ArrowDownTrayIcon className="w-6 h-6 text-blue-500" />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reports;
