'use client';
import { useState } from 'react';
import { EnvelopeOpenIcon, PhoneIcon } from '@heroicons/react/24/outline';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission (e.g., API call)
    };

    return (
        <section className="w-full bg-gray-100 py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Contact Us</h2>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Left: Icon Section */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <EnvelopeOpenIcon className="w-20 h-20 text-pink-600" />
                    </div>

                    {/* Right: Form Section */}
                    <div className="w-full md:w-2/3">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name & Email Fields */}
                            <div className="flex flex-col md:flex-row gap-4">
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    placeholder="Your Name" 
                                    className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    placeholder="Your Email" 
                                    className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Message Field */}
                            <textarea 
                                name="message" 
                                value={formData.message} 
                                onChange={handleChange} 
                                placeholder="Your Message" 
                                rows="4" 
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <button 
                                    type="submit" 
                                    className="bg-pink-600 text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
