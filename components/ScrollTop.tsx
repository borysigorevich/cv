import React, {useEffect, useState, useCallback} from 'react';

import {BsArrowUp} from 'react-icons/bs'

export const ScrollTop = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false)

    const scrollToTop = () => document.body.scrollTo({top: 0, behavior: 'smooth'})

    useEffect(() => {

        const listener = () => setShowScrollToTop(document.body.scrollTop > 200)

        window.addEventListener('scroll', listener, true)

        return () => window.removeEventListener('scroll', listener)
    }, [])

    console.log(showScrollToTop)

    return (
        <div
            className={`fixed ${showScrollToTop ? 'bottom-[82px]' : '-bottom-full'} right-[16px] grid place-content-center 
            bg-container-alt p-[4.8px] rounded transition-all duration-300 cursor-pointer md:hidden`}
            onClick={scrollToTop}
        >
            <BsArrowUp/>
        </div>
    );
};