import React from 'react';
import Link from 'next/link'

const Form = () => {
    return (
        <div className='h-full grid place-content-center bg-[#23242a]'>
            <div className='relative w-[380px] h-[420px] bg-[#1c1c1c] rounded-lg
                before:w-[380px] before:h-[420px] before:absolute before:-left-1/2 before:-top-1/2
                before:bg-[linear-gradient(0deg,transparent,transparent,#45f3ff,#45f3ff,#45f3ff)] before:animate-spin-slow
                before:origin-bottom-right before:duration-1000 overflow-hidden

                after:w-[380px] after:h-[420px] after:absolute after:-left-1/2 after:-top-1/2
                after:bg-[linear-gradient(0deg,transparent,transparent,#45f3ff,#45f3ff,#45f3ff)] after:animate-spin-slow
                after:origin-bottom-right after:duration-1000 after:[animation-delay:-3s]
            '>
                <span className='absolute inset-0
                    before:w-[380px] before:h-[420px] before:absolute before:-left-1/2 before:-top-1/2
                before:bg-[linear-gradient(0deg,transparent,transparent,#ff2770,#ff2770,#ff2770)] before:animate-spin-slow
                before:origin-bottom-right before:duration-1000 before:[animation-delay:-1.5s]

                after:w-[380px] after:h-[420px] after:absolute after:-left-1/2 after:-top-1/2
                after:bg-[linear-gradient(0deg,transparent,transparent,#ff2770,#ff2770,#ff2770)] after:animate-spin-slow
                after:origin-bottom-right after:duration-1000 after:[animation-delay:-4.5s]
                '/>
                <form className='absolute inset-1 bg-[#222] py-[50px] px-10 z-[2] flex flex-col'>
                    <h2 className='text-white font-medium tracking-[0.1em] text-center'>Sign in</h2>
                    <div className='w-[300px] mt-[35px] relative'>
                        <input
                            className='w-full pt-5 px-[10px] pb-[10px] bg-transparent outline-none shadow-none
                            text-[#23242a] tracking-wider transition z-10 peer relative'
                            type="text" required
                        />
                        <span className='absolute left-0 pt-5 px-[0px] pb-[10px] pointer-events-none tracking-wider
                        text-[#8f8f8f] transition-all duration-500
                        peer-valid:text-[0.75rem] peer-valid:text-white peer-valid:translate-y-[-34px]
                        peer-focus:text-[0.75rem] peer-focus:text-white peer-focus:translate-y-[-34px]
                        '
                        >Username</span>
                        <i className='absolute w-full left-0 bottom-0 transition-all pointer-events-none h-[2px]
                            bg-white rounded overflow-hidden duration-500
                            peer-focus:h-[44px] peer-valid:h-[44px]
                        '></i>
                    </div>
                    <div className='w-[300px] mt-[35px] relative'>
                        <input
                            className='w-full pt-5 px-[10px] pb-[10px] bg-transparent outline-none shadow-none
                            text-[#23242a] tracking-wider transition z-10 peer relative'
                            type="password" required
                        />
                        <span className='absolute left-0 pt-5 px-[0px] pb-[10px] pointer-events-none tracking-wider
                        text-[#8f8f8f] transition-all duration-500
                        peer-valid:text-[0.75rem] peer-valid:text-white peer-valid:translate-y-[-34px]
                        peer-focus:text-[0.75rem] peer-focus:text-white peer-focus:translate-y-[-34px]
                        '
                        >Password</span>
                        <i className='absolute w-full left-0 bottom-0 transition-all pointer-events-none h-[2px]
                            bg-white rounded overflow-hidden duration-500
                            peer-focus:h-[44px] peer-valid:h-[44px]
                        '></i>
                    </div>
                    <div className='flex justify-between my-[10px] text-[#8f8f8f]'>
                        <Link className='hover:text-white transition' href='/form'>Forgot password</Link>
                        <Link className='text-white' href='/form'>Sign up</Link>
                    </div>
                    <input className='outline-none py-[9px] px-[25px] text-[#23242a] bg-white text-[0.9em] text-semibold
                        rounded w-[100px] mt-[10px] active:opacity-80'
                           type="submit"
                           value='Login'
                    />
                </form>
            </div>
        </div>
    );
};

export default Form;