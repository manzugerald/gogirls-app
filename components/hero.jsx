"use client";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const imageHeight = 100; // Adjust this value to change height dynamically

  return (
    <section
      className="w-full h-auto overflow-hidden bg-[#ffffff]"
      style={{ marginTop: "25px" }}
    >
      {/* Full-width Hero Image */}
      <div className="relative w-full" style={{ paddingTop: `${(imageHeight / 800) * 100}%` }}>
        <Image
          src="/assets/images/banner9.png"
          alt="Hero Background"
          layout="fill" // Fills the container
          objectFit="cover"
          quality={100}
          className="rounded-lg"
        />

        {/* Floating Button */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center">
          <Link href="/get-started">
            <button className="bg-pink-600 text-1xl font-bold text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#9f004d] hover:text-black transition duration-300">
              Be Part of Our Story
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;