import React from "react";
import { connect } from "react-redux";
import Post from "../components/Post";
function PostList({posts}) {
  return (
    <div>
      {posts.map(post => {
        return <Post post={post} />;
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
    mapStateToProps,
  )(PostList);