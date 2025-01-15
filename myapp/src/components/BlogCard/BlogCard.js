import React from "react";
import "./BlogCard.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function BlogCard({ title, description, date, time, author }) {
  return (
    <div className="Blog_section">
      <div className="Blogsection_left">
       
      </div>
      <div className="Blogsection_right">
        <h3 className="heading">{title}</h3>
        <p className="subheading">{description}</p>
        <p className="date">{`${date} | ${time}`}</p>
        <div className="Name_section">
          <div className="cirucle"></div>
          <p className="name">{author}</p>
        </div>
        <div className="btn_group">
          <button className="readmore_btn">Read More</button>
          <div className="btn_icon">
            <button className="left_icon">
              <FaChevronLeft />
            </button>
            <button className="right_icon">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
