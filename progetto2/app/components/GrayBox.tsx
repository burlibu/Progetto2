import React from 'react';

interface GrayBoxProps {
  children?: React.ReactNode;
  className?: string;
}

const GrayBox: React.FC<GrayBoxProps> = ({ children, className = '' }) => (
  <div className={`bg-gray-100 p-4 rounded-lg ${className}`}>
    {children}
  </div>
);

export default GrayBox;
