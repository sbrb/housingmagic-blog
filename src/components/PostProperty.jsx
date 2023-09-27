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

// import React from 'react'

// function PostProperty() {
//   return (
//     <div className="propertyPostSearch">
//       <p>
//         Want to <span style={{ color: "red" }}> Sell / Rent </span>out yourr
//         property for free?
//       </p>
//       <button>Post Property</button>
//     </div>
//   );
// }

// export default PostProperty
