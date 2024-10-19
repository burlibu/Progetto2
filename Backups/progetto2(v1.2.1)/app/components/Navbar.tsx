'use client';

import Link from 'next/link'
import { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

export default function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold pl-4">TreniAle</Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link href="/treni" className="text-white hover:text-gray-300">Treni</Link></li>
          <li><Link href="/progetti" className="text-white hover:text-gray-300">Progetti</Link></li>
          <li><button onClick={() => setShowLoginModal(true)} className="text-white hover:text-gray-300 bg-transparent">Accedi</button></li>
          <li><button onClick={() => setShowRegisterModal(true)} className="text-white hover:text-gray-300 bg-transparent">Registrati</button></li>
        </ul>
      </div>
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
      {showRegisterModal && <RegisterModal onClose={() => setShowRegisterModal(false)} />}
    </nav>
  );
}
