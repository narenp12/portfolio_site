import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />

export default function Project2() {
    return (
        <main className="bg-cyan-700 text-white p-6 font-sans flex flex-col items-center justify-center min-h-screen pt-20">
            <Navbar />
            {/* Main Project Title */}
            <h1 className="text-4xl font-semibold text-center text-white mb-6">Data Generator</h1>

            {/* Personal Role */}
            <p className="text-lg text-white mb-4 text-center italic">
                Done as a ML / Data Science Intern @ Halliburton
            </p>

            {/* Project Tagline */}
            <p className="text-xl text-white mb-8 text-center">
                For when you have an amount of data that is way too big, but you still want to use it all!
            </p>

            {/* Project Image */}
            <div className="mb-8 flex justify-center">
                <img
                    src="/project/datagen.jpg"
                    alt="Data Generator"
                    className="w-full h-72 object-cover mb-4 rounded-lg"
                />
            </div>

            {/* Problem Statement */}
            <section className="mb-12 w-full max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-white mb-6 text-center">The Problem</h2>
                <p className="text-lg mb-6">
                    When training a machine learning model, you always want to use as much data as possible, right?
                    But what happens when the data available for training is so large that it won't fit into memory?
                </p>

                <p className="text-lg mb-6">
                    With the limitations of machine memory, we often face a challenge: <span className="font-semibold">Should we use as much data as we can and stop there?</span>
                </p>

                <p className="text-lg mb-6">
                    This is where the <span className="font-bold text-cyan-400">Data Generator</span> comes into play.
                </p>

                <p className="text-lg mb-6">
                    Our goal is to create a solution that splits large datasets into manageable chunks, allowing us to create and label small batches of data. This approach allows us to feed the model training data one piece at a time, without overwhelming memory.
                </p>

                <p className="text-lg mb-6">
                    At the same time, we want to track how these data batches are created, so we can ensure accuracy and transparency in the data generation process.
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
                        className="text-white hover:underline"
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
            </section>
        </main>
    );
}