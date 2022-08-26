import React from "react";
import { Link } from "react-router-dom";

const SubBanner = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-col-1 my-28 mx-10 gap-10 ">
      <div className="img-area mt-3 animate__animated animate__bounceInDown animate__delay-5s">
        <img src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
      </div>
      <div className="sub-info animate__animated animate__bounceInUp animate__delay-5s">
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
        <button className="btn btn-primary mt-3 hover:bg-white">
          <Link to="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
};

export default SubBanner;
