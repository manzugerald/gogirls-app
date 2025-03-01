'use client';
import Link from 'next/link';
import Image from 'next/image';

const ImageTextCard = () => {
    const originalText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis magna nec tortor euismod, et varius ipsum convallis. Ut fringilla neque libero, a varius nisi interdum vel.";
    const words = originalText.split(' ');
    const truncatedText = words.slice(0, 15).join(' ') + (words.length > 15 ? '...' : '');

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full md:w-3/3 lg:w-1/4"> 
            {/* Image Section */}
            <div className="w-full h-40 relative">
                <Image 
                    src="/assets/images/hero.png" 
                    alt="Image Description" 
                    width={800}  
                    height={600}  
                    objectFit="cover" 
                    quality={100} 
                    className="w-full h-full object-cover rounded-t-2xl"
                />
            </div>
            {/* Text Section */}
            <div className="p-4">
                <h1 className="text-lg font-bold text-gray-900">
                    Your Heading Goes Here
                </h1>
                <p className="text-sm text-gray-700 mt-2">
                    {truncatedText}
                </p>

                {/* Call-to-Action Button */}
                <div className="mt-3">
                    <Link href="/your-link">
                        <button className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-pink-600 transition duration-300">
                            Your Button Text
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ImageTextCard;



