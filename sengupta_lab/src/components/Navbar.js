import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";

export const Navbar = () => {
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Career', href: '/career' },
    ]

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <>
            <nav className="navbar flex items-center justify-between p-6 lg:px-8 text-white" aria-label="Global">
                <div className="flex lg:flex-1">
                    <div className="flex items-center">
                        <NavLink className="navbar-brand text-bold" to="/">The Sengupta Laboratory</NavLink>
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Toggle menu</span>
                        <IoMdMenu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className={`lg:flex lg:gap-x-12 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white flex flex-col">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="/" className="text-sm font-semibold leading-6 text-white">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
        </>
    )
}
