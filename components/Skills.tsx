import React from 'react';

const skillName = 'relative before:w-[5px] before:h-[5px] before:bg-[#403a3a] ' +
    'before:rounded-full before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2'

export const Skills = () => {
    return (
        <section className='pb-6'>
            <h2 className='text-3xl text-center md:text-start mb-6 relative before:absolute before:-bottom-2
            before:h-1 before:w-10 before:rounded before:bg-[#0b0a0a]'>Skills</h2>

            {/*<div className='text-light'>*/}
            <div className='grid grid-cols-2 gap-3 text-light px-6 gap-x-16'>
                <div className={skillName}>
                    HTML
                </div>
                <div className={skillName}>CSS</div>
                <div className={skillName}>JavaScript</div>
                <div className={skillName}>React</div>
                <div className={skillName}>Redux</div>
                <div className={skillName}>Next</div>
                <div className={skillName}>Mui 5</div>
                <div className={skillName}>Tailwind</div>
                <div className={skillName}>Three.js</div>
            </div>

            {/*<div className='grid gap-3'>*/}
            {/*    <div>React</div>*/}
            {/*    <div>Redux</div>*/}
            {/*    <div>Next</div>*/}
            {/*    <div>Mui 5</div>*/}
            {/*    <div>Tailwind</div>*/}
            {/*    <div>Three.js</div>*/}
            {/*</div>*/}
            {/*</div>*/}
        </section>
    );
};