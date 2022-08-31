
// img=""
// img=
// img =
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from 'react-router-dom';
import 'animate.css';

const Banner = () => {
    return (
        <Carousel>
                
                <div className='relative'>
                   
                <img src="https://images.pexels.com/photos/6968984/pexels-photo-6968984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  className='font-bold inset-0 h-full object-cover' />
                <div className='font-bold absolute inset-0 bg-gray-900 bg-opacity-75'></div>
                    <div className='banner-info text-left font-bold absolute lg:top-48  lg:ml-48 md:top-32 md:ml-28 sm:top-20 sm:ml-20 top-8 ml-16'>
                        <h1 className='lg:text-7xl md:text-6xl sm:text-4xl text-xl text-white lg:mb-10 md:mb-10 sm:mb-5 mb-2 animate__animated animate__backInLeft animate__delay-1s'>FIND PERFECT CAR</h1>
                        <p className='lg:text-3xl md:text-2xl sm:text-xl text-sm  text-white  animate__animated animate__backInLeft animate__delay-2s'>Your Trust Our Asset<br/>
                        A car dealership, or vehicle local distribution, is a business
                        </p>
                        <button className='animate__animated animate__backInUp animate__delay-3s'><Link to="/contact" className='btn btn-primary text-white mt-10 hover:bg-white hover:text-primary '>Contact us</Link></button>

                    </div>
                </div>
                <div className='relative'>
                   
                <img src="https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='font-bold inset-0 h-full object-cover'/>
                <div className='font-bold absolute inset-0 bg-gray-900 bg-opacity-75'></div>
                    <div className='banner-info text-left font-bold absolute lg:top-48  lg:ml-48 md:top-32 md:ml-28 sm:top-20 sm:ml-20 top-8 ml-16'>
                        <h1 className='lg:text-7xl md:text-6xl sm:text-4xl text-xl text-white lg:mb-10 md:mb-10 sm:mb-5 mb-2 animate__animated animate__backInLeft animate__delay-1s'>FIND PERFECT CAR</h1>
                        <p className='lg:text-3xl md:text-2xl sm:text-xl text-sm  text-white   animate__animated animate__backInLeft animate__delay-2s'>Your Trust Our Asset<br/>
                        A car dealership, or vehicle local distribution, is a business
                        </p>
                        <button className='animate__animated animate__backInLeft animate__delay-3s'><Link to="/contact" className='btn btn-primary text-white mt-10 hover:bg-white hover:text-primary'>Contact us</Link></button>

                    </div>
                </div>
                <div className='relative'>
                   
                <img src="https://images.pexels.com/photos/9762340/pexels-photo-9762340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='font-bold inset-0 h-full object-cover'/>
                <div className='font-bold absolute inset-0 bg-gray-900 bg-opacity-75'></div>
                    <div className='banner-info text-left font-bold absolute lg:top-48  lg:ml-48 md:top-32 md:ml-28 sm:top-20 sm:ml-20 top-8 ml-16'>
                        <h1 className='lg:text-7xl md:text-6xl sm:text-4xl text-xl text-white lg:mb-10 md:mb-10 sm:mb-5 mb-2 animate__animated animate__backInLeft animate__delay-1s'>FIND PERFECT CAR</h1>
                        <p className='lg:text-3xl md:text-2xl sm:text-xl text-sm  text-white   animate__animated animate__backInLeft animate__delay-2s'>Your Trust Our Asset<br/>
                        A car dealership, or vehicle local distribution, is a business
                        </p>
                        <button className='animate__animated animate__backInLeft animate__delay-3s'><Link to="/contact" className='btn btn-primary text-white mt-10 hover:bg-white hover:text-primary`'>Contact us</Link></button>

                    </div>
                </div>
                
        </Carousel>
    );
};

export default Banner;