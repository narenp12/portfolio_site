import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />

export default function Project3() {
    return (
        <main className="bg-pink-600 text-white p-6 font-sans flex flex-col items-center justify-center min-h-screen pt-20">
            <Navbar />
            {/* Main Project Title */}
            <h1 className="mt-20 text-4xl font-semibold text-center text-white mb-6">Are Rom-Coms Dead?</h1>

            {/* Personal Role */}
            <p className="text-lg text-white mb-4 text-center italic">
                A Comprehensive Text Analysis
            </p>

            {/* Project Tagline */}
            <p className="text-xl text-white mb-8 text-center">
            The decline of the rom-com is an incredibly popular sentiment, but can we quantify it statistically?
            </p>

            {/* Project Image */}
            <div className="mb-8 flex justify-center">
                <img
                    src="/project/proj3/stock-photo-red-hearts-background.jpg"
                    alt="Data Generator"
                    className="w-full h-72 object-cover mb-4 rounded-lg"
                />
            </div>

            {/* Problem Statement */}
            <section className="mb-12 w-full max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-white mb-6 text-center">The Context</h2>
                <p className="text-lg mb-6">
                    Everyone knows the rom-com is dead. At least, that's what the prevailing line of thought is. Every time a new romantic comedy hits the streets fresh out of Hollywood, we can't help but compare them to the established classics of the past.
                </p>

                <p className="text-lg mb-6">
                Movies like When Harry met Sally are held in a tier of their own, something recent releases can't even touch. Is this difference in perception and the commonly accepted decline of the romantic comedy something we can understand from a statistical approach?
                </p>

                <p className="text-lg mb-6">
                    To answer this question, we apply text mining and Natural Language Processing techniques to figure out what we can <em>really</em> see in how romantic comedies have changed.
                </p>
            </section>

            {/* Flowchart Section */}
            <section className="mb-12 w-full max-w-4xl text-center">
                <h2 className="text-3xl font-semibold text-white mb-6">Flowchart</h2>
                <img
                    src="/neural-network-training-flowchart (1).svg"  // Replace with your actual flowchart image path
                    alt="Flowchart"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg mx-auto"
                />
            </section>

            {/* Basic Structure */}
            <section className="mb-12 w-full max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-white mb-6 text-center">Basic Structure</h2>
                <p className="text-lg mb-6">
                    The basic framework I used for creating this is from a <Link
                        href="https://stanford.edu/~shervine/blog/keras-how-to-generate-data-on-the-fly"
                        className="text-white underline"
                    >
                        blog post from Stanford and MIT grad students Afshine Amidi and Shervine Amidi.
                    </Link> This framework uses TensorFlow
                    and Keras to split files and create batches of data with a custom DataGenerator class. However, this framework has two main issues:
                </p>
                <ul className="list-decimal text-lg mb-6">
                    <li>The data generator works wonderfully for sizes near that of the testing for this framework (around 65,000 rows), but when scaling to much larger sizes, the performance drops.</li>
                    <li>The framework uses split files with observations but does not show how the data is split. Instead, it shows what is done after the splitting has already been completed.</li>
                </ul>
            </section>

            {/* Using Dask */}
            <section className="mb-12 w-full max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-white mb-6 text-center">Using Dask</h2>
                <p className="text-lg mb-6">
                    Dask is a Python library for parallel computing that helps scale our Pandas-based code to much larger datasets. It essentially stores Pandas dataframes within Pandas dataframes
                    and offers delayed computation to offset computational problems. We can use this for splitting the files (as Dask allows us to load the entire dataset at once) and loading individual
                    IDs in the DataGenerator class. With this, we can handle amounts of up to 1-10 TB (per Dask’s own testing) for our company data.
                </p>
            </section>

            {/* How We Split the Files */}
            <section className="mb-12 w-full max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-white mb-6 text-center">How Do We Split the Files?</h2>
                <p className="text-lg mb-6">
                    While the given framework splits files by single observations, this would simply take up too much storage for much larger datasets, such as the one we have (with millions of rows).
                    Instead, we group observations into much smaller groups, keeping them small enough to not surpass our storage capacity. For my working example, I grouped observations based on the
                    month and day of each timestamp (one file per combination).
                </p>
            </section>

            {/* Final Product */}
            <section className="w-full max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-white mb-6 text-center">Final Product</h2>
                <p className="text-lg mb-6">
                    Based on local testing, our adapted framework was able to handle data more than 10x the size of the original framework! While the upper limit is yet to be found for further testing,
                    the scalability of the tools used to build this generator gives us hope that it can serve as the foundation for a fully functional Data Generator in the future.
                </p>
                <p>
                    If you would like to see the code I used for this project or have any questions, feel free to contact me at any of the places listed in my contact section!
                </p>
            </section>
        </main>
    );
}