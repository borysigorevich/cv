import React, {useEffect, useState} from 'react';

import {BsArrowUp} from 'react-icons/bs'

export const ScrollTop = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false)

    const scrollToTop = () => document.body.scrollTo({top: 0, behavior: 'smooth'})

    useEffect(() => {

        const listener = () => setShowScrollToTop(document.body.scrollTop > 200)

        window.addEventListener('scroll', listener, true)

        return () => window.removeEventListener('scroll', listener)
    }, [])

    return (
        <div
            className={`fixed ${showScrollToTop ? 'bottom-[82px]' : '-bottom-full'} right-[16px] grid place-content-center 
            bg-container-alt p-[4.8px] rounded transition-all duration-300 cursor-pointer md:hidden dark:bg-container-alt-dark dark:text-title-dark`}
            onClick={scrollToTop}
        >
            <BsArrowUp/>
        </div>
    );
};