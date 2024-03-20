"use client"
import { TypeAnimation } from 'react-type-animation';

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { IoLogoGoogle } from "react-icons/io";
import Whatiknow from "./components/WhatIKnow";

import More from './components/More';
import Webthree from './components/Web3';
import Contact from './components/Contact';


export default function Home() {
    
  return(
    <main className="flex flex-col xl:w-screen h-screen bg-black min-h-screen">
      <div>
        <Hero />
      </div>
      <div className="hidden sm:flex md:w-full md:flex-col flex-col bg-black w-full xl:w-full h-fit">
      <div classname="h-20 w-full flex flex-col space-y-5 justify center md:w-fit pt-10 lg:w-full items-center">
        <div className='flex flex-row space-x-5 lg:px-40 md:px-24 items-center'>
          <p className='text-3xl  font-semibold font-mono pt-14 text-transparent bg-gradient-to-tr from-blue-500 to-cyan-500 bg-clip-text'>{"<"}</p>
            <TypeAnimation
                   sequence={[
                        'Projects'
                        ,
                        2000,
                        'Check my Github...',
                        1000,
                          ]}
                         wrapper="span"
                         speed={100}
                          style={{ display: 'inline-block' }}
                           repeat={Infinity}
                          className="text-xl px-0  font-mono pt-14 text-white"
             />
             <p className='text-3xl  pt-14 font-mono text-transparent bg-gradient-to-tr from-blue-500 to-cyan-500 bg-clip-text'>{"/>"}</p>
             </div>
        </div>
        <Projects />
    
    <div className='flex lg:flex-row lg:pt-24 lg:px-20 md:pt-10 md:flex-col  h-full w-full flex-direction:column; bg-black lg:space-x-0'>
      <div className='flex flex-col h-full w-full  '>
      <div className=' lg:w-[800px] lg:h-[80px] md:h-full md:w-fit md:pt-12 lg:pt-16 lg:px-12 md:px-24 w-[800px] bg-black '>
        <div className=' flex flex-row space-x-7 border-2 border-gray-600 h-full w-full items-center px-5 md:w-full lg:w-fit md:h-[80px] lg:h-[60px]
        '> <p className='lg:text-4xl md:text-3xl text-gray-400'>
              <IoLogoGoogle />
          </p><div className='flex flex-row items-center h-full space-x-3'>
          <p className="lg:text-2xl md:text-lg text-white font-bold">What</p>
         
            <TypeAnimation
                   sequence={[
                        'I know'
                        , 
                        1000,
                        'is my strength?',
                        500,
                          ]}
                         wrapper="span"
                         speed={50}
                          style={{ display: 'inline-block' }}
                           repeat={Infinity}
                          className="text-2xl px-0 font-bold font-mono text-transparent bg-clip-text  bg-gradient-to-tr from-blue-500 to-cyan-500"
             />
    
          </div>
          </div></div>  
          <Whatiknow /></div>
          <More/>
        </div>
        <div className="lg:py-8">
            <Webthree />
        </div>
        <div className="lg:py-8">
          <Contact/>
        </div>
      </div>
    </main>
  );
};
