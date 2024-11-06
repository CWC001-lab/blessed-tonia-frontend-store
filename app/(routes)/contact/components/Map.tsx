import React from 'react';

const Map = () => {
  return (
    <div className="h-64 md:h-80 lg:h-96">
      <iframe
        src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sng!4v1730927671772!5m2!1sen!2sng!6m8!1m7!1s_1G7Fg3U8ofDMEvI8Tr5pA!2m2!1d7.384391054596751!2d3.884096509326629!3f24.602783855233273!4f18.4792910977811!5f0.4000000000000002"
        width="100%"
        height="100%"
        style={{border:0}}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
