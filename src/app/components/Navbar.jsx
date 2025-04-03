"use client";
import React, { useState } from 'react'
import Link from "next/link"
import next from 'next'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: "About",
        path: "/#about",
    },
    {
        title: "Projects",
        path: "/#projects",
    },
    {
        title: "Blog",
        path: "blog.naren-p.com",
    },
    {
        title: "Contact",
        path: "/#contact",
    }
]

const Navbar = () => {
    const [ navbarOpen, setNavbarOpen ] = useState(false);

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-black bg-opacity-100">
            <div className='flex flex-wrap items-center justify-between mx-auto p-8 px-4 py-2'>
                <Link href="/" className='text-5xl text-white font-semibold px-1 py-2 font-serif'>np</Link>
                <div className='mobile-menu block md:hidden'>
                    {
                        !navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded text-slate-200 hover:text-white hover:border-white'>
                                <Bars3Icon className='h-5 w-5' />
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded text-slate-200 hover:text-white hover:border-white'>
                                <XMarkIcon className='h-5 w-5' />
                            </button>
                        )
                    }
                </div>
                <div className='menu hidden md:block md:w-auto'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default Navbar