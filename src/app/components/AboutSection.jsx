import React from 'react'
import Image from 'next/image'

const AboutSection = () => {
    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="public/datafest.JPG" width={500} height={500} />
                <div>
                    <h2>About Me</h2>
                    <p>
                        I’m a senior studying Statistics and Data Science at the University of California, Los Angeles. 
                        I have a strong passion for statistics, data science, machine learning, and deep learning. 
                        My goal is to keep learning about these exciting fields (and really anything I can learn) for as long as I can. 
                        This website is a fun little side thing for me to post about what I'm doing and just generally things I like!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection