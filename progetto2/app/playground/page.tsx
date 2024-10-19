'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NavbarDev from '../components/NavbarDev';
import GrayBox from '../components/GrayBox';



export default function PlaygroundPage() {
  return (
    <div className="flex overflow-auto flex-grow bg-gray-700">     {/* Contenitore principale*/}
      <Navbar />
      <NavbarDev />
      <main className=" w-full h-min-screen flex-auto  p-8 gap-8 justify-content"> {/* Contenitore subprincipale*/}
        <div className= "pt-6 pb-6" >
        <div className ="w-full inline-flex justify-around items-center bg-gray-100 p-8 rounded-xl border border-dashed border-gray-400"> {/* Box con quadratini colorati*/}
        <GrayBox className="w-500 bg-red-600 h-500"></GrayBox>
        <GrayBox className="w-500 bg-orange-600 h-500"></GrayBox>
        <GrayBox className="w-500 bg-green-600 h-500"></GrayBox>
        <GrayBox className="w-500 bg-yellow-600 h-500"></GrayBox>
        <GrayBox className="w-500 bg-purple-600 h-500"></GrayBox>

        </div>
          </div> 
            <div className='w-1/3 h-1/3 bg-gray-100 rounded-xl mb-8 flex justify-center items-center'> {/* Box con quadratini blu uno dentro l'altro*/}
            <div className='w-1/2 h-1/2 bg-blue-100 rounded-xl flex justify-center items-center'>
            <div className='w-1/2 h-1/2 bg-blue-200 rounded-xl flex justify-center items-center'>
            <div className='w-1/2 h-1/2 bg-blue-300 rounded-xl flex justify-center items-center'>
            <div className='w-1/2 h-1/2 bg-blue-400 rounded-xl flex justify-center items-center'>
            <div className='w-1/2 h-1/2 bg-blue-500 rounded-xl flex justify-center items-center'>
            <div className='w-1/2 h-1/2 bg-blue-600 rounded-xl flex justify-center items-center'></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  

        </div>
        <div className='w-1/2 min-h-1/2 bg-gray-100 rounded-xl flex flex-wrap  gap-1 gap-y-1 p-4' > {/* Box con quadratini colorati*/}
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-red-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-purple-200 rounded-xl'></div>
          <div className='w-10 h-10 bg-orange-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-blue-100 rounded-xl'></div>
          <div className='w-10 h-10 bg-yellow-100 rounded-xl'></div>


        </div>

        <div className ="w-full inline-flex justify-around items-center bg-gray-100 p-8 rounded-xl border border-dashed border-gray-400 mb-20 mt-8"> {/* Box con quadratini colorati*/}
        <GrayBox className="w-500 bg-red-600 h-500"></GrayBox>
        <GrayBox className="w-500 bg-orange-600 h-500"></GrayBox>
        <GrayBox className="w-500 bg-green-600 h-500"></GrayBox>
        <GrayBox className="w-500 bg-yellow-600 h-500"></GrayBox>
        <GrayBox className="w-500 bg-purple-600 h-500"></GrayBox>

        </div>
        
        

            
      </main>
      <Footer />
    </div>
  );
}