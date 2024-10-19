import Navbar from '../components/Navbar';
import NavbarDev from '../components/NavbarDev';
import Footer from '../components/Footer';

export default function DeveloperLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <NavbarDev />
      <main className="flex-grow p-8 mt-16"> {/* Rimosso bg-gray-100 */}
        {children}                           {/* Aggiunto {children} */}
      </main>
      <Footer />
    </div>
  );
}
