import React, { useState, useEffect } from "react";
import Container from "../container/Conatiner.jsx"
import DBservice from "../Appwrite/Service.js";
import PostCard from "../Components/PostCard.jsx"

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    DBservice.getPosts([]).then((posts) => {
      if (posts) {
          console.log("Fetched Posts:", posts.documents)
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
 
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
           
              
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  
  
  );
}

export default AllPosts;
