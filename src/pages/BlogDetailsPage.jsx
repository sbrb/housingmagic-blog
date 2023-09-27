import React from 'react'
import BlogDetails from '../components/BlogDetails'
import PostProperty from "../components/PostProperty";
import propertyPostSearchData from "../data/propertyPostSearchData";



function BlogDetailsPage() {
  return (
    <div className="BlogDetailsPage" >
      <img
        src="https://img.staticmb.com/mbcontent/images/uploads/2022/6/centre-table-design.jpg"
        alt=""
      />
      <div className="BlogDetailsPageLower">
        <BlogDetails />
        <div className="categoryPageRight">
          {propertyPostSearchData.map((postSearch, index) => (
            <PostProperty key={index} postSearch={postSearch} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogDetailsPage;
