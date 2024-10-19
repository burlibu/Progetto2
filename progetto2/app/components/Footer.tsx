import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-2 fixed bottom-0 w-full">
      <div className="w-full flex justify-end pr-4"> {/* Rimosso container, aggiunto w-full e pr-4 */}
        <div className="flex space-x-4 items-center">
          <Link href="/chi-siamo" className="hover:text-gray-300">Chi Siamo</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/contact" className="hover:text-gray-300">Contatti</Link>
          <span className="text-sm text-gray-400 ml-4">Versione 1.0.0</span>
        </div>
      </div>
    </footer>
  );
}
