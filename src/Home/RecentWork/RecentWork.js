import React from 'react';
import image from './Screenshot (40).png'
import image2 from './Screenshot (41).png'
import image3 from './Screenshot (42).png'
import image4 from './Screenshot (43).png'

const RecentWork = () => {
    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold mt-16 text-green-700'>RecentWork</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 rounded-lg gap-6 my-8 bg-base-300 p-10'>
                <div>
                    <img className='h-36 '  alt='' src={image}></img>
                    <h4 className='text-md font-bold text-green-600'> <a href="https://doctors-portal-7e5df.web.app/" alt>Make A website for Doctors Portal</a> </h4>
                </div>
                <div className=''>
                    <img className='h-36' alt='' src={image2}></img>
                    <h4 className='text-md font-bold text-green-600'><a href="https://dragon-news-e4d61.web.app/" alt>Make A website for International News</a></h4>
                </div>

                <div className=''>
                    <img className='h-36' alt='' src={image3}></img>
                    <h4 className='text-md font-bold text-green-600'><a href="https://jerin-s-parlour-e93df.web.app/" alt>Make A website for Beauty Parlour</a></h4>
                </div>
                
                <div className=''>
                    <img className='h-36' alt='' src={image4}></img>
                    <h4 className='text-md font-bold text-green-600'><a href="https://ubiquitous-lamington-ada578.netlify.app/" alt>Make A website for E-commerce</a></h4>
                </div>
                
            </div>
        </div>
    );
};

export default RecentWork;