'use client';
import { useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
  // Create an array of 25 images using hero.png
  const images = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    src: '/assets/images/hero.png',
    title: `Hero Image ${i + 1}`,
  }));

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {images.map((image) => (
          <div
            key={image.id}
            className="bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer"
            onClick={() => openModal(image.src)}
          >
            <Image
              src={image.src}
              alt={image.title}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
            <div className="p-1">
              <h3 className="text-lg font-semibold text-gray-800">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-5 rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevent click on modal content from closing it
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={800}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
