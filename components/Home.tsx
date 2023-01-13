import React, {useEffect} from 'react';
import Image from "next/image";
import Link from 'next/link'
import {useTheme} from "next-themes";

import {AiFillGithub, AiTwotoneMail} from "react-icons/ai";
import {BsTelegram} from "react-icons/bs";
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'

export const Home = () => {
    const {theme, setTheme} = useTheme()

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        theme && setTheme(theme)
    }, [])

    const changeTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
            localStorage.setItem('theme', 'light')
        }
        else {
            setTheme('dark')
            localStorage.setItem('theme', 'dark')
        }
    }

    return (
        <section id="home" className='py-6 relative'>

            {theme === 'dark'
                ? <BsFillSunFill onClick={changeTheme} className='absolute top-4 right-4 cursor-pointer'/>
                : <BsFillMoonFill onClick={changeTheme} className='absolute top-4 right-4 cursor-pointer'/>
            }

            {/*<a href='/CV.pdf' download>download</a>*/}

            <div className='grid gap-6'>
                <div className="text-center">
                    <Image
                        src='/me.jpeg'
                        alt='my photo'
                        width={175}
                        height={175}
                        className="mx-auto mb-4 rounded-full object-cover aspect-square"
                    />
                    <h1 className="text-3xl dark:text-title-dark">Boris Kutsenko</h1>
                    <h3 className='text-xl dark:text-base-dark'>React Developer</h3>
                </div>

                <div className='grid gap-3 mx-auto'>
                    <div className="flex gap-2 items-center text-light dark:text-base-dark">
                        <AiTwotoneMail/> <span>borysigorevich@gmail.com</span>
                    </div>

                    <div className="flex gap-2 items-center text-light dark:text-base-dark">
                        <BsTelegram/> <span>@your_bratik</span>
                    </div>

                    <div className="flex gap-2 items-center text-light dark:text-base-dark">
                        <AiFillGithub/> <Link target="_blank"
                                              href="https://github.com/borysigorevich">github.com/borysigorevich</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};