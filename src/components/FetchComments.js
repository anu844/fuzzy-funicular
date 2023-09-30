import React, { useEffect, useState } from "react";

const FetchComments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const randomComment1 = Math.floor(Math.random() * 100) +1
        const randomComment2 = Math.floor(Math.random() * 100) +1

        const response1 = await fetch( `https://jsonplaceholder.typicode.com/comments/${randomComment1}`);
        const comment1 = await response1.json();

        const response2 = await fetch(`https://jsonplaceholder.typicode.com/comments/${randomComment2}`);
        const comment2 = await response2.json();

        setComments([comment1, comment2]);
      } catch (error) {
        console.error("Error fetching comments: ", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h2>Suvalised kommentaarid JSONPlaceholder-ist:</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchComments;
