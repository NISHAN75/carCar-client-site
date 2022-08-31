import 'animate.css';
import React from "react";
import { FaAngellist, FaCar, FaCarCrash, FaGitter } from "react-icons/fa";
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

const SubCard = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-28 mx-10 gap-8 " 
     data-aos="zoom-in-left" data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    >
      <div className="card p-5 w-full bg-primary shadow-xl">
        <FaAngellist className="text-white text-8xl font-bold mx-auto"></FaAngellist>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-xl text-white">Results Driven</h2>
          <p className='text-white'>It seems there is something wrong with my eyes because I find it difficult to take them off you.</p>
        </div>
      </div>
      <div className="card p-5 w-full bg-primary shadow-xl">
        <FaCarCrash className="text-white text-8xl font-bold mx-auto"></FaCarCrash>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-xl text-white">Proven Technology</h2>
          <p className='text-white'>What is the difference between a Lamborghini and a boner? I don't have a boner right now.</p>
        </div>
      </div>
      <div className="card p-5 w-full bg-primary shadow-xl">
        <FaGitter className="text-white text-8xl font-bold mx-auto"></FaGitter>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-xl text-white">Winning Culture</h2>
          <p className='text-white'>Your outfit is so daling. Do you know how it can look better? Rumpled in a bunch on mysteries that haven't been solved.</p>
        </div>
      </div>
      <div className="card w-full bg-primary shadow-xl">
        <FaCar className="text-white text-8xl font-bold mx-auto"></FaCar>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-xl text-white">Smart Driven</h2>
          <p className='text-white'>You have such a banging body, the last time I had such a body to myself, I was stuffing it in my basement.</p>
        </div>
      </div>
    </div>
  );
};

export default SubCard;
