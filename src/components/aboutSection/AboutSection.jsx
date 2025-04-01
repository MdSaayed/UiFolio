import React from 'react';
import { Link } from 'react-router-dom';
import SubTitle from '../subTitle/SubTitle';
import Title from '../title/Title';
import Description from '../description/Description';

const AboutSection = () => {
    return (
        <section>
            <div class="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <img className='mx-auto w-full' src="/assets/img/about-1.jpg" alt=""/>
                    </div>
                    <div>
                        <SubTitle text="About Me" />
                        <Title text="Creative Independent Web Developer based in USA" />
                        <Description text="I'm web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration." />

                        <div>
                            <Link className='btn-secondary' to='portfolio'>Download CV</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;