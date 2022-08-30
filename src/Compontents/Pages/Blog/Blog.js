import React from "react";
import { Link } from "react-router-dom";
import { IconName } from "react-icons/fa";


const Blog = ({ blog }) => {
    
  const { name, short, img, _id} = blog;
  console.log(blog);
  return (
    <div class="card w-96 bg-base-100 shadow-xl relative">
      <div class="card-body">
        <figure>
          <img src={img} alt="Shoes" className="rounded-lg" />
        </figure>
        <div className="blog-info">
          <h2 class="card-title text-primary">{name}</h2>
          <p>{short}</p>
          <div class="card-actions mt-10">
            <button className="btn btn-primary absolute bottom-0 left-0 w-full   hover:text-white mt-3">
              <Link to={`/blog/${_id}`}>Explore More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
