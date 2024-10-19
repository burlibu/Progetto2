'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface HomeContentProps {
  onOpenLoginModal: () => void;
  onOpenRegisterModal: () => void;
}

export default function HomeContent({ onOpenLoginModal, onOpenRegisterModal }: HomeContentProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleButtonClick = () => {
    if (isAuthenticated) {
      onOpenLoginModal();
    } else {
      onOpenRegisterModal();
    }
  };

  return (
    <div className="min-h-screen relative">
      <Image
        src="/Treno_sfondo_ingrandito.png"
        alt="Sfondo treni"
        layout="fill"
        objectFit="cover"
        objectPosition="center 70%" 
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <main className="container mx-auto px-4 py-8 flex flex-col items-center justify-center" style={{height: 'calc(100vh - 64px)'}}>
          <h1 className="text-5xl font-bold mb-8 text-center text-white">Benvenuto nel sito di Ale</h1>
          
          <button 
            onClick={handleButtonClick}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            Vai!
          </button>
        </main>
      </div>
    </div>
  );
}
