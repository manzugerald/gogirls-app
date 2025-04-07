'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const DonationImage = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const element = tiltRef.current;
    if (element) {
      VanillaTilt.init(element, {
        max: 15, 
        speed: 400, 
        glare: true, 
        'max-glare': 0.5, 
      });

      return () => {
        if (element.vanillaTilt) {
          element.vanillaTilt.destroy();
        }
      };
    }
  }, []);

  return (
    <div className="w-full relative overflow-hidden">
      {/* Bubble Animation Overlay - Now Fully Visible */}
      <div className="absolute inset-0 pointer-events-none z-20 mix-blend-screen">
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
        <div className="bubble bubble4"></div>
        <div className="bubble bubble5"></div>
      </div>

      {/* Image with 3D Tilt - Moved Lower in Z-Index */}
      <div ref={tiltRef} className="w-full relative z-10">
        <Image
          src="/assets/images/donation.png"
          alt="Donation Support Image"
          width={1200} // Increased width
          height={1400} // Increased height
          className="object-cover rounded-lg w-full h-auto"
        />
      </div>

      {/* Inline CSS for Bubble Animation */}
      <style jsx>{`
        .bubble {
          position: absolute;
          border-radius: 50%;
          animation: floatUp linear infinite;
          opacity: 1; /* Ensuring full opacity */
          mix-blend-mode: screen;
        }
        .bubble1 {
          width: 40px;
          height: 40px;
          left: 10%;
          bottom: -40px;
          animation-duration: 5s;
          background: rgba(255, 255, 0, 0.8); /* Brighter Yellow */
          box-shadow: 0 0 20px rgba(255, 255, 0, 1);
        }
        .bubble2 {
          width: 50px;
          height: 50px;
          left: 30%;
          bottom: -50px;
          animation-duration: 6s;
          background: rgba(255, 0, 0, 0.8); /* Brighter Red */
          box-shadow: 0 0 20px rgba(255, 0, 0, 1);
        }
        .bubble3 {
          width: 35px;
          height: 35px;
          left: 50%;
          bottom: -35px;
          animation-duration: 4s;
          background: rgba(0, 0, 255, 0.8); /* Stronger Blue */
          box-shadow: 0 0 20px rgba(0, 0, 255, 1);
        }
        .bubble4 {
          width: 45px;
          height: 45px;
          left: 70%;
          bottom: -45px;
          animation-duration: 5.5s;
          background: rgba(0, 255, 0, 0.8); /* Stronger Green */
          box-shadow: 0 0 20px rgba(0, 255, 0, 1);
        }
        .bubble5 {
          width: 30px;
          height: 30px;
          left: 90%;
          bottom: -30px;
          animation-duration: 4.5s;
          background: rgba(159, 0, 77, 0.8); /* Stronger #9f004d */
          box-shadow: 0 0 20px rgba(159, 0, 77, 1);
        }
        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-800px) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default DonationImage;