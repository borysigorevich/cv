import React from 'react';
import Image from "next/image";
import Link from 'next/link'
import {AiFillGithub, AiTwotoneMail} from "react-icons/ai";
import {BsTelegram} from "react-icons/bs";

export const Home = () => {
    return (
        <section id="home" className='py-6'>
            <div className='grid gap-6'>
                <div className="text-center">
                    <Image
                        src='/me.jpeg'
                        alt='my photo'
                        width={175}
                        height={175}
                        className="mx-auto mb-4 rounded-full aspect-square"
                    />
                    <h1 className="text-3xl">Boris Kutsenko</h1>
                    <h3 className='text-xl'>React Developer</h3>
                </div>

                <div className='grid gap-3 mx-auto'>
                    <div className="flex gap-2 items-center text-light">
                        <AiTwotoneMail/> <span>borysigorevich@gmail.com</span>
                    </div>

                    <div className="flex gap-2 items-center text-light">
                        <BsTelegram/> <span>@your_bratik</span>
                    </div>

                    <div className="flex gap-2 items-center text-light">
                        <AiFillGithub/> <Link target="_blank"
                                              href="https://github.com/borysigorevich">github.com/borysigorevich</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};