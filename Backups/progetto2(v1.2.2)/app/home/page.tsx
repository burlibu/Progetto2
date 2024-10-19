'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginModal from '../components/LoginModal';

export default function AuthenticatedHome() {
  const [username, setUsername] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setShowLoginModal(true);
    } else {
      const storedUsername = localStorage.getItem('userName');
      if (storedUsername) {
        setUsername(storedUsername);
      } else {
        // Se il nome utente non è nel localStorage, potresti voler fare una chiamata API per ottenerlo
        // Per ora, usiamo un nome fittizio
        setUsername('Utente');
      }
    }
  }, []);

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
    router.push('/'); // Reindirizza alla home se l'utente chiude il modal
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Benvenuto, {username}!</h1>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
            <p className="mb-4">Questa è la tua area personale. Qui puoi gestire i tuoi treni e vedere le tue statistiche.</p>
            {/* Aggiungi qui altri componenti o informazioni per l'utente autenticato */}
          </div>
        </div>
      </main>
      <Footer />
      {showLoginModal && <LoginModal onClose={handleCloseLoginModal} />}
    </div>
  );
}
