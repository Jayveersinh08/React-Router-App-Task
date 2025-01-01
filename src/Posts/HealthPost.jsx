import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const HealthPost = () => {
  const { data, role, isauthenticated } = useAuth();
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = data.find((post) => post.id === postId);

  if (!post) {
    return <div>Post not found!</div>;
  }

  const isAccessible =
    (role === "user" && post.role !== "superuser" && post.role !== "admin") ||
    (role === "superuser" && post.role !== "admin") ||
    role === "admin";

 
   if(!isAccessible) {
    if (role === "user") {
      if (post.role === "superuser") {
        navigate("/superuser");
      }
      if (post.role === "admin") {
        navigate("/admin");
      }

    } else if (role === "superuser" && post.role === "admin") {
      navigate("/admin");
    }
    return null; // Prevent further rendering
  }

  return (
    <div className="container">
      <button
        className="btn btn-outline-dark py-0"
        onClick={() => navigate("/blogs/health&fitness_blog")}
      >
        Back
      </button>
      <div className="container">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default HealthPost;
