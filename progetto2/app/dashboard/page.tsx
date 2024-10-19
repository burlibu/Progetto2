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
      <main className="flex-grow w-full bg-gray-100 p-8">
        <div className="flex flex-col w-fullmax w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Benvenuto, {username}!</h1>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
            <p className="mb-4">Questa è la tua area personale. Qui puoi gestire i tuoi treni e vedere le tue statistiche.</p>
            {/* Aggiungi qui altri componenti o informazioni per l'utente autenticato */}
          </div>
            <div className="flex flex-row gap-4 mt-4"> {/* Box padre. I box figli sono ordinati in ordine orizzontale*/}
              
              <div className="bg-white shadow-md rounded-lg p-6 mt-4 w-1/3 h-1/2">
                <h2 className="text-2xl font-semibold mb-4">Statistiche</h2>
                <p className="mb-4">Qui puoi vedere le tue statistiche. Puoi vedere quanti treni hai ordinato e quanti hai completato.</p>
                {/* Aggiungi qui altri componenti o informazioni per l'utente autenticato */}
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 mt-4 w-500 h-500">
                <h2 className="text-2xl font-semibold mb-4">Treni ordinati</h2>
                <p className="mb-4">Qui puoi vedere i tuoi treni ordinati. Puoi vedere quanti treni hai ordinato e quanti hai completato.</p>
                {/* Aggiungi qui altri componenti o informazioni per l'utente autenticato */}
              </div>
                <div className="bg-f3f1ec shadow-md rounded-lg p-6 mt-4 w-500 h-500 border-2 border-800000">
                <h2 className="text-2xl text-800000 font-semibold mb-4">Statistiche 3</h2>
                <p className="mb-4">Qui puoi vedere i tuoi treni ordinati. Puoi vedere quanti treni hai ordinato e quanti hai completato.</p>
                {/* Aggiungi qui altri componenti o informazioni per l'utente autenticato */}
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 mt-4 w-500 h-500">
                <h2 className="text-2xl font-semibold mb-4">Statistiche 4</h2>
                <p className="mb-4">Qui puoi vedere i tuoi treni ordinati. Puoi vedere quanti treni hai ordinato e quanti hai completato.</p>
              {/* Aggiungi qui altri componenti o informazioni per l'utente autenticato */}
            </div>
            


            
          </div>
        </div>
        <div className="flex flex-row gap-4 mt-4">
          <div className="bg-white shadow-md rounded-lg p-6 mt-4 width:200px height:300px">
            <h2 className="text-2xl font-semibold mb-4">Statistiche</h2>
            <p className="mb-4">Qui puoi vedere le tue statistiche. Puoi vedere quanti treni hai ordinato e quanti hai completato.</p>
            {/* Aggiungi qui altri componenti o informazioni per l'utente autenticato */}
          </div>
        </div>
      </main>
      <Footer />
      {showLoginModal && <LoginModal onClose={handleCloseLoginModal} />}
    </div>
  );
}
