import React from 'react';
import Image from 'next/image';

import agroalied from "../assets/agroalied.jpg";
import bast from "../assets/bast.jpg";
import chemstar from "../assets/chemstar.jpg";
import dupoint from "../assets/dupoint.jpg";
import greenfield from "../assets/greenfield.jpg";
import indorama from "../assets/indorama.jpg";
import jubaili from "../assets/jubaili.jpg";
import jubaililogo from "../assets/jubaililogo.jpg";
import notore from "../assets/notore.jpg";
import npk from "../assets/npk.jpg";
import saro from "../assets/saro.jpg";
import syngenta from "../assets/syngenta.jpg";
import yara from "../assets/yara.jpg";

const brands = [

  { name: 'Agro Alied', logo: agroalied },
  { name: 'bast', logo: bast },
  { name: 'chemstar', logo: chemstar},
  { name: 'dupoint', logo: dupoint },
  { name: 'greenfield', logo: greenfield },


  { name: 'indorama', logo: indorama },
  { name: 'jubaili', logo: jubaili},
  { name: 'jubaili 2', logo: jubaililogo },
  { name: 'notore', logo: notore},
  { name: 'npk', logo: npk },

  { name: 'saro', logo: saro },
  { name: 'syngenta', logo: syngenta },
  { name: 'yara', logo: yara },

];

const FeaturedBrands = () => {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-white mb-8">Featured Brands</h2>
      <div className="overflow-hidden">
        <div className="flex animate-slide-left">
          {brands.concat(brands).map((brand, index) => (
            <div key={index} className="w-40 h-40 mx-4 flex-shrink-0">
              <div className="relative w-full h-full group">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  layout="fill"
                  objectFit="contain"
                  className="transition-opacity duration-300 group-hover:opacity-100 opacity-50"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex animate-slide-right mt-8">
          {brands.concat(brands).reverse().map((brand, index) => (
            <div key={index} className="w-40 h-40 mx-4 flex-shrink-0">
              <div className="relative w-full h-full group">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  layout="fill"
                  objectFit="contain"
                  className="transition-opacity duration-300 group-hover:opacity-100 opacity-50"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBrands;
