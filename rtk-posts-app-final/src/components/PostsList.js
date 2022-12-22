import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchPost from "./SearchPost";
import "./Posts.css";
import { fetchPosts } from "../redux/slice/postsSlice";

const PostsList = () => {
  //dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts(100));
  }, []);
  //Get data from store
  const { posts, loading, error } = useSelector((state) => {
    return state.posts;
  });
  return (
    <>
      <SearchPost />
      <div className="posts-list">
        <h1>Total Posts {posts.length}</h1>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2 style={{ color: "red" }}>{error}</h2>
        ) : (
          posts.map((post) => {
            return (
              <div key={post.id} className="post-details">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default PostsList;
