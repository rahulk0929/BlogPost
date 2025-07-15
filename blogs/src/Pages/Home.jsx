import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DBservice from "../Appwrite/Service.js";
import Container from "../container/Conatiner.jsx";
import PostCard from "../Components/PostCard.jsx";

function Home() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.auth.useData);

  useEffect(() => {
    if (userData) {
      DBservice.getPosts().then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      });
    }
  }, [userData]);

  if (!userData) {
    return (
      <div className="w-full py-40 mt-10 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-inner text-center">
        <h1 className="text-3xl font-semibold text-blue-700">
          Please login to read the latest posts
        </h1>
        <p className="mt-2 text-gray-600 text-lg">
          Join the community and discover great content!
        </p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <h1 className="text-xl text-gray-500">No posts available</h1>
        </Container>
      </div>
    );
  }

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

export default Home;
