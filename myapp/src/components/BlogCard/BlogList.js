import React from "react";
import BlogCard from "./BlogCard";  
import blogData from "../data/blogData";  

function BlogList() {
  return (
    <div className="blog-container">
      {blogData.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          description={blog.description}
          date={blog.date}
          time={blog.time}
          author={blog.author}
        />
      ))}
    </div>
  );
}

export default BlogList;
