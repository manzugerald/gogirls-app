'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';  // Use usePathname from next/navigation
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const pathname = usePathname(); // Get the current pathname

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

    const isActive = (path) => pathname === path;

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
                    <span className="text-white text-lg md:text-lg font-bold hover:text-black">
                        GoGirls ICT Initiative
                    </span>
                </Link>

                {/* Menu */}
                <ul className="flex space-x-8 items-center"> {/* Added items-center */}
                    <li className="nav-item">
                        <Link 
                            href="/" 
                            className={`nav-link text-lg ${isActive('/') ? 'active' : ''} hover:text-white`}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            href="/projects" 
                            className={`nav-link text-lg ${isActive('/projects') ? 'active' : ''} hover:text-white`}>
                            Projects
                        </Link>
                    </li>

                    {/* Resources Dropdown */}
                    <li 
                        className="nav-item relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button 
                            className={`nav-link flex items-center gap-1 text-lg ${isActive('/resources') ? 'active' : ''} hover:text-white`}>
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
                                    <Link href="/resources?type=Videos" className="block px-4 py-2">Videos & OERs</Link>
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
                        <Link 
                            href="/getinvolved" 
                            className={`nav-link text-lg ${isActive('/getinvolved') ? 'active' : ''} hover:text-white`}>
                            Get Involved
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            href="/noticeboard" 
                            className={`nav-link text-lg ${isActive('/noticeboard') ? 'active' : ''} hover:text-white`}>
                            Notice Board
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            href="/donate" 
                            className={`nav-link donate text-lg bg-black rounded-md flex items-center gap-2 px-4 py-2 ${isActive('/donate') ? 'active' : ''} hover:text-white`}>
                            Donate
                            <FontAwesomeIcon icon={faHandHoldingDollar} className="w-5 h-5" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
