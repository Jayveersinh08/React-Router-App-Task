import React from "react";
import { useNavigate } from "react-router-dom";

const RestrictedAdmin = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <button className="btn btn-outline-dark py-0" onClick={() => navigate("/blogs")}>
        Back
      </button>
      <div className="container py-5 d-flex-column text-center">
        <h1>403 - Not Authorized</h1>
        <h3>Sorry, you do not have permission to access this page.</h3>
        <h3>This Page is for <b>Superuser</b> only.</h3>
        <button
          className="btn btn-outline-dark my-3"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default RestrictedAdmin;
