'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/videos');
        const data = await response.json();
        setVideos(data);
        setSelectedVideo(data[0]);
      } catch (error) {
        console.error('Failed to load videos:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVideos();
  }, []);

  if (isLoading) return <div className="p-5">Loading videos...</div>;

  return (
    <div className="w-full p-5">
      {selectedVideo && (
        <div className="text-center">
          <iframe
            width="600"
            height="250"
            src={`https://www.youtube.com/embed/${selectedVideo.id}`}
            title={selectedVideo.title}
            frameBorder="0"
            allowFullScreen
          />
          <h3 className="text-lg font-bold mt-2">{selectedVideo.title}</h3>
        </div>
      )}
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="cursor-pointer"
            onClick={() => setSelectedVideo(video)}
          >
            <Image src={video.thumbnail} alt={video.title} width={100} height={75} />
            <p className="text-xs text-gray-700">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;