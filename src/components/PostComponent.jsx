import React, { useState } from "react";

const PostComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <h1>Create a new POST</h1>
      <form onSubmit={createPost}>
        <div>
          <label>Titulo</label>
          <input id="title" type="text" name="title" />
        </div>
        <div>
          <label htmlFor="body">Contenido</label>
          <textarea name="body" id="body" cols="30" rows="10"></textarea>
        </div>
        <button disabled={isLoading}>Crear</button>
      </form>
    </div>
  );
};

export default PostComponent;
