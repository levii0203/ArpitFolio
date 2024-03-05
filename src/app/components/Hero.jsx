"use client"
import { TypeAnimation } from 'react-type-animation';

const Hero = ()=>{
    return(
    <div className="relative hidden sm:flex flex-col h-full w-full">
    
        <div className=" relative w-full h-40 flex-col px-40 md:px-0 lg:px-32 space-y-8 bg-black ">
                   
            <div className=" relative animate-slide-up h-full w-272 md:w-full lg:w-272 flex flex-row bg-cover bg-center  rounded-large items-center">
                    <img src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg"
                    className='h-full w-full absolute object-cover blur-sm mix-blend-screen'></img>
                    <div className='h-full w-full flex flex-row px-20 items-center'>
                     <div className='h-32 rounded-full w-32 z-10  items-center'><img src = "../../../public/Arpit.png"
                    className="rounded-full h-full border-3 border-white w-full bg-gradient-to-tr from-blue-500 to-cyan-500 bg-clip-border z-15"></img></div>
                    <div className="text-white hidden sm:flex flex-col px-10  space-y-9 font-mono  ">
                        <a className="cursor-pointer text-3xl font-extrabold font-mono pb-5 hover:text-cyan-900 z-10">Arpit Agrawal</a>
                        <p className="text-normal text-gray-400 absolute">Software Developer | FullStack Developer | Backend Developer </p>
                        
                    </div>
                </div>
            </div>
        
        </div>
    </div>
     
    );
}
export default Hero;