import React from 'react';
import { Link } from 'react-router-dom';
import AboutSection from '../components/aboutSection/AboutSection';

const Home = () => {


    return (
        <>
         <section className="relative bg-[url('/assets/img/hero/hero-bg-3.png')] bg-no-repeat bg-cover bg-[right_-80px_bottom] md:bg-[right_-80px_bottom] lg:bg-right-bottom before:absolute before:inset-0 before:bg-[#5F9EA0] before:opacity-50 md:before:opacity-70 lg:before:hidden">
                <div className="container h-[80vh] lg:h-screen">
                    <div className="flex justify-center h-full flex-col">
                        <div className="space-y-4 md:space-y-8 z-20">
                            <h1 className='text-4xl md:text-7xl text-slate-900 font-black tracking-[6px] space-y-4 md:space-y-8 flex flex-col'>
                                <span className='text-stroke stroke-slate-900 uppercase'>My Portfolio</span>
                                <span>Web Developer</span>
                                {/* <span>UI/UX Designer.</span> */}
                            </h1>
                            <p className='text-slate-900 text-4xl font-bold'>based in USA.</p>
                            <div>
                                <Link className='btn' to='portfolio'>View Work</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <AboutSection />
        </>
    );
};

export default Home;

// relative bg-[url('/assets/img/hero/hero-bg-3.png')] bg-no-repeat bg-cover bg-[right_-150px_bottom] md:bg-[right_-140px_bottom] lg:bg-[right_-150px_bottom] xl:bg-right-bottom before:absolute before:inset-0 before:bg-[#5F9EA0] before:opacity-50 md:before:opacity-70 lg:before:hidden