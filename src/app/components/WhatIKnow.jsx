"use client"
import React from "react";

const Whatiknow = ()=>{
    return (
    <div className="flex lg:flex-col md:flex-col lg:pb-0 lg:space-y-5 md:px-32  lg:pl-24 lg:h-full lg:w-fit lg:pt-36 md:py-12 md:space-y-5 ">
        <div className="flex lg:flex-row  md:w-full  lg:h-fit md:h-fit  md:flex-col md:space-y-5 lg:space-x-5 lg:space-y-0 lg:w-full bg-black">
        
            <div className="flex md:flex-row lg:flex-row md:w-full md:h-fit md:space-x-5 lg:w-fit">
                <div className="flex flex-col py-5 lg:h-60 bg-gray-900 md:w-full md:h-full lg:w-48 space-y-0  shadow-lg shadow-blue-900 rounded-3xl">
                        <h1 className="text-gray-400 px-5 font-mono font-bold text-xl"> Languages </h1>
                        <div className="w-full py-1"></div>
                        <div className="flex flex-wrap  pt-5 md:space-x-0 lg:space-x-0 md:space-y-0 lg:space-y-0">
                        <div className="pl-5" ><p className="bg-zinc-900 text-wrap text-gray-400 text-tiny border-2 font-lighter py-2 px-2 rounded-lg border-green-900">C++</p></div>
                        <div className="pl-2" >  <p className="bg-zinc-900 text-wrap text-gray-400 text-tiny border-2 font-lighter py-2 px-2 rounded-lg border-red-900">Javascript</p></div>
                    
    
                        <div className="lg:pl-5 lg:pt-2 md:pl-2" >  <p className="bg-zinc-900 text-wrap text-gray-400 text-tiny border-2 font-lighter  py-2 px-2 rounded-lg border-blue-900">Java</p></div>
                        <div className="lg:pt-2 pl-1" >  <p className="bg-zinc-900 text-wrap text-gray-400 text-tiny font-lighter py-2 px-2 rounded-lg">Python</p></div>
                        <div className="lg:pt-2 pl-1" >  <p className="bg-zinc-900 text-wrap text-gray-400 text-tiny font-lighter py-2 px-3 rounded-lg">C</p></div>
                        </div>
                </div>
                <div className="flex flex-col lg:h-60 lg:w-48 py-5 bg-gray-900 md:w-full md:h-full shadow-lg shadow-blue-900 rounded-3xl ">
                        <h1 className="text-gray-400 px-5  font-mono font-bold text-xl"> Core </h1>
                        <div className="w-full py-1"></div>
                    
                        <div className="flex flex-wrap pt-5 pl-5 space-x-0 justify-start space-y-2 md:space-y-0">
                            <p className="bg-zinc-900  text-wrap text-gray-400 text-tiny border-2 font-lighter py-2 px-2 rounded-lg border-blue-900">OOPS</p>
                        
                        <div className="pl-2"><p className="bg-zinc-900 text-wrap text-gray-400 text-tiny border-2 font-lighter py-2 px-2 border-yellow-900 rounded-lg">DSA</p></div>
                        
                        <div className="lg:pt-2 md:pl-2 lg:pl-0" >   <p className="bg-zinc-900 text-wrap text-gray-400 text-tiny font-lighter  py-2 px-2 rounded-lg">Computer Networks</p></div>
                           <div className="pt-2"> <p className="bg-zinc-900 text-wrap text-gray-400 text-tiny font-lighter  py-2 px-2 rounded-lg">Operating System</p></div>
                            
                        </div>
                </div> 
            
            </div>
            <div className="flex md:flex-col md:w-full md:h-fit md:space-x-5 lg:w-fit shadow-lg shadow-blue-900 md:overflow-x-hidden rounded-3xl">
                <div className="flex flex-col lg:h-60 py-5 bg-gray-900 md:w-full md:h-full lg:w-48 ">
                        <h1 className="text-gray-400 px-5 font-mono font-bold text-xl"> Frontend </h1>
                        <div className="w-full py-2"></div>
                        <div className="flex flex-wrap lg:px-5 justify-start md:px-5 lg:space-x-0  lg:space-y-0 md:space-x-2 md:space-y-0 ">
                        <p className="bg-zinc-900 text-gray-400 text-tiny  font-lighter py-2 px-2 rounded-lg">HTML</p>
                        <div className="lg:pl-1" ><p className="bg-zinc-900 text-wrap text-gray-400 text-tiny font-lighter py-2 px-2 rounded-lg ">CSS</p></div>
                        <div className="lg:pt-1 lg:pr-1" >  <p className="bg-zinc-900 text-wrap text-gray-400 text-tiny  font-lighter  py-2 px-2 rounded-lg">Typescript</p></div>
                            <p className="bg-zinc-900 text-wrap text-gray-400 text-tiny border-2 font-lighter  py-2 px-2 rounded-lg border-blue-900">ReactJs</p>
                            <div className="lg:pt-1 lg:pr-1" >    <p className="bg-zinc-900 text-wrap text-gray-400 text-tiny border-2 font-lighter  py-2 px-2 rounded-lg border-gray-600">Tailwind</p></div>
                            <div className="lg:pt-1" ><p className="bg-zinc-900 text-wrap text-gray-400 text-tiny border-2 font-lighter  py-2 px-2 rounded-lg border-yellow-900">Javascript</p></div>
                            <div className="lg:pt-1" ><p className="bg-zinc-900 text-wrap text-gray-400 text-tiny border-2 font-lighter  py-2 px-2 rounded-lg border-green-900">Next Js 13</p></div>
                        </div>
                    </div>
                
            
            </div>
        </div>
            
        <div className="flex lg:flex-row md:w-full lg:pt-16 lg:h-full md:h-fit md:flex-col md:space-y-5 lg:space-x-5 lg:space-y-0 lg:w-full bg-black">
                
                <div className="flex md:flex-row lg:flex-row md:w-full md:h-fit md:space-x-5 lg:w-fit">
                        <div className="flex flex-col lg:h-60 py-5 lg:w-48 bg-gray-900 md:w-full space-y-0 md:h-full shadow-lg shadow-blue-900 rounded-3xl">
                            <h1 className="text-gray-400 px-5  font-mono font-bold text-xl"> Backend </h1>
                            <div className="w-full py-1"></div>
                            <div className="flex flex-row px-5 pt-5 space-x-2">
                                <p className="bg-zinc-900 text-wrap text-gray-400 text-tiny border-2 font-lighter py-2 px-2 rounded-lg border-green-900">NodeJs</p>
                                <p className="bg-zinc-900 text-wrap text-gray-400 text-tiny border-2 font-lighter py-2 px-2 rounded-lg border-gray-700">ExpressJs</p>
                            </div>
                            <div className="flex flex-row px-5 pt-2 space-x-2">
                                <p className="bg-zinc-900 text-wrap text-gray-400 text-tiny font-lighter py-2 px-2 rounded-lg">Next Auth</p>
                    
                            </div>
                         </div>
                         <div className="flex flex-col lg:h-60 py-5 bg-gray-900 md:w-full lg:w-48 md:h-fit shadow-lg shadow-blue-900 rounded-3xl">
                        <h1 className="text-gray-400 px-5  font-mono font-bold text-xl"> Databases </h1>
                        <div className="w-full py-1"></div>
                        <div className="flex flex-row px-5 pt-5 space-x-2">
                            <p className="bg-zinc-900 text-wrap text-gray-400 text-tiny border-2 font-lighter py-2 px-2 rounded-lg border-blue-900">MySQL</p>
                            <p className="bg-zinc-900 text-wrap text-gray-400 text-tiny border-2 font-lighter py-2 px-2 rounded-lg border-green-900">MongoDB</p>
                        </div>
                        <div className="flex flex-row px-5 pt-3 space-x-2">
                            <p className="bg-zinc-900 text-wrap text-gray-400 text-tiny border-2 font-lighter  py-2 px-2 rounded-lg border-blue-900">PostgreSQL</p>
                        </div>
                </div>
                <div className="flex md:flex-row lg:flex-row md:w-full md:h-fit md:space-x-5 lg:w-fit">
                      
                         <div className="flex flex-col lg:h-60 py-5 bg-gray-900 md:w-full lg:w-48 md:h-fit shadow-lg shadow-blue-900 rounded-3xl">
                        <h1 className="text-gray-400 px-5  font-mono font-bold text-xl"> DevOps </h1>
                        <div className="w-full py-1"></div>
                        <div className="flex flex-row px-5 pt-5 space-x-2">
                            <p className="bg-zinc-900 text-wrap text-gray-400 text-tiny border-2 font-lighter py-2 px-2 rounded-lg border-blue-900">MySQL</p>
                            <p className="bg-zinc-900 text-wrap text-gray-400 text-tiny border-2 font-lighter py-2 px-2 rounded-lg border-green-900">MongoDB</p>
                        </div>
                        <div className="flex flex-row px-5 pt-3 space-x-2">
                            <p className="bg-zinc-900 text-wrap text-gray-400 text-tiny border-2 font-lighter  py-2 px-2 rounded-lg border-blue-900">PostgreSQL</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
    <div className= "w-fit h-full lg:pt-40 relative sm:hidden md:hidden lg:block">
            <p className='bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text font-semibold text-3xl'> <span className="text-white text-3xl">Web </span>3</p>
            <p className="text-gray-700 font-bold pt-1"> My skillset as a Web3 developer</p>
    </div>
</div>
);
}

export default Whatiknow;