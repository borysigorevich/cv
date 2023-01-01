import React from 'react';

import {BsHeadphones, BsCurrencyBitcoin} from 'react-icons/bs'
import {IoIosFitness} from 'react-icons/io'

export const Interests = () => {
    return (
        <section>
            <h2 className='text-3xl text-center mb-6 relative before:absolute before:-bottom-2
            before:h-1 before:w-10 before:rounded before:bg-[#0b0a0a] dark:before:bg-before-dark dark:text-title-dark'>Interests</h2>

            <div className='grid gap-3 text-light grid-cols-3'>
                <div className='flex items-center gap-2 flex-col dark:text-base-dark'>
                    <BsHeadphones/> <span>Music</span>
                </div>

                <div className='flex items-center gap-2 flex-col dark:text-base-dark'>
                    <BsCurrencyBitcoin/> <span>Crypto</span>
                </div>

                <div className='flex items-center gap-2 flex-col dark:text-base-dark'>
                    <IoIosFitness/> <span>Sport</span>
                </div>
            </div>
        </section>
    );
};