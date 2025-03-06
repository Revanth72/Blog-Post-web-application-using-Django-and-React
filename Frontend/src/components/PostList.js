import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogPost from './BlogPost';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://<YOUR-EC2-IP>/api/posts/')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
