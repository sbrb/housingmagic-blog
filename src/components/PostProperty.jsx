import React from "react";

function PostProperty({ postSearch }) {
  return (
    <div className="propertyPostSearch">
      <h3>{postSearch.title}</h3>
      <button>{postSearch.btnText}</button>
    </div>
  );
}

export default PostProperty;

