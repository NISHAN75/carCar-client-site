import React from "react";
import { Link } from "react-router-dom";
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

const SubBanner = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-col-1 my-28 mx-10 gap-10" data-aos="zoom-in-up"  data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false">
      <div className="img-area mt-3 " >
        <img src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
      </div>
      <div className="sub-info" >
        <h3 className="text-4xl font-bold text-primary">
          ADAPTIVE DRIVE HEAD UP DISPLAY
        </h3>
        <h4 className="text-xl font-bold mt-5">
          MATTE BLACK CHEVY C7 CORVETTE STINGRAY ON CUSTOM 21IN FORGIATO QUINTO
          WHEELS.
        </h4>
        <p className="mt-8">
          Arear view camera and lane departure warning. This car has 6 airbags
          fitted for your protection. It has front & rear power windows, central
          locking and 2nd row split folding seats. Family life is made easy in
          this 2016 Jaguar XF. This car has Bluetooth connectivity, side curtain
          airbags, subwoofer, trailer sway control, sports pedals and heads up
          information display. This car has forward collision alert/warning.
          This car comes with enough seats for 5. You can relax.
        </p>
        <button className="btn btn-primary mt-3 text-white hover:bg-white hover:text-primary">
          <Link to="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
};

export default SubBanner;
