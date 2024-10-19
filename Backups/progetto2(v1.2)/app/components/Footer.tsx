import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-2 fixed bottom-0 w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <Link href="/chi-siamo" className="hover:text-gray-300">Chi Siamo</Link>
            <Link href="/about" className="hover:text-gray-300">About</Link>
            <Link href="/contact" className="hover:text-gray-300">Contatti</Link>
          </div>
          <div className="text-sm text-gray-400">
            <p>Versione 1.0.0</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
