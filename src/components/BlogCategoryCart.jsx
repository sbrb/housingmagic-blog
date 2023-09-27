import React from "react";

function BlogCategoryCart({ blog }) {
  return (
    <div className="blogCategoryCard">
      <div className="blogCategoryCardImgHolder">
        <img src={blog.imageUrl} className="blogCategoryCardImg" alt="" />
      </div>
      <div className="blogCategoryTagDate">
        <div className="blogCategoryCardTag">{blog.category}</div>
        <div className="blogCategoryCardDate">{blog.createdAt}</div>
      </div>
      <h2 className="blogCategoryCardTitle">
        <a href="https://housingmagic-blog.netlify.app/post">{blog.title}</a>
      </h2>
    </div>
  );
}

export default BlogCategoryCart;
