import React, {useState} from 'react';

import Link from 'next/link'

const Nav = () => {
    const [isToggleMenuActive, setIsToggleMenuActive] = useState(false)

    return (
        <div className='h-full w-full grid place-content-center bg-[linear-gradient(135deg,#e91e63,#673ab7)]'>
            <ul
                className={`relative ${isToggleMenuActive ? 'w-[600px]' : 'w-[60px]'} h-[60px] bg-white rounded-full shadow-[0,10px,15px,rgba(0,0,0,0.05)]
                    transition-all duration-500 flex items-center justify-evenly delay-500`}
            >

                <li className={`transition-[transform] duration-500
                
                ${isToggleMenuActive ? 'scale-100 delay-[0.75s] flex' : 'scale-0'}`}>
                    <Link className='text-[#333] uppercase tracking-[0.12rem] transition-all py-[5px] px-[15px]
                    rounded-[20px] hover:bg-[#ff4181] hover:text-white' href='/nav'
                    >Home</Link>
                </li>

                <li className={`transition-[transform] duration-500
                
                ${isToggleMenuActive ? 'scale-100 delay-[0.75s] flex' : 'scale-0'}`}>
                    <Link className='text-[#333] uppercase tracking-[0.12rem] transition-all py-[5px] px-[15px]
                    rounded-[20px] hover:bg-[#ff4181] hover:text-white' href='/nav'
                    >About</Link>
                </li>

                <li className={`transition-[transform] duration-500
                
                ${isToggleMenuActive ? 'scale-100 delay-[0.75s] flex' : 'scale-0'}`}>
                    <Link className='text-[#333] uppercase tracking-[0.12rem] transition-all py-[5px] px-[15px]
                    rounded-[20px] hover:bg-[#ff4181] hover:text-white' href='/nav'
                    >Services</Link>
                </li>

                <li className={`transition-[transform] duration-500
                
                ${isToggleMenuActive ? 'scale-100 delay-[0.75s] flex' : 'scale-0'}`}>
                    <Link className='text-[#333] uppercase tracking-[0.12rem] transition-all py-[5px] px-[15px]
                    rounded-[20px] hover:bg-[#ff4181] hover:text-white' href='/nav'
                    >Team</Link>
                </li>

                <li className={`transition-[transform] duration-500
                
                ${isToggleMenuActive ? 'scale-100 delay-[0.75s] flex' : 'scale-0'}`}>
                    <Link className='text-[#333] uppercase tracking-[0.12rem] transition-all py-[5px] px-[15px]
                    rounded-[20px] hover:bg-[#ff4181] hover:text-white' href='/nav'
                    >Contact</Link>
                </li>

                <span
                    className={
                    `${isToggleMenuActive 
                        ? `bg-[#ff4181] translate-y-[60px] w-[30px] h-[30px] shadow-[0,10px,15px,rgba(0,0,0,0.05)] 
                        before:bg-white before:translate-y-0 before:rotate-45 before:scale-[0.6]
                        after:bg-white after:translate-y-0 after:rotate-[-45deg] after:scale-[0.6] 
                        ` 
                        : `delay-500 bg-white delay-0 h-[60px] w-[60px] 
                        before:translate-y-[-5px] before:bg-[#333] before:delay-500
                        after:translate-y-[5px] after:bg-[#333] after:delay-500
                        `} 
                    absolute bg-white rounded-full cursor-pointer transition-all grid place-items-center duration-500
                    before:absolute before:w-[30px] before:h-[3px] before:rounded-[3px] before:transition-[transform,background] before:duration-500
                    after:absolute after:w-[30px] after:h-[3px] after:bg-[#333] after:rounded-[3px] after:translate-y-[5px] after:transition-all after:duration-500
                    `}
                    onClick={() => setIsToggleMenuActive(state => !state)}
                />
            </ul>
        </div>
    );
};

export default Nav;