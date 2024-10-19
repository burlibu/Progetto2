'use client';

import Link from 'next/link'
import { useState } from 'react';
import LoginModal from './LoginModal.tsx';
import RegisterModal from './RegisterModal.tsx';

export default function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold pl-4">TreniAle</Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link href="/chi-siamo" className="text-white hover:text-gray-300">Chi Siamo</Link></li>
          <li><Link href="/treni" className="text-white hover:text-gray-300">Treni</Link></li>
          <li><Link href="/about" className="text-white hover:text-gray-300">About</Link></li>
          <li><Link href="/contact" className="text-white hover:text-gray-300">Contatti</Link></li>
          <li><button onClick={() => setShowLoginModal(true)} className="text-white hover:text-gray-300">Accedi</button></li>
          <li><button onClick={() => setShowRegisterModal(true)} className="text-white hover:text-gray-300">Registrati</button></li>
        </ul>
      </div>
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
      {showRegisterModal && <RegisterModal onClose={() => setShowRegisterModal(false)} />}
    </nav>
  )
}
