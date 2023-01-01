import React from 'react';

export const Education = () => {
    return (
        <section id='education' className='pb-6'>
            <h2 className='text-center md:text-start text-3xl mb-6 relative before:absolute before:-bottom-2
            before:h-1 before:w-10 before:rounded before:bg-[#0b0a0a] dark:before:bg-before-dark dark:text-title-dark'>Education</h2>
            <div className='grid gap-2 justify-center text-center md:text-start'>
                <h3 className='text-xl dark:text-title-dark'>Master Of Finance And Credits</h3>
                <p className='text-light dark:text-base-dark'>Chernihiv national university of technology</p>
                <p className='text-light'>Sep 2011 - Jan 2016</p>
            </div>
        </section>
    );
};