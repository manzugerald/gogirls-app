'use client';
import Link from 'next/link';

const TextButtonComponent = () => {
    return (
        <div className="flex items-center justify-around p-4 bg-[#d2006a] shadow-md w-full">
            <p className="text-white text-2xl md:text-4xl font-bold">
                Connect with GoGirls ICT Initiative
            </p>
            <Link href="/your-link">
                <button className="bg-white text-2xl md:text-2xl font-bold hover:text-pink-900 text-black font-bold py-2 px-4 rounded">
                    Contact Us
                </button>
            </Link>
        </div>
    );
};

export default TextButtonComponent;