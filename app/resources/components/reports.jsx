'use client';
import { useState } from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const REPORTS_PER_PAGE = 10;
const OTHER_REPORTS_PER_PAGE = 4;

const Reports = () => {
  const pdfFiles = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    src: `/assets/pdfs/sample${i + 1}.pdf`,
    title: `Report ${i + 1}`,
    size: `${(i + 1) * 2} MB`,  // Example file size
    downloadCount: 10,           // Static number for downloads
    createdDate: `2025-01-0${i + 1}`, // Example created date
    modifiedDate: `2025-01-0${i + 1}`, // Example modified date
  }));

  const [selectedPdf, setSelectedPdf] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [otherReportsPage, setOtherReportsPage] = useState(1);

  const totalPages = Math.ceil(pdfFiles.length / REPORTS_PER_PAGE);
  const totalOtherPages = Math.ceil(pdfFiles.length / OTHER_REPORTS_PER_PAGE);
  const startIndex = (currentPage - 1) * REPORTS_PER_PAGE;
  const paginatedReports = pdfFiles.slice(startIndex, startIndex + REPORTS_PER_PAGE);
  
  const otherStartIndex = (otherReportsPage - 1) * OTHER_REPORTS_PER_PAGE;
  const paginatedOtherReports = pdfFiles.slice(otherStartIndex, otherStartIndex + OTHER_REPORTS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleOtherReportsPageChange = (page) => {
    setOtherReportsPage(page);
  };

  return (
    <div className="w-full p-5">
      {selectedPdf ? (
        <>
          <button className="bg-gray-500 text-white px-4 py-2 mb-3" onClick={() => setSelectedPdf(null)}>
            Back to Reports
          </button>

          {/* Left image stays the same */}
          <div className="flex">
            <div className="w-1/3 mb-4">
              <img
                src="/assets/images/reportTemplate.png"
                alt="Report Template"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Table with file details and PDF links */}
            <div className="w-2/3 ml-6">
              <table className="min-w-full table-auto border-collapse border">
                <thead>
                  <tr>
                    <th className="border p-2 text-left">File Detail</th>
                    <th className="border p-2 text-left">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-pink-900 hover:text-white">
                    <td className="border p-2">Size</td>
                    <td className="border p-2">{selectedPdf.size}</td>
                  </tr>
                  <tr className="hover:bg-pink-900 hover:text-white">
                    <td className="border p-2">Download Count</td>
                    <td className="border p-2">{selectedPdf.downloadCount}</td>
                  </tr>
                  <tr className="hover:bg-pink-900 hover:text-white">
                    <td className="border p-2">Number of Accesses</td>
                    <td className="border p-2">{selectedPdf.downloadCount}</td>
                  </tr>
                  <tr className="hover:bg-pink-900 hover:text-white">
                    <td className="border p-2">Created Date</td>
                    <td className="border p-2">{selectedPdf.createdDate}</td>
                  </tr>
                  <tr className="hover:bg-pink-900 hover:text-white">
                    <td className="border p-2">Modified Date</td>
                    <td className="border p-2">{selectedPdf.modifiedDate}</td>
                  </tr>
                </tbody>
              </table>

              {/* Links to download */}
              <div className="mt-4">
                <a href={selectedPdf.src} download className="text-blue-500 flex items-center space-x-1">
                  <ArrowDownTrayIcon className="w-6 h-6" />
                  <span>Download Report</span>
                </a>
              </div>

              {/* Other Reports Header */}
              <h2 className="text-xl font-bold mt-6 mb-4">Other Reports</h2>

              {/* Additional 4 PDF resource links below the table with pagination */}
              <div className="grid gap-4 mt-5 mb-5">
                {paginatedOtherReports.map((pdf) => (
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
                  </div>
                ))}
              </div>

              {/* Pagination for Other Reports */}
              {pdfFiles.length > OTHER_REPORTS_PER_PAGE && (
                <div className="flex justify-center gap-3 mb-5">
                  <button
                    onClick={() => handleOtherReportsPageChange(otherReportsPage - 1)}
                    disabled={otherReportsPage === 1}
                    className="px-3 py-1 text-sm bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalOtherPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handleOtherReportsPageChange(page)}
                      className={`px-3 py-1 text-sm rounded-md ${otherReportsPage === page ? 'bg-pink-900 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => handleOtherReportsPageChange(otherReportsPage + 1)}
                    disabled={otherReportsPage === totalOtherPages}
                    className="px-3 py-1 text-sm bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300"
                  >
                    Next
                  </button>
                </div>
              )}

              {/* Main Pagination Controls */}
              {pdfFiles.length > REPORTS_PER_PAGE && (
                <div className="flex justify-center gap-3 mt-5">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 text-sm bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-1 text-sm rounded-md ${currentPage === page ? 'bg-pink-900 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 text-sm bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
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
              {/* Report Links: 6 Links */}
              <div className="grid gap-4 mb-5">
                {pdfFiles.slice(0, 6).map((pdf) => (
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
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              {pdfFiles.length > REPORTS_PER_PAGE && (
                <div className="flex justify-center gap-3 mt-5">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 text-sm bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-1 text-sm rounded-md ${currentPage === page ? 'bg-pink-900 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 text-sm bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Reports;