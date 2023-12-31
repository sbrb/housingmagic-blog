import React from "react";
import BlogCategoryCart from "../components/BlogCategoryCart";
import PostProperty from "../components/PostProperty";
import blogData from "../data/blogData";
import propertyPostSearchData from "../data/propertyPostSearchData";

function CategoryPage() {
  return (
    <div className="blogCategoryContainer">
      <div className="categoryPageLeft">
        {blogData.map((blog, index) => (
          <BlogCategoryCart key={index} blog={blog} />
        ))}
      </div>
      <div className="categoryPageRight">
        {propertyPostSearchData.map((postSearch, index) => (
          <PostProperty key={index} postSearch={postSearch} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
