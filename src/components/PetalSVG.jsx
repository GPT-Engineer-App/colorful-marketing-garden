import React from 'react';

const PetalSVG = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 257.73 380.16" className="w-full h-full">
    <defs>
      <filter id="shadow">
        <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3" />
      </filter>
    </defs>
    <path
      d="M239.47,188.17L128.25,1.87,21.45,184.61c-24.82,38.7-27.49,89.34-2.28,131.56,35.83,60.02,114.19,79.99,175.04,44.66,60.83-35.33,81.09-112.6,45.26-172.66Z"
      fill={color}
      filter="url(#shadow)"
    />
  </svg>
);

export default PetalSVG;
