import React, {ChangeEvent, useState} from 'react';

// import {Earh} from 'react-icons/io'
import {RiEarthLine} from 'react-icons/ri'
import {AiOutlineCamera, AiOutlinePicture} from 'react-icons/ai'


type RadioType = 'web' | 'graphics' | 'photography'

const Slider = () => {
    const [radio, setRadio] = useState<RadioType>('web')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRadio(event.target.id as RadioType)
    }

    const calculatePosition = () => {
        switch (radio) {
            case 'web':
                return 'left-0'
            case 'graphics':
                return 'left-[-100vw]'
            case 'photography':
                return 'left-[-200vw]'
        }
    }

    return (
        <div className='h-full w-full bg-black relative overflow-hidden'>
            <div className='h-full'>
                <input
                    defaultChecked
                    onChange={handleChange}
                    className='invisible hidden'
                    type="radio"
                    id='web'
                    name='slider'
                />
                <input
                    onChange={handleChange}
                    className='invisible hidden'
                    type="radio"
                    id='graphics'
                    name='slider'
                />
                <input
                    onChange={handleChange}
                    className='invisible hidden'
                    type="radio"
                    id='photography'
                    name='slider'
                />

                <div className='absolute bottom-[50px] left-1/2 -translate-x-1/2 flex gap-[10px] z-50'>
                    <label
                        className={`${radio === 'web' ? 'opacity-100 w-[50px]' : 'opacity-50 w-5'} h-5 rounded-full 
                        bg-white transition-all duration-500 cursor-pointer`}
                        htmlFor="web"
                    ></label>
                    <label
                        className={`${radio === 'graphics' ? 'opacity-100 w-[50px]' : 'opacity-50 w-5'} h-5 rounded-full 
                        bg-white transition-all duration-500 cursor-pointer`}
                        htmlFor="graphics"
                    ></label>
                    <label
                        className={`${radio === 'photography' ? 'opacity-100 w-[50px]' : 'opacity-50 w-5'} h-5 rounded-full 
                        bg-white transition-all duration-500 cursor-pointer`}
                        htmlFor="photography"
                    ></label>
                </div>

                <div className={`${calculatePosition()} w-[300vw] relative flex transition-all duration-500 h-full`}>
                    <div className='w-screen h-full relative flex items-center justify-center select-none p-10
                        bg-gradient-to-r from-[#43cea2] to-[#185a92]
                    '>
                        <div className='flex items-center justify-center flex-col gap-[10px]'>
                            <RiEarthLine className='text-[12rem] text-white'/>
                            <h2 className='text-[3rem]'>Web Development</h2>
                            <p className='text-[1.2rem] font-bold text-center'>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Atque omnis praesentium quasi
                                saepe vero, vitae?</p>
                            <button className='py-[15px] px-[35px] bg-white uppercase tracking-[0.05rem] text-[#333]
                            mt-[10px] font-semibold rounded-[40px] hover:tracking-[0.2rem] transition-all duration-500'
                            >Learn more
                            </button>
                        </div>
                    </div>
                    <div className='w-screen h-full relative flex items-center justify-center select-none p-10
                        bg-gradient-to-r from-[#ff4e50] to-[#f9d423]
                    '>
                        <div className='flex items-center justify-center flex-col gap-[10px]'>
                            <AiOutlineCamera className='text-[12rem] text-white'/>
                            <h2 className='text-[3rem]'>Graphic Design</h2>
                            <p className='text-[1.2rem] font-bold text-center'>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Atque omnis praesentium quasi
                                saepe vero, vitae?</p>
                            <button className='py-[15px] px-[35px] bg-white uppercase tracking-[0.05rem] text-[#333]
                            mt-[10px] font-semibold rounded-[40px] hover:tracking-[0.2rem] transition-all duration-500'
                            >Learn more
                            </button>
                        </div>
                    </div>
                    <div className='w-screen h-full relative flex items-center justify-center select-none p-10
                        bg-gradient-to-r from-[#9d50bb] to-[#6e48aa]
                    '>
                        <div className='flex items-center justify-center flex-col gap-[10px]'>
                            <AiOutlinePicture className='text-[12rem] text-white'/>
                            <h2 className='text-[3rem]'>Photography</h2>
                            <p className='text-[1.2rem] font-bold text-center'>Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Atque omnis praesentium quasi
                                saepe vero, vitae?</p>
                            <button className='py-[15px] px-[35px] bg-white uppercase tracking-[0.05rem] text-[#333]
                            mt-[10px] font-semibold rounded-[40px] hover:tracking-[0.2rem] transition-all duration-500'
                            >Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;