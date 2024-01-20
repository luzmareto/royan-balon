import React from "react";
import { blog } from "../Data";
const Blog = () => {
  return (
    <>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          good <span>event</span>
        </h1>

        <div class="box-container">
        {blog.map((item, index) => (
  <div class="box" key={index * Math.random()}>
    <div class="image">
      <img src={item.img} alt="" />
    </div>
    <div class="content">
      <a href="#" class="title">
        {item.quote}
      </a>
      <span>by {item.author} / {item.date}</span>
      <p>
      {item.description}
      </p>
      <a href="#" class="btn">
        {/* read more */}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
