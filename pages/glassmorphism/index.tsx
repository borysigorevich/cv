import React, {useRef, useEffect} from 'react';
import Image from 'next/image'

import VanillaTilt from 'vanilla-tilt'
import Tilt from 'react-parallax-tilt';


const Glassmorphism = () => {
    const cardRef = useRef<HTMLDivElement | null>(null)

    // useEffect(() => {
    //     VanillaTilt.init(cardRef.current!, {
    //         max: 15,
    //         speed: 100,
    //         glare: true,
    //         transition: true
    //     })
    //
    // }, [])

    return (
        <div className='h-full w-full grid place-content-center relative'>
            <Image
                src='/bg.jpg'
                fill
                alt='bg'
            />
            <Tilt className='[transform-style:preserve-3d]' glareEnable tiltMaxAngleX={15} tiltMaxAngleY={15} transitionSpeed={100}>
                <div className='relative rounded-[20px] [transform-style:preserve-3d] group'>
                    <div
                        className='relative w-[300px] min-h-[400px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px]
                    border border-[rgba(255,255,255,0.5)]
                    border-l-[rgba(255,255,255,0.75)]
                    border-t-[rgba(255,255,255,0.75)]
                    shadow-[0,25px,45px,rgba(0,0,0,0.05)]
                    rounded-[20px] [transform-style:preserver-3d]
                    '
                    >
                    </div>

                    <div
                        className='absolute top-[50px] left-[-30px] w-[100px] h-[100px]
                    bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.75)]
                    border-t-[rgba(255,255,255,0.75)] z-10 backdrop-blur-[10px] rounded-[10px]
                    shadow-[0,25px,45px,rgba(0,0,0,0.05)]
                    '
                        style={{
                            transform: 'translateZ(80px)'
                        }}
                    >
                        <Image
                            className='p-5 transition-opacity opacity-0 duration-500 group-hover:opacity-100'
                            src='/left-quote.png'
                            alt='quote'
                            fill
                        />
                    </div>

                    <div
                        className='absolute right-[60px] top-0  w-[120px] h-[120px] p-[10px]
                    bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.75)]
                    border-t-[rgba(255,255,255,0.75)] z-10 backdrop-blur-[10px] rounded-[10px]
                    shadow-[0,25px,45px,rgba(0,0,0,0.05)]
                    '
                        style={{
                            transform: 'translateZ(120px)'
                        }}
                    >
                        <Image
                            className='p-[10px] transition-opacity opacity-0 duration-500 group-hover:opacity-100 object-cover rounded-[20px]'
                            // src='/img2.jpg'
                            src='/6.jpeg'
                            alt='quote'
                            fill
                        />
                    </div>

                    <div
                        className='absolute right-[0] top-[235px] w-[100%] h-[120px] p-[10px] p-[10px] text-right text-[#644651]
                     z-10 rounded-[10px] text-[2rem] font-semibold transition-all delay-[0.25s] opacity-0 group-hover:top-[135px]
                     group-hover:opacity-100 duration-500
                    '
                        style={{
                            transform: 'translateZ(100px)'
                        }}
                    >
                        <h2>Your name</h2>
                    </div>

                    <div
                        className='absolute right-[-20px] bottom-0  w-[85%] min-h-[200px] p-[10px] flex items-center justify-center
                    bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.5)] border-l-[rgba(255,255,255,0.75)]
                    border-t-[rgba(255,255,255,0.75)] z-10 backdrop-blur-[10px] rounded-[10px] text-center
                    shadow-[0,25px,45px,rgba(0,0,0,0.05)] [transform:translateZ(180px)]'
                    >
                        <p className='relative text-[#644651] text-[0.85rem] opacity-0 transition-opacity delay-500
                    group-hover:opacity-100'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dolor dolorum ipsa laborum
                            laudantium unde?
                        </p>
                    </div>
                </div>
            </Tilt>

        </div>
    );
};

export default Glassmorphism;