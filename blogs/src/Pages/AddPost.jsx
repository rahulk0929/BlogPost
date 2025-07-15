import React from "react";
import Container from "../container/Conatiner.jsx";
import PostForm from "../Components/Postform/PostForm.jsx";

function AddPost() {
  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <PostForm/>
    </Container>
  );
}

export default AddPost;
