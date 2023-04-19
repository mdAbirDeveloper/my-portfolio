import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Price = () => {
    const navigate = useNavigate();
    const hanldeOrder = () =>{
        navigate('/contect')
    }
    
    return (
        <div>
            <h2 className='text-center text-5xl divider text-green-500 font-bold mt-32'>Price Plane</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10  bg-slate-700 rounded-xl my-14'>
                <div className='bg-slate-900 text-white py-14 my-5 mx-5 rounded-2xl'>
                    <h4 className='text-2xl font-bold mb-3'>Starter Price</h4>
                    <h4 className='text-2xl font-bold text-white'>$ 5<small className='text-sm'>/hour</small></h4>
                    <p className=' font-bold my-3'>Ui design</p>
                    <p className='text-stone-400 my-3'>web development</p>
                    <p className='text-stone-400 my-3'>Logo design</p>
                    <p className='text-stone-400 my-3'>SEO optimization</p>
                    <p className='text-stone-400 my-3'>WordPress integration</p>
                    <button onClick={hanldeOrder} type="" className='btn btn-secondary'>Order Now <FaArrowRight></FaArrowRight></button>
                </div>
                <div className='bg-slate-900 text-white py-14 my-5 mx-5 rounded-2xl'>
                    <h4 className='text-2xl font-bold mb-3'>medium quality</h4>
                    <h4 className='text-2xl font-bold text-white'>$ 8<small className='text-sm'>/hour</small></h4>
                    <p className='font-bold my-3'>Ui design</p>
                    <p className='font-bold my-3'>web development</p>
                    <p className='font-bold my-3'>Logo design</p>
                    <p className='text-stone-400 my-3'>SEO optimization</p>
                    <p className='text-stone-400 my-3'>WordPress integration</p>
                    <button onClick={hanldeOrder} type="" className='btn btn-secondary'>Order Now <FaArrowRight></FaArrowRight></button>
                </div>
                <div className='bg-slate-900 text-white py-14 my-5 mx-5 rounded-2xl'>
                    <h4 className='text-2xl font-bold mb-3'>premium quality</h4>
                    <h4 className='text-2xl font-bold text-white'>$ 15<small className='text-sm'>/hour</small></h4>
                    <p className='my-3 font-bold'>Ui design</p>
                    <p className='my-3 font-bold'>web development</p>
                    <p className='my-3 font-bold'>Logo design</p>
                    <p className='my-3 font-bold'>SEO optimization</p>
                    <p className='my-3 font-bold'>WordPress integration</p>
                    <button onClick={hanldeOrder} type="" className='btn btn-secondary'>Order Now <FaArrowRight></FaArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default Price;