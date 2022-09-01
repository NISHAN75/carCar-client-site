import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="relative">
      <img src="https://3kllhk1ibq34qk6sp3bhtox1-wpengine.netdna-ssl.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png" className="w-full h-auto"></img>
      <div className="absolute bottom-0 my-5 flex justify-center items-center w-full">
      <Link to="/"><button className="btn btn-primary text-center text-white hover:text-primary hover:bg-white">Back to Home</button></Link>
      </div>
    
    </div>
  );
};

export default NotFound;
