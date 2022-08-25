
// img=""
// img=
// img =
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Carousel>
                <div className='relative'>
                   
                <img src="https://images.pexels.com/photos/831475/pexels-photo-831475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <div className='banner-info text-left font-bold absolute top-48 ml-32'>
                        <h1 className='text-8xl text-white mb-10'>FIND PERFECT CAR</h1>
                        <p className='text-4xl text-white'>Your Trust Our Asset<br/>
                        A car dealership, or vehicle local distribution, is a business
                        </p>
                        <button ><Link to="/contact" className='btn btn-primary  mt-10 hover:bg-white hover:text-black'>Contact us</Link></button>

                    </div>
                </div>
                <div className='relative'>
                   
                <img src="https://images.pexels.com/photos/6968984/pexels-photo-6968984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <div className='banner-info text-left font-bold absolute top-48 ml-32'>
                        <h1 className='text-8xl text-white mb-10'>FIND PERFECT CAR</h1>
                        <p className='text-4xl text-white'>Your Trust Our Asset<br/>
                        A car dealership, or vehicle local distribution, is a business
                        </p>
                        <button ><Link to="/contact" className='btn btn-primary  mt-10 hover:bg-white hover:text-black'>Contact us</Link></button>

                    </div>
                </div>
                <div className='relative'>
                   
                <img src="https://images.pexels.com/photos/9762340/pexels-photo-9762340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <div className='banner-info text-left font-bold absolute top-48 ml-32'>
                        <h1 className='text-8xl text-white mb-10'>FIND PERFECT CAR</h1>
                        <p className='text-4xl text-white'>Your Trust Our Asset<br/>
                        A car dealership, or vehicle local distribution, is a business
                        </p>
                        <button ><Link to="/contact" className='btn btn-primary  mt-10 hover:bg-white hover:text-black'>Contact us</Link></button>

                    </div>
                </div>
                
        </Carousel>
    );
};

export default Banner;