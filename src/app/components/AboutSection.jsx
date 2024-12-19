"use client";
import React, { startTransition, useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const tab_data = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='font-medium list-disc'>
                <li>R</li>
                <li>Python</li>
                <li>PostgreSQL (learning)</li>
                <li>Monte Carlo Methods and Markov Chains</li>
                <li>Numerical Optimization</li>
                <li>Regression and Classification</li>
                <li>Unsupervised and Supervised Learning techniques</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='font-med list-disc'>
                <li>
                    University of California, Los Angeles (UCLA)
                    <div className="text-gray-300">Bachelor of Science - Statistics and Data Science</div>
                    <div className="text-sm text-gray-400">2021 - 2025</div>
                </li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='font-medium list-disc'>
                <li className=''>
                    Halliburton
                    <div className="text-gray-300">Data Science and Machine Learning Intern</div>
                    <div className="text-sm text-gray-400">June 2024 - Sep 2024</div>
                </li>
                <li className='py-2'>
                    Neoage Services
                    <div className="text-gray-300">Data Analyst Intern</div>
                    <div className="text-sm text-gray-400">June 2023 - Aug 2023</div>
                </li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <figure>
                    <Image src="/datafest.JPG" alt="Me at the 2024 UCLA x ASA DataFest" width={500} height={500} />
                    <figcaption
                        className='mx-auto'
                        style={{ marginTop: '15px' }}
                    >
                        Me at the 2024 UCLA x ASA DataFest. I wonder if you can see where I am.
                    </figcaption>
                </figure>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base md:text-lg mb-4'>
                        I’m a senior studying Statistics and Data Science at the University of California, Los Angeles.
                        I have a strong passion for statistics, data science, machine learning, and deep learning.
                        My goal is to keep learning about these exciting fields (and really anything I can learn) for as long as I can.
                        This website is a fun little side thing for me to post about what I'm doing and just generally things I like!
                    </p>
                    <div className='flex flex-row-met-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
                    </div>
                    <div className='mt-8'>
                        {tab_data.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection