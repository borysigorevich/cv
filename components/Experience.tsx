import React from 'react';

export const Experience = () => {
    return (
        <section id="experience" className='pb-6'>
            <h2 className='text-3xl text-center mb-6 relative before:absolute before:-bottom-2
            before:h-1 before:w-10 before:rounded before:bg-[#0b0a0a]'>Experience</h2>

            <div className='grid gap-6'>

                <div className='relative flex'>
                    <div>
                        <span className='w-4 h-4 rounded-full block bg-[#707070] relative translate-y-1/2 mr-4'/>
                        <span className='block w-[2px] bg-[#707070] h-[120%] translate-x-[7px]'/>
                    </div>

                    <div className='grid gap-2'>
                        <h3 className='text-2xl'>Junior React Developer</h3>
                        <span className='text-light'>From 2021 to 2022 | CEX.IO</span>
                        <p className='text-light'>Some Description</p>
                    </div>
                </div>

                <div className='relative flex'>
                    <div>
                        <span className='w-4 h-4 rounded-full block bg-[#707070] relative translate-y-1/2 mr-4'/>
                        <span className='block w-[2px] bg-[#707070] h-[120%] translate-x-[7px]'/>
                    </div>

                    <div className='grid gap-2'>
                        <h3 className='text-2xl'>Junior React Developer</h3>
                        <span className='text-light'>From 2021 to 2022 | CEX.IO</span>
                        <p className='text-light'>Some Description</p>
                    </div>
                </div>

                <div className='relative flex'>
                    <div>
                        <span className='w-4 h-4 rounded-full block bg-[#707070] relative translate-y-1/2 mr-4'/>
                        <span className='block w-[2px] bg-[#707070] h-[120%] translate-x-[7px]'/>
                    </div>

                    <div className='grid gap-2'>
                        <h3 className='text-2xl'>Junior React Developer</h3>
                        <span className='text-light'>From 2021 to 2022 | CEX.IO</span>
                        <p className='text-light'>Some Description</p>
                    </div>
                </div>


                <div className='relative flex'>
                    <div>
                        <span className='w-4 h-4 rounded-full block bg-[#707070] relative translate-y-1/2 mr-4'/>
                        {/*<span className='block w-[2px] bg-[#707070] h-[110%] translate-x-[7px]'/>*/}
                    </div>

                    <div className='grid gap-2'>
                        <h3 className='text-2xl'>Junior React Developer</h3>
                        <span className='text-light'>From 2021 to 2022 | CEX.IO</span>
                        <p className='text-light'>Some Description</p>
                    </div>
                </div>
            </div>
        </section>
    );
};