'use client';

import { useState } from 'react';

interface ModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: ModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

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
        // Qui puoi anche salvare il token nel localStorage o in un context
        localStorage.setItem('token', data.token);
        setTimeout(() => {
          onClose();
          window.location.reload(); // Ricarica la pagina per aggiornare lo stato
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
      <div className="bg-white p-8 rounded-lg relative">
        <h2 className="text-2xl mb-4">Accedi</h2>
        {message && <p className="mb-4 text-green-500">{message}</p>}
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
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Accedi</button>
        </form>
        <button onClick={onClose} className="mt-4 text-blue-500">Chiudi</button>
      </div>
    </div>
  );
}
