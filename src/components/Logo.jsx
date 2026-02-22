import React from 'react';

const Logo = ({ className = "", light = false }) => {
  const primaryTeal = "#0f766e"; // primary
  const darkSlate = "#334155"; // neutral-700
  const accentTeal = "#14b8a6"; // accent

  const tealColor = light ? "white" : primaryTeal;
  const darkColor = light ? "white" : darkSlate;
  const sphereColor = light ? "white" : accentTeal;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon Section */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg 
          width="42" 
          height="42" 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          {/* Anatomical Pose - Head */}
          <circle cx="25" cy="25" r="10" fill={tealColor} />
          
          {/* Simplified Dynamic Body Path (Bent posture) */}
          <path 
            d="M25 25C25 25 35 25 45 35C55 45 50 65 50 65L40 90H30L35 70L25 50L15 45" 
            stroke={tealColor} 
            strokeWidth="12" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          
          {/* Spine Curve - Multi-dot vertebrae */}
          <path 
            d="M28 32C35 35 45 42 45 55C45 68 40 75 38 85" 
            stroke="white" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeDasharray="1 6"
            className="opacity-80"
          />
          
          {/* Highlighted Joints (Medical Focus) */}
          <circle cx="45" cy="45" r="3" fill="white" className="animate-pulse" /> {/* Shoulder/Mid-back shift */}
          <circle cx="50" cy="65" r="4" fill="white" /> {/* Hip area focus */}
          <circle cx="40" cy="90" r="3" fill="white" /> {/* Knee/Ankle focus */}
          
          {/* Leg Support Path */}
          <path 
            d="M50 65C65 65 75 75 75 90" 
            stroke={tealColor} 
            strokeWidth="10" 
            strokeLinecap="round" 
            className="opacity-60"
          />
        </svg>
      </div>

      {/* Text Section */}
      <div className="flex flex-col leading-none">
        <span className="text-3xl font-extrabold tracking-tighter" style={{ color: darkColor }}>
          ZK
        </span>
        <div className="flex text-[9px] font-black tracking-[0.25em] uppercase mt-1">
          <span style={{ color: darkColor }}>REHAB</span>
          <span className="ml-1" style={{ color: sphereColor }}>SPHERE</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
