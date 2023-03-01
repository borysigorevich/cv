import React, {useState} from 'react';
import Link from 'next/link'

import {FaHome, FaUserAlt} from 'react-icons/fa'
import {BsFillChatFill} from 'react-icons/bs'
import {AiFillSetting, AiOutlineCamera, AiOutlineQrcode, AiOutlineVideoCamera} from 'react-icons/ai'

const Navigation = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className='h-full grid place-content-center bg-[#2196f3]'>
            <div className='w-[400px] h-[80px] relative z-10 select-none'>
                <div className={`w-[60px] h-[60px] bg-[#ff3b7e] rounded-full absolute z-[1] left-1/2 -translate-x-1/2
                    -translate-y-1/2 grid place-content-center text-[2.1rem] font-semibold transition-all duration-1000
                    ${isActive && 'rotate-[225deg]'}
                    `}
                     onClick={() => setIsActive(state => !state)}
                >
                    +
                </div>

                <div className={`absolute w-40 h-20 left-1/2 -translate-x-1/2 bg-[#8bc34a]  rounded-bl-[80px]
                    rounded-br-[80px] [transform-origin:top_center] transition-all duration-500 
                    ${isActive ? 'rotate-[180deg] delay-0' : 'delay-[0.4s]'}`}/>
                <div className={`absolute w-40 h-20 left-1/2 -translate-x-1/2 bg-[#ffeb3b]  rounded-bl-[80px]
                    rounded-br-[80px] [transform-origin:top_center] transition-all duration-[0.8s]
                    ${isActive ? 'rotate-[180deg] delay-0' : 'delay-200'}`}/>
                <div className={`absolute w-40 h-20 left-1/2 -translate-x-1/2 bg-[#fff]  rounded-bl-[80px]
                    rounded-br-[80px] [transform-origin:top_center] transition-all duration-1000 ${isActive && 'rotate-[180deg]'}`}>
                    <ul className='absolute inset-0 flex items-center justify-center text-[1.25rem] text-[#bbb]'>
                        <li className='absolute translate-x-[50px] translate-y-[-15px] rotate-180'>
                            <Link href='/navigation' className='hover:text-[#ff3b7e]'>
                                <AiOutlineCamera/>
                            </Link>
                        </li>

                        <li className='absolute translate-x-0 translate-y-[15px] rotate-180'>
                            <Link href='/navigation' className='hover:text-[#ff3b7e]'>
                                <AiOutlineQrcode/>
                            </Link>
                        </li>

                        <li className='absolute translate-x-[-50px] translate-y-[-15px] rotate-180'>
                            <Link href='/navigation' className='hover:text-[#ff3b7e]'>
                                <AiOutlineVideoCamera/>
                            </Link>
                        </li>
                    </ul>
                </div>

                <ul className='absolute inset-0 rounded-[10px] bg-white flex items-center justify-center gap-[55px]
                    shadow-[0_15px_25px_rgba(0,0,0,0.1)]
                '>
                    <li className='group'>
                        <Link href='/navigation'>
                            <FaHome className='text-[1.5rem] text-[#bbb] pointer-events-none group-hover:text-[#2196f3]
                            '/>
                        </Link>
                    </li>
                    <li className='group'>
                        <Link href='/navigation'>
                            <FaUserAlt className='text-[1.5rem] text-[#bbb] pointer-events-none group-hover:text-[#2196f3]
                            '/>
                        </Link>
                    </li>
                    <li></li>
                    <li className='group'>
                        <Link href='/navigation'>
                            <BsFillChatFill className='text-[1.5rem] text-[#bbb] pointer-events-none group-hover:text-[#2196f3]
                            '/>
                        </Link>
                    </li>
                    <li className='group'>
                        <Link href='/navigation'>
                            <AiFillSetting className='text-[1.5rem] text-[#bbb] pointer-events-none group-hover:text-[#2196f3]
                            '/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navigation;