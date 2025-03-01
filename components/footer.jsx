'use client';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-white shadow-lg border-t border-pink-800">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo / About */}
                    <div>
                        <h2 className="text-xl font-bold text-black">GoGirls ICT Initiative</h2>
                        <p className="text-gray-600 mt-2">
                            Empowering communities through knowledge and opportunity.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-black mb-2">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-black hover:text-pink-400">About Us</Link></li>
                            <li><Link href="#" className="text-black hover:text-pink-400">Programs</Link></li>
                            <li><Link href="#" className="text-black hover:text-pink-400">Resources</Link></li>
                            <li><Link href="#" className="text-black hover:text-pink-400">Get Involved</Link></li>
                            <li><Link href="#" className="text-black hover:text-pink-400">Contact Us</Link></li>
                            <li><Link href="#" className="text-black hover:text-pink-400">Notice Board</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Socials */}
                    <div>
                        <h3 className="text-lg font-semibold text-black mb-2">Contact</h3>
                        <p className="text-gray-600">Email: contact@org.com</p>
                        <p className="text-gray-600">Phone: +211 920 000 000</p>

                        <div className="mt-4 flex gap-4">
                            <Link href="#" className="text-gray-600 hover:text-pink-400">Facebook</Link>
                            <Link href="#" className="text-gray-600 hover:text-pink-400">Twitter</Link>
                            <Link href="#" className="text-gray-600 hover:text-pink-400">LinkedIn</Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-200 pt-4">
                    © {new Date().getFullYear()} GoGirls ICT Initiative. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
