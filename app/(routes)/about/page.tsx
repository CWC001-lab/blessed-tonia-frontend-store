/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <div className="relative h-96 bg-cover bg-center" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1950')"
        }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">About Blessed Tonia</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="mb-4">
                Blessed Tonia Agro Store emerged from a deep commitment to supporting Nigerian farmers and agricultural development. Founded in 2020, we've rapidly grown to become a trusted destination for quality agricultural supplies, livestock feed, farming equipment, and expert guidance.
              </p>
              <p className="mb-4">
                Our comprehensive inventory includes essential farming chemicals, fertilizers, animal feeds, veterinary supplies, and agricultural machinery. We take pride in sourcing high-quality products from reliable manufacturers to ensure optimal farming results and healthy livestock.
              </p>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                  src="https://img.freepik.com/free-photo/man-taking-care-his-farm-close-up_23-2148580028.jpg?uid=R119524087&ga=GA1.1.1998495031.1730667648&semt=ais_hybrid"
                  alt="Blessed Tonia Agro Store Agricultural Supplies"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
              />
            </div>
          </div>

          {/* Mission Statement */}
          <div className="my-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="max-w-2xl mx-auto">
              At Blessed Tonia Agro Store, we're committed to empowering farmers and agricultural businesses with top-quality products and expert solutions. We believe in sustainable farming practices and providing the tools and supplies necessary for optimal crop yields and healthy livestock management.
            </p>
          </div>

          {/* Product Categories */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6 text-center">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <CategoryCard
                  title="Agricultural Supplies"
                  description="Access our comprehensive range of farming chemicals, fertilizers, and agricultural tools for optimal crop production."
                  imageUrl="https://img.freepik.com/free-photo/african-gardener-guy-gardener-with-watering-can-flower-beds_1157-47076.jpg?uid=R119524087&ga=GA1.1.1998495031.1730667648&semt=ais_hybrid"
              />
              <CategoryCard
                  title="Animal Feed & Health"
                  description="Find quality livestock feed, veterinary supplies, and animal health products to keep your farm animals healthy."
                  imageUrl="https://img.freepik.com/free-photo/farm-with-goats_23-2148673034.jpg?uid=R119524087&ga=GA1.1.1998495031.1730667648&semt=ais_hybrid"
              />
              <CategoryCard
                  title="Farm Equipment"
                  description="Explore our selection of farming equipment and machinery designed to enhance agricultural productivity."
                  imageUrl="https://img.freepik.com/premium-photo/hardware-carpentry-tools-files-rasps-different-shapes_461160-2223.jpg?uid=R119524087&ga=GA1.1.1998495031.1730667648&semt=ais_hybrid"
              />
            </div>
          </div>

          {/* Values */}
          <div className="my-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  title: 'Quality Products', 
                  description: 'We source only the highest quality agricultural supplies and equipment from trusted manufacturers.', 
                  imageUrl: 'https://img.freepik.com/premium-photo/organic-gardening-farmers-hands-with-red-green-yellow-peppers_74580-2007.jpg?uid=R119524087&ga=GA1.1.1998495031.1730667648&semt=ais_hybrid'
                },
                {
                  title: 'Sustainable Farming', 
                  description: 'We promote environmentally conscious farming practices and eco-friendly agricultural solutions.', 
                  imageUrl: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1950'
                },
                { 
                  title: 'Expert Guidance', 
                  description: 'Our knowledgeable team provides expert advice on agricultural products and farming practices.', 
                  imageUrl: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=1950'
                },
                { 
                  title: 'Customer Support',
                  description: "We're dedicated to supporting our farming community with reliable service and technical assistance.",
                  imageUrl: 'https://img.freepik.com/free-photo/person-office-work-day_23-2150690164.jpg?uid=R119524087&ga=GA1.1.1998495031.1730667648&semt=ais_hybrid'
                }
              ].map((value) => (
                  <div key={value.title} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-48">
                      <Image
                          src={value.imageUrl}
                          alt={value.title}
                          fill
                          style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p>{value.description}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="mb-6">Discover the finest in agricultural products, from organic seeds to premium fertilizers, at Blessed Tonia Agro Store.</p>
            <a href="/products" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
              Shop Now
            </a>
          </div>
        </div>
      </div>
  );
};

interface CategoryCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, imageUrl }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
);

export default AboutPage;