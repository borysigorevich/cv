import React from 'react';

export const Profile = () => {
    return (
        <section id='profile' className='text-center md:text-start pb-6'>
            <h2 className="text-3xl mb-6 relative before:absolute before:-bottom-2
            before:h-1 before:w-10 before:rounded before:bg-[#0b0a0a] dark:before:bg-before-dark dark:text-title-dark">Profile</h2>
            <p className='dark:text-base-dark'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos
                iusto neque soluta
                voluptate voluptatibus.
            </p>
        </section>
    );
};