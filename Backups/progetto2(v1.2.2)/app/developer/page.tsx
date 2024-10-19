'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DeveloperPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-100 p-8 ">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-black">Pagina Developer</h1>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-black">Benvenuto nella sezione Developer</h2>
            <p className="mb-4">Questa pagina è dedicata agli sviluppatori e alle informazioni tecniche del progetto.</p>
            {/* Aggiungi qui altri componenti o informazioni per gli sviluppatori */}
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 mt-8"> {/* Aggiunto mt-8 per il margine superiore */}
            <h2 className="text-2xl font-semibold mb-4 text-black">Secondo Box</h2>
            <p className="mb-4">Questo è il contenuto del secondo box, che appare più in basso.</p>
            <a href="/flexbox" className="text-blue-500 hover:text-blue-700">Flexbox</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}