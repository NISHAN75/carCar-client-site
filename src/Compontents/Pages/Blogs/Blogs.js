import React, { useEffect, useState } from "react";

import Blog from "../Blog/Blog";


const Blogs = () => {
  const [blogs,setBlogs]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/blog')
    .then(res => res.json())
    .then(data =>setBlogs(data))
  },[])
  return (
    <section>
      <h4 className="text-5xl font-bold text-primary my-5 text-center">Our Blogs</h4>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mx-10 my-10">
      
      {
        blogs.map(blog=> <Blog blog={blog} key={blog._id}></Blog>)
      }
    </div>
    </section>
  );
};

export default Blogs;
