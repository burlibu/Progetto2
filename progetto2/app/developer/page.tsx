'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SocketAddress } from 'net';

export default function DeveloperPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-black">Pagina Developer</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-black">Benvenuto nella sezione Developer</h2>
        <p className="mb-4 text-gray-700">Questa pagina è dedicata agli sviluppatori e alle informazioni tecniche del progetto.</p>
        {/* Aggiungi qui altri componenti o informazioni per gli sviluppatori */}
      </div>
    </div>
  );
}


