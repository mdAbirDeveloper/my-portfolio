import React from 'react';
import bannerImg from './IMG_20200306_131640-removebg-preview.png';

const Banner = () => {
    return (
        <div className='bg-no-repeat'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={bannerImg} className="lg:w-1/3 rounded-full shadow-2xl" alt='' />
                    <div className='mx-8'>
                        <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">Creating Dynamic and Responsive <br/> Web Solutions</h1>
                        <p className="py-6">Welcome to my portfolio! I'm a full-stack developer with 3 of years of experience. I build innovative web solutions with responsive front-end design and robust back-end development. See my recent projects and learn more about my skills and experience</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;