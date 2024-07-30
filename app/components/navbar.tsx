"use client"
import React from 'react'

import Link from "next/link";
import { AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
    const handleNav = () => (
      setMenuOpen(!menuOpen)
  )
  return (
    <nav className="fixed md:bg-transparent bg-blue-400 w-full md:pl-24 md:pr-24">
        <div className="flex md:justify-around justify-between items-center h-full w-full px-4 2xl:px-16 py-4">
         <h1 className='font-bold text-2xl'>Cguru</h1>
         <div>
           <ul className="hidden md:flex items-center">
             <Link href="/"><li className="ml-6 text-lg hover:border-b-2 hover:border-blue-900">Home</li></Link>
             <Link href="/projects"><li className="ml-6 text-lg hover:border-b-2 hover:border-blue-900">Projects</li></Link>

             <button className='ml-5 rounded-full bg-blue-900 text-sm font-semibold py-3 px-4 text-white hover:bg-blue-800'><a href="https://api.whatsapp.com/send/?phone=237654575276&text&type=phone_number&app_absent=0">Connect with me</a></button>
           </ul>
         </div>
         <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
           <AiOutlineMenu size={25}/>
         </div>
        </div>
        <div className={
         menuOpen 
         ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-blue-200 p-10 ease-in duration-500"
         : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }>
         <div className="flex w-full items-center justify-end">
           <div onClick={handleNav} className="cursor-pointer">
             <AiOutlineClose size={25}/> 
           </div>
         </div>
         <div className="md:flex-col py-4">
           <ul>
             <Link href="/"><li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">Home</li></Link>
             <Link href="/projects"><li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">Projects</li></Link>

             <button className='rounded-full bg-blue-900 text-sm font-semibold py-3 px-4 text-white hover:bg-blue-800'><a href="https://api.whatsapp.com/send/?phone=237654575276&text&type=phone_number&app_absent=0">Connect with me</a></button>
           </ul>
         </div>
        </div>
     </nav>
  )
}

export default Navbar