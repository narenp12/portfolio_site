import React from 'react'
import BlogPost from './BlogPost';

const blogData = [
    {
        id: 1,
        title: "How I ended up wanting to be a data scientist",
        description: "My first post!",
        image: "/blog/general-fos-hero-2.png",
        tag: ["All", "Life"],
    },
    {
        id: 2,
        title: "Why I made this website",
        description: "A winter break side project long in the making (idea wise at least)",
        image: "/blog/website_image.png",
        tag: ["All", "Life"],
    },
];

const Blog = () => {
    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-12 mb-4' id="blog">
                My Blog
            </h2>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {blogData.map((post) => (
                    <BlogPost
                        key={post.id}
                        title={post.title}
                        description={post.description}
                        imgURL={post.image}
                        id={post.id}
                    />
                ))}
            </div>
        </>
    )
}

export default Blog