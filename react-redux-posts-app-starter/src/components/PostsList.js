import React, { useEffect } from "react";
import SearchPost from "./SearchPost";
import "./Posts.css";

const PostsList = () => {
  return (
    <>
      <SearchPost />
      <div className="posts-list">
        <h1>Total Posts 100</h1>
        <div className="post-details">
          <h3>Post Title 1</h3>
          <p>Post body 1</p>
        </div>
      </div>
    </>
  );
};

export default PostsList;
