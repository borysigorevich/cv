import React from 'react';

export const Languages = () => {
    return (
        <section className='pb-6'>
            <h2 className='text-3xl text-center mb-6 relative before:absolute before:-bottom-2
            before:h-1 before:w-10 before:rounded before:bg-[#0b0a0a] dark:before:bg-before-dark dark:text-title-dark'>Languages</h2>

            <div className='grid gap-4 text-light text-lg grid-cols-3 text-center'>
                <div className='dark:text-base-dark'>Ukrainian</div>
                <div className='dark:text-base-dark'>English</div>
                <div className='dark:text-base-dark'>Russian</div>
            </div>
        </section>
    );
};