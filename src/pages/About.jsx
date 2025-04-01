import React from 'react';

const About = () => {
    return (
        <div class="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
    <header class="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
        <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div class="flex items-center justify-between">
                <div class="flex flex-shrink-0">
                    <a href="#" title="BakerStreet" class="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-secondary focus:ring-primary">
                        <img class="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo.svg" alt="BakerStreet" />
                    </a>
                </div>

                <div class="md:hidden">
                    <button type="button" class="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                <div class="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
                    <a href="#" title="" class="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"> Courses </a>
                </div>
            </div>
        </div>
    </header>

    <div class="absolute inset-0">
        <img class="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/hero/3/background.png" alt="" />
    </div>

    <div class="relative">
        <div class="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div class="w-full lg:w-2/3 xl:w-1/2">
                <h1 class="font-sans text-base font-normal tracking-tight text-white text-opacity-70">Master the basics of baking</h1>
                <p class="mt-6 tracking-tighter text-white">
                    <span class="font-sans font-normal text-7xl">The road to the</span><br />
                    <span class="font-serif italic font-normal text-8xl">perfect loaf</span>
                </p>
                <p class="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu penatibus pellentesque dolor consequat ligula egestas massa gravida. Porttitor venenatis enim praesent.</p>
                <p class="mt-8 font-sans text-xl font-normal text-white">Starting at $9.99/month</p>

                <div class="flex items-center mt-5 space-x-3 sm:space-x-4">
                   

                     
                </div>
            </div>
        </div>
    </div>
</div>

    );
};

export default About;