import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Features.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
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

const Features = () => {
  return (
    <div className="mt-20"data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-anchor-placement="top-center"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
      <h5 className="text-5xl font-bold text-primary  mx-20">
        LATEST RELEASED CAR MODELS
      </h5>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid lg:grid-cols-3 grid-cols-1 my-8 mx-20 gap-5">
            <div className="card w-full bg-pirmary shadow-xl relative ">
              <figure>
                <img
                  src="https://images.pexels.com/photos/2127017/pexels-photo-2127017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-pirmary">
                  Avalon Hybrid Built For The Endless Weekend.
                </h2>
                <p>
                  Norwegian airline website named Widerøe generated a tremendous
                  amount of buzz and a lot of very happy customers this weekend.
                </p>
                <div className="card-actions mt-8">
                  <button className="btn btn-primary absolute bottom-0 left-0 w-full hover:text-white">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-full bg-pirmary shadow-xl relative ">
              <figure>
                <img
                  src="https://images.pexels.com/photos/452099/pexels-photo-452099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-pirmary">
                  Avalon Hybrid Built For The Endless Weekend.
                </h2>
                <p>
                  Norwegian airline website named Widerøe generated a tremendous
                  amount of buzz and a lot of very happy customers this weekend.
                </p>
                <div className="card-actions mt-8">
                  <button className="btn btn-primary absolute bottom-0 left-0 w-full hover:text-white">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-full bg-pirmary shadow-xl relative ">
              <figure>
                <img
                  src="https://images.pexels.com/photos/9661421/pexels-photo-9661421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-pirmary">
                  Avalon Hybrid Built For The Endless Weekend.
                </h2>
                <p>
                  Norwegian airline website named Widerøe generated a tremendous
                  amount of buzz and a lot of very happy customers this weekend.
                </p>
                <div className="card-actions mt-8">
                  <button className="btn btn-primary absolute bottom-0 left-0 w-full hover:text-white">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid lg:grid-cols-3 grid-cols-1 my-8 mx-20 gap-5">
            <div className="card w-full bg-pirmary shadow-xl relative ">
              <figure>
                <img
                  src="https://images.pexels.com/photos/2127037/pexels-photo-2127037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-pirmary">
                  Avalon Hybrid Built For The Endless Weekend.
                </h2>
                <p>
                  Norwegian airline website named Widerøe generated a tremendous
                  amount of buzz and a lot of very happy customers this weekend.
                </p>
                <div className="card-actions mt-8">
                  <button className="btn btn-primary absolute bottom-0 left-0 w-full hover:text-white">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-full bg-pirmary shadow-xl relative ">
              <figure>
                <img
                  src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-pirmary">
                  Avalon Hybrid Built For The Endless Weekend.
                </h2>
                <p>
                  Norwegian airline website named Widerøe generated a tremendous
                  amount of buzz and a lot of very happy customers this weekend.
                </p>
                <div className="card-actions mt-8">
                  <button className="btn btn-primary absolute bottom-0 left-0 w-full hover:text-white">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-full bg-pirmary shadow-xl relative ">
              <figure>
                <img
                  src="https://images.pexels.com/photos/248687/pexels-photo-248687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-pirmary">
                  Avalon Hybrid Built For The Endless Weekend.
                </h2>
                <p>
                  Norwegian airline website named Widerøe generated a tremendous
                  amount of buzz and a lot of very happy customers this weekend.
                </p>
                <div className="card-actions mt-8">
                  <button className="btn btn-primary absolute bottom-0 left-0 w-full hover:text-white">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid lg:grid-cols-3 grid-cols-1 my-8 mx-20 gap-5">
            <div className="card w-full bg-pirmary shadow-xl relative ">
              <figure>
                <img
                  src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-pirmary">
                  Avalon Hybrid Built For The Endless Weekend.
                </h2>
                <p>
                  Norwegian airline website named Widerøe generated a tremendous
                  amount of buzz and a lot of very happy customers this weekend.
                </p>
                <div className="card-actions mt-8">
                  <button className="btn btn-primary absolute bottom-0 left-0 w-full hover:text-white">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-full bg-pirmary shadow-xl relative ">
              <figure>
                <img
                  src="https://images.pexels.com/photos/4914160/pexels-photo-4914160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-pirmary">
                  Avalon Hybrid Built For The Endless Weekend.
                </h2>
                <p>
                  Norwegian airline website named Widerøe generated a tremendous
                  amount of buzz and a lot of very happy customers this weekend.
                </p>
                <div className="card-actions mt-8">
                  <button className="btn btn-primary absolute bottom-0 left-0 w-full hover:text-white">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-full bg-pirmary shadow-xl relative ">
              <figure>
                <img
                  src="https://images.pexels.com/photos/6060938/pexels-photo-6060938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-pirmary">
                  Avalon Hybrid Built For The Endless Weekend.
                </h2>
                <p>
                  Norwegian airline website named Widerøe generated a tremendous
                  amount of buzz and a lot of very happy customers this weekend.
                </p>
                <div className="card-actions mt-8">
                  <button className="btn btn-primary absolute bottom-0 left-0 w-full hover:text-white">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid lg:grid-cols-3 grid-cols-1 my-8 mx-20 gap-5">
            <div className="card w-full bg-pirmary shadow-xl relative ">
              <figure>
                <img
                  src="https://images.pexels.com/photos/9764731/pexels-photo-9764731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-pirmary">
                  Avalon Hybrid Built For The Endless Weekend.
                </h2>
                <p>
                  Norwegian airline website named Widerøe generated a tremendous
                  amount of buzz and a lot of very happy customers this weekend.
                </p>
                <div className="card-actions mt-8">
                  <button className="btn btn-primary absolute bottom-0 left-0 w-full hover:text-white">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-full bg-pirmary shadow-xl relative ">
              <figure>
                <img
                  src="https://images.pexels.com/photos/9708425/pexels-photo-9708425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-pirmary">
                  Avalon Hybrid Built For The Endless Weekend.
                </h2>
                <p>
                  Norwegian airline website named Widerøe generated a tremendous
                  amount of buzz and a lot of very happy customers this weekend.
                </p>
                <div className="card-actions mt-8">
                  <button className="btn btn-primary absolute bottom-0 left-0 w-full hover:text-white">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-full bg-pirmary shadow-xl relative ">
              <figure>
                <img
                  src="https://images.pexels.com/photos/7545456/pexels-photo-7545456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-pirmary">
                  Avalon Hybrid Built For The Endless Weekend.
                </h2>
                <p>
                  Norwegian airline website named Widerøe generated a tremendous
                  amount of buzz and a lot of very happy customers this weekend.
                </p>
                <div className="card-actions mt-8">
                  <button className="btn btn-primary absolute bottom-0 left-0 w-full hover:text-white">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid lg:grid-cols-3 grid-cols-1 my-8 mx-20 gap-5">
            <div className="card w-full bg-pirmary shadow-xl relative ">
              <figure>
                <img
                  src="https://images.pexels.com/photos/7537127/pexels-photo-7537127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-pirmary">
                  Avalon Hybrid Built For The Endless Weekend.
                </h2>
                <p>
                  Norwegian airline website named Widerøe generated a tremendous
                  amount of buzz and a lot of very happy customers this weekend.
                </p>
                <div className="card-actions mt-8">
                  <button className="btn btn-primary absolute bottom-0 left-0 w-full hover:text-white">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-full bg-pirmary shadow-xl relative ">
              <figure>
                <img
                  src="https://images.pexels.com/photos/8664335/pexels-photo-8664335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-pirmary">
                  Avalon Hybrid Built For The Endless Weekend.
                </h2>
                <p>
                  Norwegian airline website named Widerøe generated a tremendous
                  amount of buzz and a lot of very happy customers this weekend.
                </p>
                <div className="card-actions mt-8">
                  <button className="btn btn-primary absolute bottom-0 left-0 w-full hover:text-white">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-full bg-pirmary shadow-xl relative ">
              <figure>
                <img
                  src="https://images.pexels.com/photos/5804283/pexels-photo-5804283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-pirmary">
                  Avalon Hybrid Built For The Endless Weekend.
                </h2>
                <p>
                  Norwegian airline website named Widerøe generated a tremendous
                  amount of buzz and a lot of very happy customers this weekend.
                </p>
                <div className="card-actions mt-8">
                  <button className="btn btn-primary absolute bottom-0 left-0 w-full hover:text-white">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid lg:grid-cols-3 grid-cols-1 my-8 mx-20 gap-5">
            <div className="card w-full bg-pirmary shadow-xl relative ">
              <figure>
                <img
                  src="https://images.pexels.com/photos/12399883/pexels-photo-12399883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-pirmary">
                  Avalon Hybrid Built For The Endless Weekend.
                </h2>
                <p>
                  Norwegian airline website named Widerøe generated a tremendous
                  amount of buzz and a lot of very happy customers this weekend.
                </p>
                <div className="card-actions mt-8">
                  <button className="btn btn-primary absolute bottom-0 left-0 w-full hover:text-white">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-full bg-pirmary shadow-xl relative ">
              <figure>
                <img
                  src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-pirmary">
                  Avalon Hybrid Built For The Endless Weekend.
                </h2>
                <p>
                  Norwegian airline website named Widerøe generated a tremendous
                  amount of buzz and a lot of very happy customers this weekend.
                </p>
                <div className="card-actions mt-8">
                  <button className="btn btn-primary absolute bottom-0 left-0 w-full hover:text-white">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-full bg-pirmary shadow-xl relative ">
              <figure>
                <img
                  src="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold text-pirmary">
                  Avalon Hybrid Built For The Endless Weekend.
                </h2>
                <p>
                  Norwegian airline website named Widerøe generated a tremendous
                  amount of buzz and a lot of very happy customers this weekend.
                </p>
                <div className="card-actions mt-8">
                  <button className="btn btn-primary absolute bottom-0 left-0 w-full hover:text-white">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Features;
