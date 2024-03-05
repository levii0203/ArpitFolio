"use client"
import React from "react";
import { MdAdminPanelSettings } from "react-icons/md";

const More = ()=>{
    return (
        <div className="md:h-full relative md:w-full lg:pr-20 lg:py-28 bg-black lg:h-full lg:w-full md:px-20 lg:px-0 md:py-20">
            <div className="flex flex-col md:space-y-8 lg:space-y-0 h-full w-full border-3 border-zinc-900">
                <h1 className=" text-white lg:py-12 md:pt-12  px-24 font-bold  text-2xl "> 
                <span className="bg-gradient-to-br from-blue-500 text-3xl to-cyan-500 text-transparent bg-clip-text">More </span>
                                 Projects </h1>
                <div className="w-full "></div>
                <div className="flex flex-row h-full w-fit space-x-5 justify-center lg:space-x-3 hover:bg-zinc-900 hover:cursor-pointer py-10">
                    <div className="h-full w-fit justify-center">
                        <p className="text-white text-7xl px-5"><MdAdminPanelSettings/></p>
                    </div>
                    <div classNmae=" flex flex-col space-y-12 h-full w-fit ">
                        <h1 className="justify-center text-lg text-white ">ADMIN PANEL</h1>
                        <p className="text-sm  text-gray-400">Our admin panel offers a robust and intuitive interface designed to streamline management tasks effectively. With a user-friendly dash</p>
                    </div>
                    <div className="h-full w-fit pt-12">
                        <a href ="#" className=" text-xl md:px-5 text-transparent bg-gradient-to-tr from-blue-500 to-cyan-500 bg-clip-text">{">>"}</a>
                    </div>

                </div>
                <div className="flex flex-row h-full w-fit space-x-5 justify-center lg:space-x-3 hover:cursor-pointer hover:bg-zinc-900 py-10">
                    <div className="h-full w-fit justify-center">
                        <p className="text-white text-7xl px-5"><MdAdminPanelSettings/></p>
                    </div>
                    <div classNmae=" flex flex-col space-y-12 h-full w-fit ">
                        <h1 className="justify-center text-lg text-white ">ADMIN PANEL</h1>
                        <p className="text-sm  text-gray-400">Our admin panel offers a robust and intuitive interface designed to streamline management tasks effectively. With a user-friendly dash</p>
                    </div>
                    <div className="h-full w-fit pt-12 justify-center">
                        <a href ="#" className=" text-xl md:px-5 text-transparent bg-gradient-to-tr from-blue-500 to-cyan-500 bg-clip-text">{">>"}</a>
                    </div>

                </div>
                <div className="flex flex-row h-full w-fit space-x-5 justify-center lg:space-x-3 hover:cursor-pointer hover:bg-zinc-900 py-10">
                    <div className="h-full w-fit justify-center">
                        <p className="text-white text-7xl px-5"><MdAdminPanelSettings/></p>
                    </div>
                    <div classNmae=" flex flex-col space-y-12 h-full w-fit ">
                        <h1 className="justify-center text-lg text-white ">ADMIN PANEL</h1>
                        <p className="text-sm  text-gray-400">Our admin panel offers a robust and intuitive interface designed to streamline management tasks effectively. With a user-friendly dash</p>
                    </div>
                    <div className="h-full w-fit pt-12 justify-center">
                        <a href ="#" className="hover:animate-move-right text-xl  md:px-5 text-transparent bg-gradient-to-tr from-blue-500 to-cyan-500 bg-clip-text">{">>"}</a>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default More;