import React, {useState, useEffect} from 'react';
import Link from 'next/link'

import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt, FaReceipt, FaCertificate, FaLink} from 'react-icons/fa'
import {BsBookFill, BsFillBriefcaseFill, BsFillGridFill} from 'react-icons/bs'

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    const toggleMenu = () => setShowMenu(state => !state)

    const closeMenu = (section: string) => () => {
        setActiveSection(section)
        localStorage.setItem('section', section)
        setShowMenu(false)
    }

    const linkStyle = (section: string) => `flex flex-col items-center text-sm hover:text-title 
    gap-2 ${section === activeSection ? 'text-title' : 'text-light'}`

    useEffect(() => {
        const section = localStorage.getItem('section')
        section && setActiveSection(section)
    }, [])

    return (
        <header className=" w-full fixed z-10 bottom-0 left-0 bg-body shadow-md text-black transition px-4 md:hidden">

            <nav className="h-12 flex justify-between items-center">
                <Link href='#' className="text-title">
                    Boris
                </Link>

                <div
                    className={`fixed ${showMenu ? 'bottom-[48px]' : '-bottom-full'} w-full left-0 py-8 px-6 bg-body shadow-md z-10 rounded-tr
                     rounded-br grid grid-cols-3 gap-8 transition-all duration-300`}>
                    <Link href="#home" className={linkStyle('home')} onClick={closeMenu('home')}>
                        <AiFillHome/> Home
                    </Link>

                    <Link href="#profile" className={linkStyle('profile')} onClick={closeMenu('profile')}>
                        <FaUserAlt/> Profile
                    </Link>

                    <Link href="#education" className={linkStyle('education')} onClick={closeMenu('education')}>
                        <BsBookFill/> Education
                    </Link>

                    <Link href="#skills" className={linkStyle('skills')} onClick={closeMenu('skills')}>
                        <FaReceipt/> Skills
                    </Link>

                    <Link href="#experience" className={linkStyle('experience')} onClick={closeMenu('experience')}>
                        <BsFillBriefcaseFill/> Experience
                    </Link>

                    <Link href="#courses" className={linkStyle('courses')} onClick={closeMenu('courses')}>
                        <FaCertificate/> Courses
                    </Link>

                    {/*<Link href="#references" className={linkStyle('references')} onClick={closeMenu('references')}>*/}
                    {/*    <FaLink/> References*/}
                    {/*</Link>*/}
                </div>

                <div className="text-title cursor-pointer text-xl" onClick={toggleMenu}>
                    <BsFillGridFill/>
                </div>
            </nav>
        </header>
    );
};