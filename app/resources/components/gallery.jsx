'use client';
import { useState } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const images = [
    { id: 1, src: '/assets/images/banner9.png', title: 'Image 1' },
    { id: 2, src: '/assets/images/hero.png', title: 'Image 2' },
  ];

  const [featuredImage, setFeaturedImage] = useState(images[0]);

  return (
    <div className="w-full p-5">
      <Image src={featuredImage.src} alt={featuredImage.title} width={600} height={400} />
      <div className="flex gap-4 mt-4">
        {images.map((image) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.title}
            width={100}
            height={75}
            className="cursor-pointer"
            onClick={() => setFeaturedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
