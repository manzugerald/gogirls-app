'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const VIDEOS_PER_PAGE = 2; // Only two videos per page (one row, two columns)

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/videos');
        const data = await response.json();

        console.log('Fetched data:', data); // Debugging log

        if (Array.isArray(data)) {
          setVideos(data);
          setSelectedVideo(data[0] || null); // Set first video as selected
        } else {
          console.error('Unexpected response format:', data);
          setVideos([]); // Fallback to empty array
          setSelectedVideo(null);
        }
      } catch (error) {
        console.error('Failed to load videos:', error);
        setVideos([]); // Fallback to empty array on error
        setSelectedVideo(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVideos();
  }, []);

  if (isLoading) return <div className="p-5 text-center">Loading videos...</div>;

  // Pagination logic with array checks
  const totalPages = Math.ceil((Array.isArray(videos) ? videos.length : 0) / VIDEOS_PER_PAGE);
  const startIndex = (currentPage - 1) * VIDEOS_PER_PAGE;
  const paginatedVideos = Array.isArray(videos) ? videos.slice(startIndex, startIndex + VIDEOS_PER_PAGE) : [];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full p-5 max-w-3xl mx-auto"> {/* Adjust the max-w-3xl here for width control */}
      {videos.length === 0 ? (
        <p className="text-center">No videos found</p>
      ) : (
        <>
          {/* Selected Video Section */}
          {selectedVideo && (
            <div className="flex justify-center mb-8">
              <div className="text-center max-w-xl w-full bg-white rounded-md shadow-md">
                {/* Upper Part: Video and Controls */}
                <div className="w-full">
                  <iframe
                    width="100%"
                    height="350"
                    src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                    title={selectedVideo.title || 'No title available'}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="rounded-t-md mx-auto"
                  />
                </div>
                {/* Lower Part: Title and Views */}
                <div className="bg-pink-900 text-white p-3 rounded-b-md">
                  <h3 className="text-xl font-bold">{selectedVideo.title || 'No title available'}</h3>
                  <p className="text-sm mt-1">Views: {selectedVideo.viewCount || '0'}</p>
                </div>
              </div>
            </div>
          )}

          {/* Video Thumbnails (Grid Layout) */}
          <div className="max-w-xl w-full mx-auto grid grid-cols-2 gap-4 mb-8">
            {paginatedVideos.map((video) => (
              <div
                key={video.id}
                className="relative bg-pink-900 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                {/* Upper Part: Thumbnail */}
                <div className="w-full h-32 bg-pink-900 flex items-center justify-center">
                  <Image
                    src={video.thumbnail || '/default-thumbnail.jpg'}
                    alt={video.title || 'No title available'}
                    width={160}
                    height={90}
                    className="rounded-t-md w-full h-full object-cover"
                  />
                </div>
                {/* Lower Part: Title and Views */}
                <div className="bg-pink-900 text-white p-2 rounded-b-md">
                  <h2 className="text-sm font-semibold break-words">{video.title || 'No title available'}</h2>
                  <p className="text-xs mt-1">Views: {video.viewCount || '0'}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {videos.length > VIDEOS_PER_PAGE && (
            <div className="flex justify-center gap-3">
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
                  className={`px-3 py-1 text-sm rounded-md ${
                    currentPage === page ? 'bg-pink-900 text-white' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
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
        </>
      )}

      {/* Inline CSS for fold effect */}
      <style jsx>{`
        .fold-effect {
          clip-path: polygon(0 0, 100% 0, 0 100%);
          z-index: 10;
        }
      `}</style>
    </div>
  );
};

export default Videos;
