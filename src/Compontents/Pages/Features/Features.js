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

const Features = () => {
  return (
    <div className="mt-20">
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
