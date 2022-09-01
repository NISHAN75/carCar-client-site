import 'animate.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegPaperPlane } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
AOS.init();



const Product = ({product}) => {
    
    const {img,description,name,price,quantity,_id,supplier}=product;
    return (
        <div  data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false" >
            <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name:<span className='text-primary'>{name}</span></h2>
                <p>{description}</p>
                <p className='font-bold'>supplier: <span className='text-primary ml-2'>{supplier}</span></p>
                <p className='font-bold text-left'>Price:<span className='ml-1'>${price}</span></p>
                <p className='font-bold'>Quantity:<span className='ml-1'>{quantity}</span></p>
                <div className="card-actions">
                <button className="btn btn-primary text-white hover:bg-white hover:text-primary mt-3 animate__animated animate__backInUp animate__delay-3s"><Link className='flex' to={`/inventory/${_id}`}>Update <span className='ml-2'><FaRegPaperPlane/></span></Link></button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Product;