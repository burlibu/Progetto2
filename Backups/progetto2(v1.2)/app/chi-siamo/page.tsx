'use client';

import Navbar from '../components/Navbar';
import Button from '../components/Button';

export default function ChiSiamo() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Chi Siamo</h1>
        
        <div className="mb-12">
          <p className="text-lg mb-4">
            Siamo un&apos;azienda dedicata a fornire servizi di alta qualità ai nostri clienti. 
            Con anni di esperienza nel settore, ci impegniamo a offrire soluzioni innovative e personalizzate.
          </p>
          <p className="text-lg mb-4">
            La nostra missione è superare le aspettative dei clienti attraverso un servizio eccellente e un&apos;attenzione costante ai dettagli.
          </p>
        </div>

        <div className="text-center">
          <Button 
            text="Torna alla Home" 
            onClick={() => window.location.href = '/'} 
          />
        </div>
      </main>
    </div>
  );
}
