'use client';
import { 
    UsersIcon, 
    AcademicCapIcon, 
    BuildingOffice2Icon 
} from '@heroicons/react/24/solid'; // Correct import for Heroicons v2

const Reach = () => {
    return (
        <section className="relative w-full bg-gray-100 shadow-2xl p-8">
            {/* Title */}
            <h2 className="text-2xl md:text-4xl font-bold text-center text-pink-900">
                Our Impact at a Glance
            </h2>

            {/* Infographic Section */}
            <div className="flex justify-center items-center gap-12 text-center p-6">
                
                {/* Communities */}
                <div className="flex flex-col items-center p-6 bg-pink-100 rounded-xl shadow-lg transition-all duration-300 hover:bg-pink-300 group">
                    <BuildingOffice2Icon className="w-20 h-20 text-pink-700 transform transition-transform duration-500 group-hover:translate-x-4" />
                    <h3 className="text-xl font-semibold mt-3">Communities</h3>
                    <p className="text-gray-600">100+ Students</p>
                </div>

                {/* Beneficiaries */}
                <div className="flex flex-col items-center p-6 bg-red-100 rounded-xl shadow-lg transition-all duration-300 hover:bg-red-300 group">
                    <UsersIcon className="w-20 h-20 text-red-700 transform transition-transform duration-500 group-hover:translate-x-4" />
                    <h3 className="text-xl font-semibold mt-3">Beneficiaries</h3>
                    <p className="text-gray-600">10,000+ People Empowered</p>
                </div>

                {/* Schools */}
                <div className="flex flex-col items-center p-6 bg-purple-100 rounded-xl shadow-lg transition-all duration-300 hover:bg-purple-300 group">
                    <AcademicCapIcon className="w-20 h-20 text-purple-700 transform transition-transform duration-500 group-hover:translate-x-4" />
                    <h3 className="text-xl font-semibold mt-3">Schools Reached</h3>
                    <p className="text-gray-600">500+ Schools</p>
                </div>
            </div>
        </section>
    );
};

export default Reach;
