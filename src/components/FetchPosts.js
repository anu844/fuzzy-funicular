import React, { useEffect, useState } from "react";

const FetchPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const randomPost1 = Math.floor(Math.random() * 100) +1
        const randomPost2 = Math.floor(Math.random() * 100) +1

        const response1 = await fetch( `https://jsonplaceholder.typicode.com/posts/${randomPost1}`);
        const post1 = await response1.json();

        const response2 = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomPost2}`);
        const post2 = await response2.json();

        setPosts([post1, post2]);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h2>Suvalised postitused JSONPlaceholder-ist:</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchPosts;
