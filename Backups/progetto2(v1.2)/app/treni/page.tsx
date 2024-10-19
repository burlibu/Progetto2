'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function Treni() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">I Nostri Treni</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card 
            title="Treno di primo livello" 
            description="Un ottimo modello per iniziare" 
            imageUrl="/Treno1.jpeg" 
          />
          <Card 
            title="Treno di secondo livello" 
            description="Affidabile e veloce" 
            imageUrl="/Treno2.jpeg" 
          />
          <Card 
            title="Treno di terzo livello" 
            description="Il top del top" 
            imageUrl="/Treno3.jpeg" 
          />
        </div>
      </main>
    </div>
  );
}
