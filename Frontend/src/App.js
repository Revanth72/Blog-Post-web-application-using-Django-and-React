import React from 'react';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <div className="App">
      <h1>Blog Post Application</h1>
      <CreatePost />
      <PostList />
    </div>
  );
}

export default App;
