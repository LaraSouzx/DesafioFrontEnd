import React from 'react';

const IconeWidget = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Quadrado inferior esquerdo */}
      <rect x="4" y="14" width="6" height="6" rx="1" fill="currentColor" />
      {/* Quadrado inferior direito */}
      <rect x="14" y="14" width="6" height="6" rx="1" fill="currentColor" />
      {/* Quadrado superior esquerdo */}
      <rect x="4" y="4" width="6" height="6" rx="1" fill="currentColor" />
      {/* Sinal de mais */}
      <path d="M17 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 8H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

export default IconeWidget;