import React, { useEffect, useState } from "react";

import Blog from "../Blog/Blog";


const Blogs = () => {
  const [blogs,setBlogs]=useState([]);
  useEffect(()=>{
    fetch('https://tranquil-wildwood-06731.herokuapp.com/blog')
    .then(res => res.json())
    .then(data =>setBlogs(data))
  },[])
  return (
    <section className="my-20">
      <h4 className="text-5xl font-bold text-primary my-5 text-center">Our Blogs</h4>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-5 ">
      
      {
        blogs.map(blog=> <Blog blog={blog} key={blog._id}></Blog>)
      }
    </div>
    </section>
  );
};

export default Blogs;
