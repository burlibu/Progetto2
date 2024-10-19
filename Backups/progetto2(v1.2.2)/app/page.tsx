'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeContent from './components/HomeContent';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HomeContent 
          onOpenLoginModal={() => setShowLoginModal(true)}
          onOpenRegisterModal={() => setShowRegisterModal(true)}
        />
      </main>
      <Footer />
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
      {showRegisterModal && <RegisterModal onClose={() => setShowRegisterModal(false)} />}
    </div>
  );
}
