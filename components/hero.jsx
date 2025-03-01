'use client';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    return (
        <section 
        className="w-full h-auto overflow-hidden bg-[#ffffff]" 
            style={{marginTop: '25px'}} 
        >
            {/* Full-width Hero Image */}
            <div className="relative w-full">
                <Image 
                    src="/assets/images/banner9.png" 
                    alt="Hero Background" 
                    layout="responsive" // Makes the image span the full width while maintaining aspect ratio
                    width={1000} 
                    height={500} // Adjust based on image aspect ratio
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
