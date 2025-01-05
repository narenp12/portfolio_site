import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet" />



export default function Post1() {
    return (
        <main className="bg-gray-800 text-white p-6 font-sans flex flex-col items-center justify-center min-h-screen pt-20">
            <Navbar />
            {/* Main Project Title */}
            <h1 className="mt-20 text-4xl font-semibold text-center text-white mb-6">Why I made this website</h1>

            {/* Personal Role */}
            <p className="text-lg text-white mb-4 text-center italic">
                A 2024 Winter Break project I finished up right before the new year
            </p>

            {/* Project Tagline */}
            <p className="text-xl text-white mb-8 text-center">
                My own little place to post into the void
            </p>

            {/* Project Image */}
            <div className="mb-8 flex justify-center">
                <img
                    src="/blog/website_image.png"
                    alt="Picture of my website (screenshot)"
                    className="w-full h-72 object-cover mb-4 rounded-lg"
                />
            </div>


            {/* Post */}
            <section className="mb-12 w-full max-w-4xl mx-auto font-sans">
                <p className="text-lg mb-6">
                    I can't tell you how many times I've looked up cool people on Google and they've had their own little nice website with fancy logos and nice looking pages and all that.
                    To be frank, that was probably the main reason I wanted my own website.
                    I too wanted a shiny place that was all about me.
                </p>

                <p className="text-lg mb-6">
                    Despite having this in mind for quite a while, I never actually tried to make one of my own until recently.
                    For the longest time I had assumed even getting a domain name would mean shelling out money for eternity just to have a site I could send to people.
                    Who knew how many people would actually look at it, let alone view the other content?
                </p>

                <p className="text-lg mb-6">
                    Ultimately, what pushed me to really try it out was wanting to just have one place where I could show all my friends and family the little things I did in my free time that I thought were cool.
                    At the end of the day, even if no one else viewed this website organically, I would be happy just having a place with a nice little write up for everything I've tinkered with.
                    The sudden motivation for this website really came in late September 2024 on a random weekend. That's what led me to creating my first website using netlify.
                    I didn't exactly know how to do web development with code directly, so I just used their visual editor and a website template and called it a day.
                    One night later, I had a fully functional website with posts I could show everyone. However, the longer I had the site, the more discontent I became with it. I almost felt like I cheated to get a website that wasn't even cohesive and didn't represent what I wanted my website to say about me.
                    With a busy school quarter, I pushed it down the line with the intention of eventually creating a site I was proud of.
                </p>

                <p className="text-lg mb-6">
                    I hadn't used Javascript and CSS in an extremely long time. Not since one of my first projects ever that I created in high school, a basketball player comparison tool that scraped data from the web, had I attempted to make a whole website of my own.
                    Even then, it was barely something that could be called a website. It was a bare bones page with the project tool as the main focus and the website was basically just a place to have it.
                    I wanted to use Next.js because I'd joined a club in the fall that created really nice looking visuals and animations with that as their main language. I had no idea what it was, but with the help of YouTube videos and the internet, I was able to cobble up a functional website I can say I am proud of.
                </p>

                <p className="text-lg mb-6">
                    Is my website amazing and impressive? I don't know, but I'm glad I have my own little place to put things that I want to see. The experience of creating the site was a blast, and I hope to mess around with a lot more in the future, so I can add even more to this website.
                    If anyone stumbles across this in the future and would like to give me feedback on my website (or even my code) I would greatly appreciate it. This is something I hope to continue working on for the rest of my life and I hope 2025 brings more things for me to be proud of. Here's to the future.
                </p>

                <p className="text-base mb-6">
                    Thank you for reading my rambling justification for the existence of this website. If you think I could make this better (I definitely can) I would love to hear new ideas.
                </p>

                <p>
                    You can check out the code I used to create it <Link
                        href="https://github.com/narenp12/portfolio_site"
                        className="text-white underline"
                    > here! </Link>
                </p>

            </section>
        </main>
    );
}