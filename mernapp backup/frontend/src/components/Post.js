import React from 'react';
export default ({post}) => {
  return (
    <div>
      <h2>{post.title }</h2>
      <p>{ post.body }</p>
       </div>
  );
};
