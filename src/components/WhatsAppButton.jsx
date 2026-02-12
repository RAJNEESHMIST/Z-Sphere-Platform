import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919430594683"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="white"
        className="w-8 h-8"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.68-2.031-.967-.272-.297-.471-.446-.718-.173-.248-.297-.968.049-1.463.396.496.843.595 1.486 1.336 2.306.77.892 2.128 1.956 3.182 2.379.695.28 1.238.406 1.661.54.912.288 1.685.247 2.29.158.67-.099 1.464-.595 1.662-1.164.198-.57.198-1.065.139-1.165z"/>
      </svg>
      {/* Pulse effect */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-20 animate-ping"></span>
    </a>
  );
};

export default WhatsAppButton;
