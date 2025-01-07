import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />

export default function Project1() {
    return (
        <main className=" bg-rose-800 text-white p-6 font-sans flex flex-col items-center justify-center min-h-screen pt-20">
            <Navbar />
            {/* Main Project Title */}
            <h1 className="mt-20 text-4xl font-semibold text-center text-white mb-6">Autoencoder for Anomaly Detection</h1>

            {/* Personal Role */}
            <p className="text-lg text-white mb-4 text-center italic">
                Done as a ML / Data Science Intern @ Halliburton
            </p>

            {/* Project Tagline */}
            <p className="text-xl text-white mb-8 text-center">
                How do we identify potentially dangerous situations and act quickly in real time?
            </p>

            {/* Project Image */}
            <div className="mb-8 flex justify-center">
                <img
                    src="/project/Halliburton-Truck.jpg"
                    alt="Autoencoder for Anomaly Detection - Image of a truck"
                    className="w-full h-72 object-cover mb-4 rounded-lg"
                />
            </div>


            {/* Problem Statement */}
            <section className="mb-12 w-full max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-white mb-6 text-center">The Problem</h2>
                <p className="text-lg mb-6">
                    We all know equipment maintenance is important for saving money, reducing waste, and preventing accidents as a result of equipment malfunctions.
                </p>

                <p className="text-lg mb-6">
                    In this case, we want to make sure company trucks function properly by monitoring the input data from the sensors on each truck.
                    <span className="font-semibold"> How do we set up an alert system so that when the sensor has abnormal readings, we can immediately take a look at the equipment to prevent accidents?</span>
                </p>

                <p className="text-lg">
                    Traditional statistical methods have many definitions for an outlier we could use to identify those readings.
                    However, with so much sensor data, it might be better to use a larger scale ML model to identify these in real time so prompt action can be taken.
                </p>
            </section>

            {/* Intro to AE Section */}
            <section className="mb-12 w-full max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-white mb-6 text-center">Idea: Reconstruction Autoencoder</h2>
                <p className="text-lg mb-6">
                    This is where the <span className="font-semibold">reconstruction autoencoder</span> comes into play.
                </p>
                <p className="text-lg">
                    We can use this machine learning model to identify anomalies in real time!
                    Before delving into how we created it, let’s break down what this means.
                </p>
            </section>

            {/* What is it */}
            <section className="mb-12 w-full max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-white mb-6 text-center">What even is an autoencoder?</h2>
                <p className="text-lg mb-6">
                    An autoencoder is a type of neural network that takes in a large amount of high dimensional data and compresses the information into a smaller representation.
                    After this, it expands the compressed representation into a representation of equal size to the original.
                </p>
                <p className="text-lg">
                    There are <span className="font-semibold">two main parts</span> of the autoencoder:
                </p>
                {/* AE Image */}
                <div className="mb-8 flex justify-center">
                    <img
                        src="/project/ae.png"
                        alt="Autoencoder diagram image"
                        className="w-full h-full object-cover mb-4 rounded-lg"
                    />
                </div>


            </section>

            {/* Encoder */}
            <section className="mb-12 w-full max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-white mb-6 text-center">Encoder</h2>
                <p className="text-lg mb-6">
                    This is where we compress the input data into a smaller representation.
                </p>
                <p className="text-lg">
                    For example, say we have a dataset with 500,000 dimensions. We create a representation of the data with only 300 dimensions.
                </p>
            </section>

            {/* Decoder */}
            <section className="mb-12 w-full max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-white mb-6 text-center">Decoder</h2>
                <p className="text-lg mb-6">
                    This is where we take the compressed representation and reconstruct the original data.
                </p>
                <p className="text-lg">
                    In this example, we would take the 300 dimension representation and create a dataset with 500,000 dimensions (just like the original set).
                </p>
            </section>

            {/* Why compress */}
            <section className="w-full max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-white mb-6 text-center">Why do we compress the data just to make one that's the same size as the original?</h2>
                <p className="text-lg mb-6">
                    It might seem useless to compress the info and then make it just as big. Isn’t the compressed version just a worse version of the original?
                    Compression means some data is lost so it can’t be as good, right?
                </p>
                <p className="text-lg mb-12">
                    The true reason is that the eventual output isn’t the important part.
                    Instead, the <span className="font-semibold">compressed version of the data</span> (also called the bottleneck) is what is important.
                </p>
            </section>

            {/* How does compression help? */}
            <section className="mb-12 w-full max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-white mb-6 text-center">How does the compressed data help us?</h2>
                <p className="text-lg mb-6">
                    Ideally, the compression forces the neural network to preserve as much important information as possible.
                    We make the bottleneck larger again so we can compare the original data against the compressed version.
                    We can then use this for the anomaly detection portion of our task.
                </p>
                <p className="text-lg">
                    We plot the reconstructed output and the original output and look for large differences between the two.
                    If there is a big difference and the reconstruction contains the most important info, then we can identify anomalies by looking at where the differences are.
                    This is because if the most important information isn’t enough to estimate a value accurately, then it is likely not a typical value.
                </p>
            </section>

            {/* What NN to use? */}
            <section className="mb-12 w-full max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-white mb-6 text-center">What neural network architecture do we use?</h2>
                <p className="text-lg mb-6">
                    Now that we know what an autoencoder is, we know that it uses a neural network to accomplish its goal.
                    There are many different types of neural networks though, how do we choose the best type?
                </p>
                <p className="text-lg">
                    The three main types (ANNs, CNNs, and RNNs) are all commonly used in ML models. One type of RNN, the LSTM, is especially popular for time series forecasting (what we are doing) because it mitigates the vanishing gradient issue of the default RNN while also allowing us to use momentum to preserve short term <span className="italic">and</span> long term trends in predictions.
                    For our purposes though, with our large amount of data, an LSTM isn’t viable because of speed limitations and computational efficiency reasons.
                </p>
            </section>

            {/* Transformer intro */}
            <section className="mb-12 w-full max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-white mb-6 text-center">Introducing the Transformer</h2>
                <p className="text-lg mb-6">
                    If you’ve been anywhere near the ML community, I’m sure you’ve heard of the transformer. It’s being used everywhere in the Natural Language Processing (NLP) arena, being the basis of state of the art models like ChatGPT and Google’s BERT.
                </p>
                <p className="text-lg mb-6">
                    Its origin comes from the famous <Link
                        href="https://arxiv.org/abs/1706.03762"
                        className="text-white underline"
                    >
                        "Attention Is All You Need” paper
                    </Link>, which revolutionized the world of NLP but now is being used to transform the world of time series forecasting. (If you want to learn more about how the transformer works and the original paper is a bit too abstract, <Link
                        href="https://nlp.seas.harvard.edu/annotated-transformer/"
                        className="text-white underline"
                    >
                        here is an annotated explanation
                    </Link> from Harvard NLP that breaks it down further)
                </p>

                {/* Transformer diagram */}
                <div className="mb-8 flex justify-center">
                    <img
                        src="/project/transformer_1.png"
                        alt="Transformer diagram image"
                        className="w-full h-full object-cover mb-4 rounded-lg"
                    />
                </div>

                <p className="text-lg mb-6">
                    The characteristics of the transformer itself, such as its attention mechanism that we believe would better capture long and short term dependencies, seem to be more than suitable for our task. With its speed and ability to handle gigantic amounts of data, we decided this was the best basis for creating our time series forecasting ML model.
                </p>

                {/* Final Product */}
                <section className="w-full max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-white mb-6 text-center">Final Product</h2>
                    <p className="text-lg mb-6">
                        From implementing this transformer-based autoencoder and training it on a large amount of sensor readings, we were able to produce a prediction model that identified outliers in a computationally efficient way. There remained another big question to solve, though.
                        Even with the training and validation process, to be entirely sure we identify outliers correctly we need to train on <span className="italic">as much</span> data as possible to reduce the likelihood of false positives.
                    </p>
                    <p className="text-lg mb-6">
                        With such large amounts of data that can’t fit in memory alone, how can we use that much for training? Think about ChatGPT for example, how do you train on the whole internet if a machine can’t come close to storing all of it?
                        This leads us to the second project, <Link
                            href={"/project2"}
                            className="text-white underline"
                        >
                            the Data Generator
                        </Link>, which aims to resolve this issue!
                    </p>
                    <p>
                        If you would like to see the code I used for this project or have any questions, feel free to contact me at any of the places listed in my contact section!
                    </p>
                </section>
            </section>
        </main>
    );
}