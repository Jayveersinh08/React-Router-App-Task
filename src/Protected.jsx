import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Protected = ({ children }) => {
  const { role, isAuthenticated, data } = useAuth();

  // // Filter posts based on the role of the user
  // const getAccessiblePosts = () => {
  //   if (!isAuthenticated) {
  //     return [];
  //   }

  //   switch (role) {
  //     case "user":
  //       return data.slice(0, 3); // Users can access only the first 3 posts
  //     case "superuser":
  //       return data.filter((post) => post.role !== "admin"); // Superuser can access all except admin posts
  //     case "admin":
  //       return data; // Admin can access all posts
  //     default:
  //       return []; // No access by default
  //   }
  // };

  // const accessiblePosts = getAccessiblePosts();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Pass the accessible posts to children as a prop
  // return React.cloneElement(children, { accessiblePosts });
  return children;
};

export default Protected;
