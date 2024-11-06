import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { GiFarmTractor, GiChicken, GiWheat, GiPlantSeed } from 'react-icons/gi';

const SocialIcons = () => {
  return (
    <div className="w-full md:w-[70%] mx-auto bg-green-50 rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Join the Blessed Tonia Agro Store Community</h2>
      <p className="text-center mb-6">Stay connected for updates on farming supplies, livestock, and agricultural tips!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SocialLink 
          icon={<FaWhatsapp size={32} />} 
          color="green" 
          href="https://chat.whatsapp.com/your-group-invite-link"
          text="Join our WhatsApp group for daily market prices and farming tips!"
        />
        <SocialLink 
          icon={<GiFarmTractor size={32} />} 
          color="brown" 
          href="https://facebook.com"
          text="Follow our Facebook page for farming equipment and seasonal updates"
        />
        <SocialLink 
          icon={<GiChicken size={32} />} 
          color="orange" 
          href="https://twitter.com"
          text="Get updates on livestock availability and animal feed supplies"
        />
        <SocialLink 
          icon={<GiWheat size={32} />} 
          color="yellow" 
          href="https://instagram.com"
          text="Explore our catalog of seeds, fertilizers, and farming success stories"
        />
      </div>
      <p className="text-center mt-6 text-sm text-gray-600">Partner with us for all your farming and livestock needs at Blessed Tonia Agro Store!</p>
    </div>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  color: string;
  href: string;
  text: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, color, href, text }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-${color}-600 hover:text-${color}-800`}
  >
    {icon}
    <p className="mt-2 text-sm text-center">{text}</p>
  </a>
);

export default SocialIcons;
