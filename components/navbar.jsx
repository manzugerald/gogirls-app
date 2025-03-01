'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Dropdown from './Dropdown';

const Navbar = () => {
    return (
        <nav className="bg-[#9f004d] text-white shadow-lg fixed top-0 left-0 w-full z-50">
            <div className="max-w-screen-xl mx-auto px-6 py-0 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <img 
                        src="/assets/images/goGirlsLogoV2.svg" // Replace with the actual path to your logo image
                        alt="GoGirls ICT Initiative Logo"
                        width={60} // Adjust as per your logo's dimensions
                        height={120} // Adjust as per your logo's dimensions
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
                   
                    
                    <li className="nav-item">
                        <Link href="/resources" className="nav-link">Resources</Link>
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
