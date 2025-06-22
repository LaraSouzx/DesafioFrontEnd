import React from 'react';

const IconeWidget = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none"  
      strokeLinecap="round" 
      strokeLinejoin="round" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Quadrado inferior esquerdo */}
      <rect x="4" y="14" width="6" height="6" rx="1" fill="#9F22F2" />
      {/* Quadrado inferior direito */}
      <rect x="14" y="14" width="6" height="6" rx="1" fill="#846CD9" />
      {/* Quadrado superior esquerdo */}
      <rect x="4" y="4" width="6" height="6" rx="1" fill="#644BBF" />
      {/* Sinal de mais */}
      <path d="M17 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 8H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
};

export default IconeWidget;