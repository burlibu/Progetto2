'use client';

import { useState } from 'react';

interface ModalProps {
  onClose: () => void;
}

export default function RegisterModal({ onClose }: ModalProps) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dati di registrazione:', { username, email, password });
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });
      console.log('Risposta del server:', response);
      const data = await response.json();
      console.log('Dati della risposta:', data);
      if (response.ok) {
        alert('Registrazione avvenuta con successo');
        onClose();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Errore durante la registrazione:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg relative">
        <h2 className="text-2xl mb-4">Registrati</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
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
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Registrati</button>
        </form>
        <button onClick={onClose} className="mt-4 text-blue-500">Chiudi</button>
      </div>
    </div>
  );
}
