'use client';

import Link from 'next/link';

export default function NavbarDev() {
  return (
    <nav className="bg-blue-700 p-2 w-full fixed -mt-1 z-9">
      <div className=" mx-auto flex justify-between items-center">
        <div className="text-white font-bold">Developer Access</div>
        <ul className="flex space-x-4">
          <li className="text-white hover:text-gray-300 p-right-4"><Link href="/flexbox">Flexbox</Link></li>
          <li className="text-white hover:text-gray-300 p-right-4"><Link href="/playground">Playground</Link></li>
          <li className="text-white hover:text-gray-300 p-right-4"><Link href="/devnotes">Developer Notes</Link></li>
          <li className="text-white hover:text-gray-300 p-right-4"><Link href="/tatoo">Tattoo Idea Generator</Link></li>
        </ul>
      </div>
    </nav>
  );
}
