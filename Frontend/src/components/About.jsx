import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col items-center h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl w-full text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    About Our eBook Store
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-600">
                    Welcome to our eBook store, your number one source for all things eBooks. We're dedicated to giving you the very best of eBooks, with a focus on quality, variety, and customer service.
                </p>
                <p className="mt-4 text-lg leading-6 text-gray-600">
                    Founded in 2023, our store has come a long way from its beginnings. When we first started out, our passion for books drove us to start this online store so that we can offer you the best collection of eBooks. We now serve customers all over the world and are thrilled that we're able to turn our passion into our website.
                </p>
                <p className="mt-4 text-lg leading-6 text-gray-600">
                    We hope you enjoy our eBooks as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                </p>
                <p className="mt-4 text-lg leading-6 text-gray-600">
                    Sincerely,
                    <br />
                    The eBook Store Team
                </p>
            </div>
        </div>
    );
};

export default About;
