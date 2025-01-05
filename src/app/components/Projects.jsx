"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';

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
];

const Projects = () => {
    const [tag, setTag] = useState("All")

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => {
        project.tag.includes(tag)
    })

    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4' id="projects">
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} /> 
                <ProjectTag onClick={handleTagChange} name="Python" isSelected={tag === "Python"} />
            </div>

            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {projectsData.map((project) => (
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