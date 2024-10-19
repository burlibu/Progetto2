'use client';

import Navbar from '../components/Navbar';
import NavbarDev from '../components/NavbarDev';
import Footer from '../components/Footer';
import { ReactNode, useState } from 'react';

interface Note {
  version: string;
  info: ReactNode;
}

export default function DevNotesPage() {
  const [notes, setNotes] = useState<Note[]>([
    {
      version: 'Versione 1.0.0',
      info: (
        <>
          Versione iniziale della ripresa dello sviluppo del sito. <br />
          Il sito presenta alcune funzionalità:
          <ul>
            <li>Funzionalità di base: <strong>Login</strong>, <strong>Registrazione</strong>, <strong>Dashboard</strong>, <strong>Treni</strong>, <strong>Progetti</strong></li>
            <li><strong>Developer Access mode</strong> accessibile dalla pagina Developer. Si possono trovare le seguenti pagine: </li>
            <ul>
              <li><strong>Flexbox</strong>: una pagina dove si possono trovare spiegazioni ed esempi grafici per creare griglie ed interfacce in <em>tailwind</em>.</li>
              <li><strong>Playground</strong>: Dove sbizzarrire la propria creatività con i componenti <em>tailwind</em>.</li>
              <li><strong>Developer Notes</strong>: pagina dove verranno dichiarati i cambiamenti di ogni versione.</li>
            </ul>
          </ul>
        </>
      ),
    },
    {
      version: 'Versione 1.0.1',
      info: (
        <>
          Creata pagina "Developer Notes" nella sezione Developer per tener traccia degli aggiornamenti e novità.
          <br />
          
        </>
      ),
    },
    {
      version: 'Versione 1.0.2',
      info: (
        <>
          Aggiunta la pagina <strong>Idea tatoo generator </strong>che permette cliccando un tasto di "generare" una idea per tatuaggio. Si tratta di una funzione presa da codepen.io e funziona con una non così semplice funzione che mischia un database di parole per comporre stringhe sensate. <br />Finora è accessibile dalla devbar. Si pensa in futuro di fare una sezione dedicata all' importazione di questo genere di idee.
          <br />
          
        </>
      ),
    },
    // Aggiungi qui altre versioni
  ]);

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100">
      <Navbar />
      <NavbarDev />
      <main className="flex-col flex w-full max-w-full mx-auto p-6 mt-16">
        <h1 className="text-3xl font-bold mb-6 text-black">Developer Notes</h1>
        <div className="flex flex-col-reverse">
          {notes.map((note, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-4 w-full mx-auto">
              <div className="font-semibold text-xl w-full">{note.version}</div>
              <div className="text-gray-700 whitespace-pre-wrap break-all w-full">{note.info}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
