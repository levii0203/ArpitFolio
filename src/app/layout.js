"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Navbar";
import { useState , useEffect } from "react";
import Loadscreen from "./components/loadscreen";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const [isloading,setIsloading] = useState(true);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsloading(false);
          },5000);
          return () => clearTimeout(timer);
        },[]);
  return (
    
    <html lang="en" className="dark  overflow-x-hidden overflow-y-scroll w-screen h-screen" >
      <body className={inter.className}>
      { isloading ? (
        <Loadscreen /> ):(
        <>
          <Nav />
          {children}
        </>
      )}
       </body>
    </html>
  );
}
