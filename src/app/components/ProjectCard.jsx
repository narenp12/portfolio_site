import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const ProjectCard = (imgURL, title, description) => {
    return (
        <div>
            <div className='h-52 md:h-72 rounded-t-xl relative group' style={{ background: 'url(${imgURL})', backgroundSize: "cover" }}>
                <div className='overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-300'>
                    <Link href="/" className='mr-2 h-14 w-14 border-2 relative rounded-full border-gray-200 hover:border-white'>
                    <CodeBracketIcon className='h-10 w-10 text-gray-200 cursor-pointer absolute hover:text-white top-1/2 left-1/2 transform translate-x-1/2 translate-y-1/2'/>
                    </Link>
                    <Link href="/" className='h-14 w-14 border-2 relative rounded-full border-gray-200 hover:border-white'>
                        <EyeIcon className='h-10 w-10 text-gray-200 cursor-pointer absolute hover:text-white top-1/2 left-1/2 transform translate-x-1/2 translate-y-1/2' />
                    </Link>
                </div>

            </div>
            <div className='text-white rounded-b-xl py-6 px-4'>
                <h5 className='font-xl font-semibold mb-2'>{title}</h5>
                <p className='text-gray-200'>description</p>
            </div>
        </div>
    )
}

export default ProjectCard