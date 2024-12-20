// Login.jsx
import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { login, logout, isAuthenticated, username } = useAuth();
    const navigate = useNavigate();
    const [inputUsername, setInputUsername] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        login(inputUsername); // Pass the username to the login function
        navigate("/login"); // Redirect to personal blog after login
    };

    const handleLogout = () => {
        logout();
        navigate("/login"); // Redirect back to login page after logout
    };

    return (
        <div className="container d-flex flex-column text-center justify-content-center">
            {!isAuthenticated ? (
                <form onSubmit={handleLogin}>
                    <fieldset>
                        <legend className="py-3 fs-1">Login Form</legend>
                        <label htmlFor="username" className="py-2 mx-2">
                            User Name:
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your Username"
                            value={inputUsername}
                            onChange={(e) => setInputUsername(e.target.value)}
                            required
                        />
                        <br />
                        <br />
                        <label htmlFor="password" className="py-2 mx-2">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            required
                        />
                        <br />
                        <br />
                        <button type="submit" className="btn btn-outline-dark py-1">
                            Submit
                        </button>
                    </fieldset>
                </form>
            ) : (
                <div>
                    <h2 className="py-3">Welcome, {username}!</h2>
                    <button
                        className="btn btn-outline-danger py-1"
                        onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Login;
