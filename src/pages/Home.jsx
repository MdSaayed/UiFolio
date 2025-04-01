import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="bg-[url('/assets/img/hero/hero-bg-1.png')] bg-no-repeat bg-cover">
            <div className="container" >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas numquam earum necessitatibus, et nihil blanditiis est accusamus dolor unde repellendus? Eum dolores earum facere laboriosam pariatur voluptatum aspernatur tempora ipsum iste quasi facilis non odio nemo, necessitatibus ea corporis tenetur laborum ex veritatis amet cupiditate libero alias! Officiis libero, corporis optio eos labore cum officia sunt enim delectus maiores repellat magnam repudiandae omnis nihil aperiam pariatur, incidunt fuga quasi reprehenderit error. Aut cumque ut distinctio placeat similique, possimus odit voluptatum quae minus eveniet veritatis voluptas accusantium nostrum eos ad atque architecto. Laboriosam possimus inventore temporibus asperiores ducimus ut eos aspernatur assumenda similique molestiae, doloremque, quia cupiditate enim esse natus deserunt ad totam, pariatur distinctio. Aspernatur, assumenda sint. Repellendus tempore illum iusto quo, magni voluptatum officiis, repellat provident, deserunt placeat a nostrum? Optio, dolore vero. Et impedit sequi ratione dolorum accusamus eos eum? Magnam nihil sint unde soluta. Ex quos eligendi nam! Optio quidem possimus sapiente quod officia doloremque accusamus porro dolore nemo repellat magnam dolor aspernatur earum eum mollitia unde, eius cupiditate assumenda veniam. Perferendis in, error repellat similique aut illum eos dignissimos minima nulla aspernatur eaque eveniet quod ex? Fugiat similique excepturi fugit velit quidem, dignissimos mollitia reiciendis incidunt.</p>

                {/* <div className="flex justify-center flex-col h-screen">
                    <div className="space-y-8">
                        <h1 className='text-7xl text-black font-black tracking-[6px] space-y-8 flex flex-col'>
                            <span className='text-stroke uppercase'>My Portfolio</span>
                            <span>Web Developer</span>
                            <span>UI/UX Designer.</span>
                        </h1>
                        <p className='text-4xl font-bold'>based in USA.</p>
                        <div>
                            <Link
                                className='btn' 
                                to='portfolio'
                                >View Work</Link>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Home;