"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import Link from 'next/link';

const projectsData = [
    {
        id: 1,
        title: "Autoencoder for Anomaly Detection",
        description: "How do we identify potentially dangerous situations and act quickly in real time?",
        image: "/project/Halliburton-Truck.jpg",
        tag: ["All", "Python"],
    },
    {
        id: 2,
        title: "Data Generator",
        description: "With such large amounts of data that can’t fit in memory alone, how can we use all of it for training?",
        image: "/project/datagen.jpg",
        tag: ["All", "Python"],
    },
    /*{
        id: 3,
        title: "Are Romantic Comedies Dead?: A Comprehensive Text Analysis",
        description: "The decline of the rom-com is an incredibly popular sentiment, but can we quantify it statistically?",
        image: "/project/proj3/stock-photo-red-hearts-background.jpg",
        tag: ["All", "Python", "R"],
    }*/
];

const Projects = () => {
    const [tag, setTag] = useState("All")

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => {
        return project.tag.includes(tag)
    })

    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4' id="projects">
                My Projects
            </h2>
            <h3 className='text-center text-2xl text-white mt-4 mb-4' id="projects">
                Check out my blog for more information
            </h3>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} /> 
                <ProjectTag onClick={handleTagChange} name="Python" isSelected={tag === "Python"} />
                <ProjectTag onClick={handleTagChange} name="R" isSelected={tag === "R"} />
            </div>

            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgURL={project.image}
                        id={project.id}
                    />
                ))}
            </div>
        </>
    )
}

export default Projects