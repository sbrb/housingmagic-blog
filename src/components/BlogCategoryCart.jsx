import React from "react";

function BlogCategoryCart({ blog }) {
  return (
    <div className="blogCategoryCard">
      <img src={blog.imageUrl} className="blogCategoryCardImg" alt="" />
      <div className="blogCategoryTagDate">
        <div className="blogCategoryCardTag">{blog.category}</div>
        <div className="blogCategoryCardDate">{blog.createdAt}</div>
      </div>
      <h2 className="blogCategoryCardTitle">
        <a href="https://www.housingmagic.com">{blog.title}</a>
      </h2>
    </div>
  );
}

export default BlogCategoryCart;
