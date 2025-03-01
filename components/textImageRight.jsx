'use client';
import Link from 'next/link';
import Image from 'next/image';

const TextImageRight = () => {
    return (
        <section className="flex justify-center py-2 bg-white-100">
            <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row-reverse p-6 m-[2%]">
                
                {/* Right: Image Section */}
                <div className="w-full md:w-2/5 relative">
                    <Image 
                        src="/assets/images/hero.png" 
                        alt="Image Description" 
                        width={800}  
                        height={600}  
                        objectFit="cover" 
                        quality={100} 
                        //className="rounded-lg shadow-md"
                    />
                </div>

                {/* Left: Text Section */}
                <div className="w-full md:w-3/5 flex flex-col justify-center px-6 md:px-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Your Heading Goes Here
                    </h1>
                    <p className="text-lg text-gray-700 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis magna nec tortor euismod, et varius ipsum convallis. Ut fringilla neque libero, a varius nisi interdum vel. 
                        Phasellus ullamcorper sollicitudin risus, sit amet lobortis dui facilisis nec. Morbi id dui nec metus convallis elementum.
                    </p>

                    {/* Call-to-Action Button */}
                    <div className="mt-6">
                        <Link href="/your-link">
                            <button className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-600 transition duration-300">
                                Hello
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TextImageRight;
