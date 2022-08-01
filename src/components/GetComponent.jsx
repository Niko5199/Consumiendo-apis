import React, { useEffect, useState } from "react";

const GetComponent = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    async function loadPosts() {
      try {
        const request = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const response = await request.json();
        setPosts(response);
        setStatus("Complete");
      } catch (error) {
        setPosts([]);
        setStatus("Error");
      }
    }
    loadPosts();
  }, []);

  if (status === "loading") return <span>{status}</span>;
  if (status === "Error") return <span>{status}</span>;

  return (
    <div>
      <h1>Posts</h1>
      <section>
        {posts.map((post) => (
          <article key={post.id}>
            {post.id} - {post.title}
          </article>
        ))}
      </section>
    </div>
  );
};

export default GetComponent;
