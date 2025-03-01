'use client';
import Link from 'next/link';

const HeroVideo = () => {
    return (
        <section 
            className="w-full h-auto overflow-hidden bg-[#ffffff]" 
            style={{marginTop: '50px'}}
        >
            {/* Full-width Hero Video */}
            <div className="relative w-full">
                <video
                    src="/assets/videos/binary.mov" // Path to your .mov video file
                    alt="Hero Video Background"
                    autoPlay
                    loop
                    muted
                    className="w-full max-h-[550px] object-cover"
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

export default HeroVideo;
