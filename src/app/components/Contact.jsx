"use client"
import { React , useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { MdLocationOn } from "react-icons/md";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import {Button} from "@nextui-org/react";
import {Snippet} from "@nextui-org/react";
import { SlArrowLeftCircle } from "react-icons/sl";
import { SlArrowRightCircle } from "react-icons/sl";
import axios from 'axios';

const Contact = ()=>{
    const [visitorname,setVisitorname] = useState('');
    const [visitorprof,setVisitorprof] = useState('');
    const [message,setMessage] = useState('');
    const [curr,setCurr] =  useState(true);

    const routemailer = ()=>{
         axios.post("https://localhost:5000/",{
            message: message,
            visitorname: visitorname,
            visitorprof: visitorprof
        }), {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        .catch((err)=>{console.error(err)})
    }
    return (
        <div className=" flex flex-row bg-state-900 lg:py-12 h-full w-full lg:px-36 ">
            <div className="flex flex-col w-full h-full space-y-12">
            <TypeAnimation
                   sequence={[
                        "I'd like to hear from You"
                        ,
                        2000,
                        'Get in Touch',
                        1000,

                          ]}
                         wrapper="span"
                         speed={100}
                          style={{ display: 'inline-block' }}
                           repeat={Infinity}
                          className="text-4xl pt-10  text-transparent bg-gradient-to-r from-blue-500 to-cyan-300 bg-clip-text"
             />
                <div className="flex flex-col lg:px-12 lg:pt-8 space-y-3 h-full">
                    <label className=" text-white ">Name </label>
                    <input className="bg-black h-12 w-80 border-b-1 border-gray-600 text-white text-sm px-3" placeholder="Enter your name" onChange={(e)=>{setVisitorname(e.target.value)}} required></input>
                </div>
                <div className="flex flex-col lg:px-12 space-y-3 h-full">
                    <label className=" text-white ">Profession  </label>
                    <input className=" bg-black h-12 w-80 text-white border-b-1 border-gray-600 text-sm px-3" placeholder="Your profession" onChange={(e)=>{setVisitorprof(e.target.value)}}></input>
                </div>
                <div className="flex flex-col lg:px-12 space-y-3 h-full drop-shadow-xl shadow-blue-500">
                    <label className=" text-white ">{"<"} Message {"/>"}  </label>
                    <textarea className="bg-zinc-800 h-48 text-start text-red-600  pt-4 px-4" placeholder="Enter your message here" cols={60} rows={40} required onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                </div>
                <div className=' flex h-full w-full '>
                    <Button  variant="solid" className='py-8 px-6 text-white bg-gradient-to-br from-blue-700 to-cyan-700 rounded-full shadow-2xl' onClick={routemailer}>
                    Send Mail
                    </Button>
                </div>
            </div>
            <div className="flex flex-col w-full h-full items-center space-y-12">
                <p className="text-gray-600 lg:pt-20 text-4xl">arpitagrawal3048<span className='text-blue-900 text-5xl'>@</span>gmail.com</p>
                <div className='flex flex-col space-y-2'>
                    <div className='flex flex-row items-center space-x-2'>
                        < FaPhoneAlt className='text-blue-900' />
                        <p className="text-lg text-gray-600">
                        +91 96966343480<br></br>
                        </p></div>
                    <div className='flex flex-row items-center space-x-2'>
                        < FaPhoneAlt className='text-blue-900' />
                        <p className="text-lg text-gray-600">
                        +91 96966343480<br></br>
                        </p>
                    </div>
                    </div>
                <div className='relative flex flex-row  items-center space-x-10'>
                        <div className='cursor-pointer flex flex-row w-full h-full  bg-gray-900 rounded-3xl items-center space-x-3 px-4 py-4'>
                            <MdLocationOn className='text-white text-4xl shadow-2xl' />
                            <p className='text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-lg'> Get my location</p>
                        </div>
                        <div className='cursor-pointer flex flex-row w-full space-x-3 h-full bg-gray-900 rounded-3xl items-center px-3 py-4'>
                            <BsFillBookmarkCheckFill className='text-white text-2xl shadow-2xl' />
                            <label className='text-transparent bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-lg'> Available </label>
                        </div>
                </div>
                <div className='pt-4'>
                <Button
                    disableRipple
                    className="relative overflow-visible rounded-full hover:-translate-y-1 py-6 px-20 shadow-xl bg-blue-500/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-blue-500/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
                    size="lg">
                        Download resume
                </Button>
                </div>
                <div className='flex flex-row h-full w-full items-center justify-center pt-4'>
                         { curr ? (
                            <div className='flex flex-row items-center space-x-10'>
                             <Button className=' bg-inherit ' onClick={()=>{setCurr(false)}} isIconOnly> <SlArrowLeftCircle className='text-zinc-600 text-3xl cursor-pointer hover:text-blue-900'/></Button>
                             <div className='flex flex-col h-full w-full'> 
                                <p className='text-white text-6xl'>
                                    <span className='text-transparent font-normal bg-gradient-to-tr from-red-500 to-yellow-500 bg-clip-text'>
                                        Hire
                                    </span>
                                    &nbsp; me</p>
                            </div>
                                
                            </div>
                            
                         ) : (
                            <div className='flex flex-row items-center space-x-10 pl-8'>
                               <div className='flex flex-col h-full w-full'> 
                                <p className='text-white text-6xl'>
                                    <span className='text-transparent font-normal bg-gradient-to-tr from-purple-500 to-pink-500 bg-clip-text'>
                                        Collab
                                    </span>
                                    &nbsp; w &nbsp;me?</p>
                            </div>
                            <Button className=' bg-inherit  font-extralight' onClick={()=>{setCurr(true)}} isIconOnly> <SlArrowRightCircle className='text-zinc-600 text-3xl cursor-pointer hover:text-blue-900'/></Button>
                            </div>
                         )}
                </div>
            </div>
        </div>
    );
}
export default Contact;