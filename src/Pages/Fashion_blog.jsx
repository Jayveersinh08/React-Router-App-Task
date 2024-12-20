import React from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import { useAuth } from "../AuthContext";


const Fashion_blog = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const { data } = useAuth();
    const navigate = useNavigate();
    // Get sortOrder from query params or default to an empty string
    const sortOrder = searchParams.get("sort") || "";

    // Sort posts based on sortOrder from URL
    const sortedPosts = [...data].sort((a, b) =>
        sortOrder === "asc"
            ? a.title.localeCompare(b.title)
            : sortOrder === "desc"
                ? b.title.localeCompare(a.title)
                : 0 // No sorting if sortOrder is empty
    );

    const handleSortChange = (e) => {
        const newSortOrder = e.target.value;
        setSearchParams({ sort: newSortOrder });
    }; return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <button className="btn btn-outline-dark py-0" onClick={() => navigate("/blogs")}>
                    Back
                </button>
                <select
                    id="dropdown"
                    name="options"
                    value={sortOrder}
                    onChange={handleSortChange}>
                    <option value="" disabled>Sort</option>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </select>
            </div>
            <div class="pt-3 ">
                <h1 class="d-flex justify-content-center py-3">This is Fashion Blog</h1>
                <h5>
                    <ol class="list-style-number d-flex justify-content-around py-4">
                        {sortedPosts.map((post) => (
                            <div key={post.id} class="post p-5  mx-2 rounded border bg-light ">
                                <Link class="text-decoration-none text-dark " to={post.isauthenticate ? `/blogs/fashion_blog/${post.id}` : '/login'}>{post.title}</Link>
                            </div>
                        ))}
                    </ol>
                </h5>
            </div>
        </div>
    )
}

export default Fashion_blog
