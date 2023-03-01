import React from 'react';

export const Experience = () => {

    const a = {
        x: 1
    }

    // @ts-ignore
    a.y = a

    // console.log(JSON.stringify(a))

    const arr = [1, 2, 3, 4, 5]
    delete arr[1]

    let str = 'hello!!world'

    const isLetters = (c: string) => c.toLowerCase() !== c.toUpperCase()
    // @ts-ignore
    const letters = [...str].filter(isLetters)
    // @ts-ignore
    const result = [...str].map(c => isLetters(c) ? letters.pop() : c).join('')
    console.log(result)

    return (
        <section id="experience" className='pb-6'>
            <h2 className='text-3xl text-center mb-6 relative before:absolute before:-bottom-2
            before:h-1 before:w-10 before:rounded before:bg-[#0b0a0a] dark:before:bg-before-dark dark:text-title-dark'>Experience</h2>

            <div className='grid gap-6 pr-6'>

                <div className='relative flex'>
                    <div>
                        <span className='w-4 h-4 rounded-full block bg-[#707070] relative translate-y-1/2 mr-4'/>
                        <span className='block w-[2px] bg-[#707070] h-[120%] translate-x-[7px]'/>
                    </div>

                    <div className='grid gap-2'>
                        <h3 className='text-xl'>Junior React Developer</h3>
                        <span
                            className='text-light dark:text-base-dark'>From Oct 2021 to March 2022 (6 months) | AXCEL</span>
                        <p className='text-light'>
                            Create web pages, use a variety of markup languages. Maintain the website regularly
                            and make web page improvements. Work with a team of Web Designers, Back-end
                            Designers.
                        </p>
                    </div>
                </div>

                <div className='relative flex'>
                    <div>
                        <span className='w-4 h-4 rounded-full block bg-[#707070] relative translate-y-1/2 mr-4'/>
                        <span className='block w-[2px] bg-[#707070] h-[120%] translate-x-[7px]'/>
                    </div>

                    <div className='grid gap-2'>
                        <h3 className='text-xl'>Compliance Officer</h3>
                        <span className='text-light dark:text-base-dark'>From Oct 2017 to Nov 2020 | CEX.IO</span>
                        <p className='text-light'>
                            Verification of new clients. Double check approved users for malicious behaviour.
                        </p>
                    </div>
                </div>

                <div className='relative flex'>
                    <div>
                        <span className='w-4 h-4 rounded-full block bg-[#707070] relative translate-y-1/2 mr-4'/>
                        <span className='block w-[2px] bg-[#707070] h-[112%] sm:h-[120%] translate-x-[7px]'/>
                    </div>

                    <div className='grid gap-2'>
                        <h3 className='text-xl'>JavaScript Developer</h3>
                        <span className='text-light dark:text-base-dark'>From Nov 2020 to May 2022 (1 year 6 months) | CEX.IO</span>
                        <p className='text-light'>Program internal verification system. Analyze users' data and create
                            new rules for verification system.</p>
                    </div>
                </div>


                <div className='relative flex'>
                    <div>
                        <span className='w-4 h-4 rounded-full block bg-[#707070] relative translate-y-1/2 mr-4'/>
                    </div>

                    <div className='grid gap-2'>
                        <h3 className='text-xl'>React Developer</h3>
                        <span
                            className='text-light dark:text-base-dark'>From Jun 2022 to Dec 2022 (7 months) | CEX.IO</span>
                        <p className='text-light'>
                            Maintain and refactor old code. Create a lot of public landing pages using JavaScript,
                            React,
                            SCSS. Add new features.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};