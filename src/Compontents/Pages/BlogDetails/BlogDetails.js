import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const url = `https://tranquil-wildwood-06731.herokuapp.com/blog/${blogId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <div class="card shadow-xl w-full mx-10 my-10">
      <figure>
        <img src={blog.img} className="w-3/4 rounded-lg" alt="Shoes" />
      </figure>
      <div className="card-body mx-20">
        <div className="blog-info">
        <h2 className="card-title text-primary text-2xl font-bold">{blog.name}</h2><br/>
        <h5 className="text-primary text-xl font-bold">Author:{blog.Author}</h5><br/>
        <p>{blog.message}</p><br/><br/>
        <h2 className="text-primary text-xl font-bold">{blog.name2}</h2><br/>
        <p>{blog.message2}</p><br/><br/>
        <h2 className="text-primary text-xl font-bold">{blog.name3}</h2><br/>
        <p>{blog.message3}</p>

        </div>
        <div className="card-actions ">
          
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
