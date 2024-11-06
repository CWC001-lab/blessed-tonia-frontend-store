"use client"
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const carouselItems = [
  {
    image: "https://img.freepik.com/free-photo/countryside-woman-holding-plant-leaves_23-2148761766.jpg?t=st=1730923415~exp=1730927015~hmac=f4f385331d34eecbee6e1be3999457fe18d8ae2528629b6583d186ff98fc2d89&w=826",
    title: "Welcome to Blessed Tonia Agro Store",
    description: "Your one-stop agricultural hub in Ogunpa Market, Ibadan. We provide quality farming supplies, livestock solutions, and expert guidance for both small-scale and commercial farmers."
  },
  {
    image: "https://img.freepik.com/premium-photo/gardening-tools-isolated-white_392895-404749.jpg?uid=R119524087&ga=GA1.1.1998495031.1730667648&semt=ais_hybrid",
    title: "Premium Farming Supplies",
    description: "Access top-grade seeds, fertilizers, herbicides, pesticides, and farming equipment. We stock trusted brands to ensure your farming success."
  },
  {
    image: "https://img.freepik.com/free-photo/brown-chickens-farm_335224-1154.jpg?uid=R119524087&ga=GA1.1.1998495031.1730667648&semt=ais_hybrid",
    title: "Livestock & Poultry Solutions",
    description: "Find quality livestock feeds, day-old chicks, veterinary supplies, and comprehensive animal health products for optimal farm productivity."
  },
  {
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1950",
    title: "Agricultural Chemicals & Tools",
    description: "We offer a wide range of agricultural chemicals, modern farming tools, and expert advice on proper usage for maximum yield and farm safety."
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={carouselItems[currentIndex].image}
            alt={carouselItems[currentIndex].title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-center"
            >
              {carouselItems[currentIndex].title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-xl md:text-2xl text-center max-w-2xl"
            >
              {carouselItems[currentIndex].description}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
