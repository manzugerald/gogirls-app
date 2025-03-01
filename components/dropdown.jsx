'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Dropdown = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
        <li className="relative inline-block group">
          <div 
            onMouseEnter={() => setIsOpen(true)} // Open dropdown when mouse enters
            onMouseLeave={() => setIsOpen(false)} // Close dropdown when mouse leaves
            className="relative"
          >
            <a 
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                setIsOpen(!isOpen); // Toggle dropdown on click
              }}
              className="flex items-center px-4 py-2 hover:bg-gray-800 transition"
            >
              {title}
              <ChevronDownIcon
                className={`w-5 h-5 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              />
            </a>
            {isOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-black border border-gray-700 rounded-md shadow-lg">
            <ul className="py-2">
              {items.map((item, index) => (
                <li key={index} className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-white">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
};
export default Dropdown;