import React from 'react'
import ProjectCard from './ProjectCard'

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
        description: "For when you have an amount of data that's way too big, but you still want to use it all!",
        image: "/project/datagen.jpg",
        tag: ["All", "Python"],
    },
];

const Projects = () => {
    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4'>
                My Projects
            </h2>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgURL={project.image}
                    />
                ))}
            </div>
        </>
    )
}

export default Projects