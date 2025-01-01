import React from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Travel_blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, role } = useAuth();
  const navigate = useNavigate();

  const sortOrder = searchParams.get("sort") || "";

  const sortedPosts = [...data].sort((a, b) =>
    sortOrder === "asc"
      ? a.title.localeCompare(b.title)
      : sortOrder === "desc"
        ? b.title.localeCompare(a.title)
        : 0
  );

  const handleSortChange = (e) => {
    const newSortOrder = e.target.value;
    setSearchParams({ sort: newSortOrder });
  };

  const handlePostClick = (post) => {
    

    if (role === "user" && post.role === "superuser") {
      navigate("/superuser"); 
    }else if (role === "user" && post.role === "admin") {
      navigate("/admin"); 
    } else if (role === "superuser" && post.role === "admin") {
      navigate("/admin"); 
    } else if (post.id) {
      navigate(`/blogs/travel_blog/${post.id}`);
    }
  };


  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-outline-dark py-0"
          onClick={() => navigate("/blogs")}
        >
          Back
        </button>
        <select
          id="dropdown"
          name="options"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="" disabled>
            Sort
          </option>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div>
      <div className="pt-3">
        <h1 className="d-flex justify-content-center py-3">This is Travel Blog</h1>
        <h5>
          <ol className="list-style-number d-flex justify-content-around py-4">
            {sortedPosts.map((post) => (
              <div
                className="post p-5 mx-2 rounded border bg-light"
                key={post.id}
                onClick={() => handlePostClick(post)}
                style={{ cursor: "pointer" }}
              >
                <Link className="text-decoration-none text-dark">{post.title}</Link>
              </div>
            ))}
          </ol>
        </h5>
      </div>
    </div>
  );
};

export default Travel_blog;
