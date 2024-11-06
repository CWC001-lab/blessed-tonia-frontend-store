import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
                src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1000"
                alt="Blessed Tonia Agro Store - Agricultural Supplies"
                width={500}
                height={500}
                className="rounded-lg shadow-lg object-cover"
                unoptimized={true}
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4 text-green-800">About Blessed Tonia Agro Store</h2>
            <p className="text-gray-700 mb-6">
              Blessed Tonia Agro Store is your comprehensive agricultural partner, specializing in both crop farming and livestock management. We provide high-quality farming supplies, including seeds, fertilizers, and agricultural equipment, alongside a wide range of livestock and animal feed products.
            </p>
            <p className="text-gray-700 mb-6">
              With years of experience in the agricultural sector, we offer expert guidance to both small-scale and commercial farmers. Our commitment is to support sustainable farming practices and livestock management across the region.
            </p>
            <a href="/about" className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
