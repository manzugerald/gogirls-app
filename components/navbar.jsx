'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    // Cleanup timeout on component unmount
    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);

    const handleMouseEnter = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 200); // 200ms delay - adjust as needed
        setTimeoutId(id);
    };

    return (
        <nav className="bg-[#9f004d] text-white shadow-lg fixed top-0 left-0 w-full z-50">
            <div className="max-w-screen-xl mx-auto px-6 py-0 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <img 
                        src="/assets/images/goGirlsLogoV2.svg"
                        alt="GoGirls ICT Initiative Logo"
                        width={60}
                        height={120}
                        className="mr-2 py-2"
                    />
                    <span className="text-1xl md:text-1xl font-bold text-white">
                        GoGirls ICT Initiative
                    </span>
                </Link>

                {/* Menu */}
                <ul className="flex space-x-8">
                    <li className="nav-item">
                        <Link href="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/projects" className="nav-link">Projects</Link>
                    </li>

                    {/* Resources Dropdown */}
                    <li 
                        className="nav-item relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="nav-link flex items-center gap-1">
                            Resources
                            <ChevronDownIcon className="w-4 h-4" />
                        </button>

                        {isDropdownOpen && (
                            <ul 
                                className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md overflow-hidden"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <li className="hover:bg-gray-200">
                                    <Link href="/resources?type=Videos" className="block px-4 py-2">Videos & OCRs</Link>
                                </li>
                                <li className="hover:bg-gray-200">
                                    <Link href="/resources?type=Reports" className="block px-4 py-2">Reports</Link>
                                </li>
                                <li className="hover:bg-gray-200">
                                    <Link href="/resources?type=Articles" className="block px-4 py-2">Articles</Link>
                                </li>
                                <li className="hover:bg-gray-200">
                                    <Link href="/resources?type=Gallery" className="block px-4 py-2">Gallery</Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className="nav-item">
                        <Link href="/getinvolved" className="nav-link">Get Involved</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/noticeboard" className="nav-link">Notice Board</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;