"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { FaList } from 'react-icons/fa6'
import { ModeToggle } from '../ui/ThemeSwitcher'



const Navbar = () => {
    const [isNavopen, setNavOpen] = useState(false)

    const handleNavbar = () =>{
        setNavOpen((prev) => !prev)
    }
    
    return (
        <header className='flex justify-between items-center h-14 py-4 px-4 relative'>
            <Link href={"/"} className='text-2xl'>kay</Link>
            <ModeToggle />
            <nav className='hidden sm:flex gap-4 items-center text-xs'>
                <Link className='hover:text-green-500' href={'#service'}>Service</Link>
                <Link className='hover:text-green-500' href={"#portfolio"}>Portfolio</Link>
                <Link className='hover:text-green-500' href={"#contacts"}>Contacts</Link>
            </nav>
            <button onClick={handleNavbar} className='blog sm:hidden'>
                <FaList className='text-2xl'/>
            </button>

            {/* sidenavbar */}

            <div className={`md:hidden w-full bg-[#f1f1f1] dark:bg-gray-900 ${isNavopen ? "left-0 z-50 opacity-100" : "-left-[100%] opacity-0 -z-50"} top-0 h-screen absolute`}>
                <div className='flex justify-center items-center h-screen relative'>
                    <button onClick={handleNavbar} className='absolute top-4 right-4'>
                        <FaTimes className='text-3xl' />
                    </button>
                    <nav className='flex flex-col justify-center gap-4 text-2xl items-center'>
                        <Link onClick={handleNavbar} href={'#service'}>Service</Link>
                        <Link onClick={handleNavbar} href={"#portfolio"}>Portfolio</Link>
                        <Link onClick={handleNavbar} href={"#contacts"}>Contact</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar