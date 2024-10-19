'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';  // Aggiungi questa riga

interface ModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: ModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const router = useRouter();  // Aggiungi questa riga

  useEffect(() => {
    if (message) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Accesso effettuato con successo!');
        localStorage.setItem('token', data.token);
        setTimeout(() => {
          onClose();
          router.push('/dashboard');
        }, 2000);
      } else {
        setMessage(data.message || 'Errore durante l\'accesso');
      }
    } catch (error) {
      setMessage('Errore di rete');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black p-8 rounded-2xl relative">
        <h2 className="text-2xl mb-4 text-white text-center">Accedi</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
          />
          <div className="flex justify-center">
            <button type="submit" className="px-8 bg-white text-black p-2 rounded-full hover:bg-red-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
              Accedi
            </button>
          </div>
        </form>
        <button onClick={onClose} className="mt-4 text-white hover:text-red-600">Chiudi</button>
      </div>
      <div 
        className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 text-green-600 px-6 py-3 rounded-full transition-all duration-2000 ease-in-out ${
          showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {message}
      </div>
    </div>
  );
}

