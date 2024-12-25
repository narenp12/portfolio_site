import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const BlogPost = ({ imgURL, title, description, id }) => {
    return (
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md">
            {/* Background Image */}
            <div
                className="h-52 md:h-72 relative group"
                style={{
                    backgroundImage: `url(${imgURL})`,
                    backgroundSize: 'cover',
                }}
            >
                {/* Overlay with Icons */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300">
                    {/* Eye Icon visible only on hover */}
                    <Link
                        href={`/blog${id}`}  // Correct way to dynamically create the route based on id
                        className="mr-2 h-14 w-14 border-2 rounded-full border-gray-200 hover:border-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                        <EyeIcon className="h-10 w-10 text-gray-200 hover:text-white" />
                    </Link>
                </div>
            </div>

            {/* Title and Description */}
            <div className="bg-gray-900 text-white p-4">
                <h5 className="text-xl font-semibold mb-2">{title || 'Untitled Project'}</h5>
                <p className="text-gray-400">{description || 'No description available.'}</p>
            </div>
        </div>
    );
};

export default BlogPost;