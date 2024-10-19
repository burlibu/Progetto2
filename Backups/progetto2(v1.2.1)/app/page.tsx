'use client';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeContent from './components/HomeContent';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HomeContent />
      </main>
      <Footer />
    </div>
  );
}
