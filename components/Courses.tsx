import React from 'react';
import Link from 'next/link'

export const Courses = () => {
    return (
        <section className='pb-6'>
            <h2 className='text-3xl text-center mb-6 relative before:absolute before:-bottom-2
            before:h-1 before:w-10 before:rounded before:bg-[#0b0a0a] dark:text-title-dark dark:before:bg-before-dark'>Courses</h2>

            <div className='grid gap-6'>

                <div className='grid gap-2'>
                    <h3 className='text-2xl'>JavaScript (Advanced Course)</h3>
                    <Link
                        target='_blank'
                        href="https://itea.ua/ru/"
                        className='underline text-light dark:text-base-dark'
                    >ITEA</Link>
                    <p className='text-light'>Sep 2021 — Dec 2021</p>
                </div>

                <div className='grid gap-2'>
                    <h3 className='text-2xl'>The Complete 2021 Web Development Bootcamp</h3>
                    <Link
                        target='_blank'
                        href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
                        className='underline text-light dark:text-base-dark'
                    >UDEMY</Link>
                    <p className='text-light'>Jun 2021 — Oct 2021</p>
                </div>

                <div className='grid gap-2'>
                    <h3 className='text-2xl'>Web Development Course</h3>
                    <Link
                        target='_blank'
                        href="https://training.epam.ua/#!/Home?lang=ua&City=-1"
                        className='underline text-light dark:text-base-dark'
                    >EPAM</Link>
                    <p className='text-light'>Oct 2021 — Feb 2022</p>
                </div>
            </div>
        </section>
    );
};