import React from 'react';

function BlogPost({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPost;
