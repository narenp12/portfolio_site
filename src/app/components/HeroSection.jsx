"use client"
import React from 'react'
import Image from 'next/image'

import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-5 place-self-center text-center sm:text-left'>
                    <h1 className="text-white mb-4 sm:text-5xl lg:text-6xl font-extrabold:">
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-violet-600'>Hi, I'm Naren!</span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'I am a student',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'I am an aspiring data scientist',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-white lg:text-xl mb-6 text-base sm:text-lg">
                        Welcome to my website!
                    </p>
                    <div>
                        <button className='px-6 py-3 rounded-full w-full mr-4 bg-blue-500 hover:bg-blue-700 text-white sm:w-fit'>Contact Me</button>
                        <button className='px-6 py-3 rounded-full w-full bg-blue-500 hover:bg-blue-700 text-white sm:w-fit'>My Resume</button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className="square-full bg-[#181818] w-[150px] h-[215px] relative">
                        <Image
                            src="/me2.png"
                            alt="Image of me"
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;