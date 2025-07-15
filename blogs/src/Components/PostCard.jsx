import React from "react";
import { Link } from "react-router-dom";
import DBservice from "../Appwrite/Service.js";

function PostCard({ $id, title, featuredImage }) {
  console.log("PostCard props:", { $id, title, featuredImage });
  

  const imageUrl = DBservice.getFilePreview(featuredImage);
  console.log("Preview URL:", imageUrl);

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 hover:shadow-lg transition">
        <div className="w-full flex justify-center mb-4">
          <img
            src={imageUrl || "https://via.placeholder.com/300x200?text=No+Image"}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </div>
        <h2 className="text-xl font-bold text-center">{title}</h2>
      </div>
    </Link>
  );
}


export default PostCard;
