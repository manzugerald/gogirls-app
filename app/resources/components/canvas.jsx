'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

// Helper to format ISO 8601 duration (e.g., "PT4M33S" -> "4:33")
const formatDuration = (isoDuration) => {
  const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;
  const seconds = match[3] ? parseInt(match[3]) : 0;
  return `${hours ? hours + ':' : ''}${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

// Helper to format date (e.g., "2023-10-01T12:00:00Z" -> "Oct 1, 2023")
const formatDate = (isoDate) => {
  return new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const Canvas = ({ selectedItem }) => {
  const galleryImages = [
    { id: 1, src: '/assets/images/banner9.png', alt: 'Gallery Image 1', title: 'Image 1', description: 'Lorem ipsum odor amet.' },
    { id: 2, src: '/assets/images/hero.png', alt: 'Gallery Image 2', title: 'Image 2', description: 'Lorem ipsum odor amet.' },
    { id: 3, src: '/assets/images/banner9.png', alt: 'Gallery Image 3', title: 'Image 3', description: 'Lorem ipsum odor amet.' },
  ];

  const pdfFiles = [
    { id: 1, src: '/assets/pdfs/sample1.pdf', title: 'Report 1', description: 'GoGirls Annual Report 2024: Tech Highs and Lows.' },
    { id: 2, src: '/assets/pdfs/sample2.pdf', title: 'Report 2', description: 'Female Tech Engineers Report: The growth of Female Tech Engineers in South Sudan' },
    { id: 3, src: '/assets/pdfs/sample3.pdf', title: 'Report 3', description: '2025 Job Report: Gender index in Tech - East Africa' },
    { id: 4, src: '/assets/pdfs/sample4.pdf', title: 'Report 4', description: 'Bridging the Tech Divide: How partnering with the NCA bridges the digital tech divide' },
    { id: 5, src: '/assets/pdfs/sample5.pdf', title: 'Report 5', description: 'What next after LLMs: Big Tech insights after the LLMs' },
  ];

  const articles = [
    {
      id: 1,
      title: 'Tech Trends 2024',
      description: 'A brief look at emerging tech.',
      image: '/assets/images/hero.png',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      title: 'AI in Africa',
      description: 'AI’s impact on the continent.',
      image: '/assets/images/ai.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
  ];

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoadingVideos, setIsLoadingVideos] = useState(false);
  const [videoError, setVideoError] = useState(null);
  const [featuredImage, setFeaturedImage] = useState(galleryImages[0]);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    if (selectedItem === 'Videos & OCRs') {
      setIsLoadingVideos(true);
      setVideoError(null);
      const fetchVideos = async () => {
        try {
          const response = await fetch('/api/videos');
          const text = await response.text();
          console.log('Raw response from /api/videos:', text);
          if (!response.ok) {
            throw new Error(`Server returned ${response.status}: ${text}`);
          }
          const videoData = JSON.parse(text);
          setVideos(videoData);
          setSelectedVideo(videoData[0]);
        } catch (error) {
          console.error('Error fetching videos:', error);
          setVideoError(error.message || 'Failed to load videos');
        } finally {
          setIsLoadingVideos(false);
        }
      };
      fetchVideos();
    }
  }, [selectedItem]);

  const handleThumbnailClick = (image) => {
    setFeaturedImage(image);
  };

  const handlePdfClick = (pdf) => {
    setSelectedPdf(pdf);
    setZoomLevel(1);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.2, 0.5));
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="ml-[250px] p-5 h-screen bg-gray-100">
      <h2 className="text-xl font-semibold mb-4">
        {selectedItem ? `You selected ${selectedItem}` : 'Please select an item'}
      </h2>
      <div className="bg-white p-5 rounded-lg shadow-md h-[calc(100%-4rem)] overflow-auto">
        {selectedItem === 'Videos & OCRs' && (
          <div className="flex flex-col items-center">
            {isLoadingVideos ? (
              <div className="flex flex-col items-center w-full">
                <div className="mb-5 flex justify-center">
                  <div className="w-[600px] text-center">
                    <div className="w-[600px] h-[400px] bg-gray-300 rounded-lg animate-pulse"></div>
                    <div className="mt-3">
                      <div className="w-3/4 h-6 bg-gray-300 rounded mx-auto animate-pulse"></div>
                      <div className="w-1/2 h-4 bg-gray-300 rounded mx-auto mt-2 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  {Array(6).fill(0).map((_, index) => (
                    <div
                      key={index}
                      className="w-[100px] bg-white rounded-md shadow-sm text-center"
                    >
                      <div className="w-[100px] h-[75px] bg-gray-300 rounded-t-md animate-pulse"></div>
                      <div className="w-3/4 h-4 bg-gray-300 rounded mx-auto my-1 animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            ) : videoError ? (
              <p className="text-red-600">{videoError}</p>
            ) : selectedVideo ? (
              <>
                <div className="mb-5 flex justify-center">
                  <div className="w-[600px] text-center">
                    <iframe
                      width="400"
                      height="250"
                      src={`https://www.youtube.com/embed/${selectedVideo.id}?rel=0`}
                      title={selectedVideo.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg mx-auto block"
                    />
                    <div className="mt-3">
                      <p className="text-lg font-bold">{selectedVideo.title}</p>
                      {/* <p className="text-sm text-gray-600 leading-relaxed">{selectedVideo.description}</p> */}
                      <div className="mt-2 text-sm text-gray-500">
                        <p>Published: {formatDate(selectedVideo.publishedAt)}</p>
                        {/* <p>Views: {selectedVideo.viewCount}</p> */}
                        {/* <p>Likes: {selectedVideo.likeCount}</p> */}
                        <p>Duration: {formatDuration(selectedVideo.duration)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  {videos.map((video) => (
                    <div
                      key={video.id}
                      className={`w-[100px] bg-white rounded-md shadow-sm text-center cursor-pointer transition-all duration-200 hover:bg-[#9f004d] ${
                        video.id === selectedVideo.id ? 'border-2 border-blue-500' : ''
                      }`}
                      onClick={() => handleVideoClick(video)}
                    >
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        width={100}
                        height={75}
                        className="object-cover rounded-t-md"
                      />
                      <p className="text-xs my-1 truncate">{video.title}</p>
                      <p className="text-xs text-gray-500">{formatDuration(video.duration)}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="text-gray-600">No videos loaded.</p>
            )}
          </div>
        )}
        {selectedItem === 'Reports' && (
          selectedPdf ? (
            <div className="flex flex-col items-center h-full">
              <div className="flex gap-4 mb-4">
                <button
                  onClick={handleZoomIn}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Zoom In
                </button>
                <button
                  onClick={handleZoomOut}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Zoom Out
                </button>
                <button
                  onClick={() => setSelectedPdf(null)}
                  className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                >
                  Back to Reports
                </button>
              </div>
              <iframe
                src={selectedPdf.src}
                title={selectedPdf.title}
                className="w-full h-[calc(100%-4rem)] rounded-lg"
                style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {pdfFiles.map((pdf) => (
                <div
                  key={pdf.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 cursor-pointer"
                  onClick={() => handlePdfClick(pdf)}
                >
                  <div>
                    <p className="text-base font-medium">{pdf.title}</p>
                    <p className="text-sm text-gray-600">{pdf.description}</p>
                  </div>
                  <a
                    href={pdf.src}
                    download
                    className="group flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ArrowDownTrayIcon className="w-6 h-6" />
                    <span className="text-sm hidden group-hover:block">Download</span>
                  </a>
                </div>
              ))}
            </div>
          )
        )}
        {selectedItem === 'Articles' && (
          selectedArticle ? (
            <div className="flex flex-col h-full">
              <button
                onClick={() => setSelectedArticle(null)}
                className="mb-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 self-start"
              >
                Back to Articles
              </button>
              <div className="prose">
                <Image
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  width={300}
                  height={200}
                  className="float-left mr-6 mb-4 rounded-lg"
                  style={{ width: '300px', height: '200px' }}
                />
                <h3 className="text-xl font-bold mb-2">{selectedArticle.title}</h3>
                <p className="text-gray-700">{selectedArticle.content}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleArticleClick(article)}
                >
                  <div>
                    <p className="text-base font-medium">{article.title}</p>
                    <p className="text-sm text-gray-600">{article.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
        {selectedItem === 'Gallery' && (
          <div className="flex flex-col items-center">
            <div className="mb-5 flex justify-center">
              <div className="w-[600px] text-center">
                <Image
                  src={featuredImage.src}
                  alt={featuredImage.alt}
                  width={600}
                  height={400}
                  className="object-cover rounded-lg mx-auto block"
                />
                <div className="mt-3">
                  <p className="text-lg font-bold">{featuredImage.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{featuredImage.description}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className={`w-[100px] bg-white rounded-md shadow-sm text-center cursor-pointer transition-all duration-200 hover:bg-[#9f004d] ${
                    image.id === selectedVideo?.id ? 'border-2 border-blue-500' : ''
                  }`}
                  onClick={() => handleThumbnailClick(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={100}
                    height={75}
                    className="object-cover rounded-t-md"
                  />
                  <p className="text-xs my-1 truncate">{image.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Canvas;