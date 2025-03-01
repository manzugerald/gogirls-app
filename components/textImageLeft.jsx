'use client';
import Image from 'next/image';

const TextImageLeft = () => {
    return (
        <section className="relative w-full mx-0 bg-white" style={{marginTop:'0px', paddingLeft:'2%', paddingRight:'2%'}}>
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-center text-pink-900 m-0">
                Message from the Director
            </h2>

            {/* Infographic Section */}
            <div className="flex justify-center items-center gap-12 text-center m-0">
                {/* Left: Image Section */}
                <div className="w-full md:w-2/5 relative">
                    <Image 
                        src="/assets/images/hero.png" 
                        alt="Message from the Director" 
                        width={800}  
                        height={600}  
                        objectFit="cover" 
                        quality={100} 
                    />
                </div>

                {/* Right: Text Section with Box Appearance */}
                <div className="w-full md:w-3/5 flex flex-col text-justify bg-lightgray p-6 rounded-lg shadow-lg">
                    <p className="text-lg text-gray-700 mt-0 ml-0">
                        dd Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis magna nec tortor euismod, et varius ipsum convallis. Ut fringilla neque libero, a varius nisi interdum vel. 
                        Phasellus ullamcorper sollicitudin risus, sit amet lobortis dui facilisis nec. Morbi id dui nec metus convallis elementum.<br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis magna nec tortor euismod, et varius ipsum convallis. Ut fringilla neque libero, a varius nisi interdum vel. 
                        Phasellus ullamcorper sollicitudin risus, sit amet lobortis dui facilisis nec. Morbi id dui nec metus convallis elementum.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TextImageLeft;
