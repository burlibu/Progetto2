'use client';

import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

export default function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    setIsAuthenticated(false);
    router.push('/');
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold pl-4">Sitoale</Link>
        <ul className="flex space-x-4">
          
          <li><Link href="/developer" className="text-white hover:text-gray-300">Developer</Link></li>
          <li><Link href="/treni" className="text-white hover:text-gray-300">Treni</Link></li>
          <li><Link href="/progetti" className="text-white hover:text-gray-300">Progetti</Link></li>
          {isAuthenticated ? (
            <>
              <li><Link href="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link></li>
              <li><button onClick={handleLogout} className="text-white font-family: 'Roboto', sans-serif; hover:text-gray-300 bg-transparent">Logout</button></li>
            </>
          ) : (
            <>
              <li><button onClick={() => setShowLoginModal(true)} className="text-white hover:text-gray-300 bg-transparent">Accedi</button></li>
              <li><button onClick={() => setShowRegisterModal(true)} className="text-white hover:text-gray-300 bg-transparent">Registrati</button></li>
            </>
          )}
        </ul>
      </div>
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
      {showRegisterModal && <RegisterModal onClose={() => setShowRegisterModal(false)} />}
    </nav>
  );
}
