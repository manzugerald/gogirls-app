'use client';
import { LightBulbIcon, SparklesIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

const VisionMissionFocus = () => {
    return (
        <section className="w-full bg-gray-100 py-12 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Vision Card */}
                <div className="group bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl hover:bg-gray-50 p-6 text-center">
                    <LightBulbIcon className="w-12 h-12 mx-auto text-pink-600 mb-4 transition-transform duration-300 ease-in-out group-hover:rotate-180 group-hover:bg-pink-600 group-hover:text-yellow-400" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Vision</h3>
                    <p className="text-gray-600">
                        Our vision is to be a globally recognized leader in innovation, empowering people and communities to achieve their full potential.
                    </p>
                </div>

                {/* Mission Card */}
                <div className="group bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl hover:bg-gray-50 p-6 text-center">
                    <SparklesIcon className="w-12 h-12 mx-auto text-[#650001] mb-4 transition-transform duration-300 ease-in-out group-hover:rotate-180 group-hover:bg-pink-600 group-hover:text-white" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Mission</h3>
                    <p className="text-gray-600">
                        Our mission is to provide cutting-edge solutions that drive growth, sustainability, and positive social impact across industries.
                    </p>
                </div>

                {/* Focus Card */}
                <div className="group bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl hover:bg-gray-50 p-6 text-center">
                    <ClipboardDocumentListIcon className="w-12 h-12 mx-auto text-pink-800 mb-4 transition-transform duration-300 ease-in-out group-hover:rotate-180 group-hover:bg-black group-hover:text-white" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Focus</h3>
                    <p className="text-gray-600">
                        Our focus is on delivering high-quality, innovative products and services that meet the evolving needs of our customers.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default VisionMissionFocus;
