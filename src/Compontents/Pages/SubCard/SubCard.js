import React from "react";
import { FaAngellist ,FaGitter ,FaCarCrash ,FaCar} from "react-icons/fa";
import 'animate.css';

const SubCard = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-28 mx-10 gap-8 ">
      <div class="card w-full bg-base-100 shadow-xl animate__animated animate__backInLeft animate__delay-2s">
        <FaAngellist className="text-primary text-8xl font-bold mx-auto"></FaAngellist>
        <div class="card-body items-center text-center">
          <h2 class="card-title font-bold text-xl">Results Driven</h2>
          <p>It seems there is something wrong with my eyes because I find it difficult to take them off you.</p>
        </div>
      </div>
      <div class="card w-full bg-base-100 shadow-xl animate__animated animate__backInLeft animate__delay-2.5s">
        <FaCarCrash className="text-primary text-8xl font-bold mx-auto"></FaCarCrash>
        <div class="card-body items-center text-center">
          <h2 class="card-title font-bold text-xl">Proven Technology</h2>
          <p>What is the difference between a Lamborghini and a boner? I don't have a boner right now.</p>
        </div>
      </div>
      <div class="card w-full bg-base-100 shadow-xl animate__animated animate__backInRight animate__delay-2s">
        <FaGitter className="text-primary text-8xl font-bold mx-auto"></FaGitter>
        <div class="card-body items-center text-center">
          <h2 class="card-title font-bold text-xl">Winning Culture</h2>
          <p>Your outfit is so daling. Do you know how it can look better? Rumpled in a bunch on mysteries that haven't been solved.</p>
        </div>
      </div>
      <div class="card w-full bg-base-100 shadow-xl animate__animated animate__backInRight animate__delay-2.5s">
        <FaCar className="text-primary text-8xl font-bold mx-auto"></FaCar>
        <div class="card-body items-center text-center">
          <h2 class="card-title font-bold text-xl">Smart Driven</h2>
          <p>You have such a banging body, the last time I had such a body to myself, I was stuffing it in my basement.</p>
        </div>
      </div>
    </div>
  );
};

export default SubCard;
