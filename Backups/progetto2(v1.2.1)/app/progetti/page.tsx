import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Progetti() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-16 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-ping"></div>
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-ping "></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="relative w-full bg-white p-8 rounded-xl shadow-lg opacity-90">
              <h1 className="text-3xl font-bold text-center mb-4 text-black">Progetti</h1>
              <p className="text-gray-700 text-center mb-8 text-black">Scopri i nostri progetti</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-purple-100 p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-2 text-black">Progetto 1</h2>
                  <p className="text-gray-700">Descrizione del progetto 1</p>
                </div>
                <div className="bg-purple-100 p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-2 text-black">Progetto 2</h2>
                  <p className="text-gray-700">Descrizione del progetto 2</p>
                </div>






                <div className= "grid gap-8 items-start justify-center mx-auto max-w-4xl">
                  
                  <div className="h-14 w-80 bg-purple-100 rounded-lg shadow-sm"></div>
                  <div className="h-14 w-80 bg-purple-100 rounded-lg shadow"></div>
                  <div className="h-14 w-80 bg-purple-100 rounded-lg shadow-md"></div>
                  <div className="h-14 w-80 bg-purple-100 rounded-lg shadow-lg"></div>
                  <div className="h-14 w-80 bg-purple-100 rounded-lg shadow-xl"></div>
                  <div className='relative'>
                    <div className="absolute inset-o pink-600 rounded-lg blur"></div>
                  </div>
                  <button className=" relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                    <span className='flex items-center space-x-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600 -rotate-6 size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
</svg>

                    <span className="pr-6 text-gray-100">Labs Release 2021.09</span></span>
                    <span className="pl-6 text-indigo-400">See what's new</span>

                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}