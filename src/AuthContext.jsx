// AuthContext.js
import React, { createContext, useContext, useState } from "react";
import { Data as initialData } from "./DummyData/Data";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("")
    const [data, setData] = useState(initialData);

    const login = (name, password) => {
        if (name === "superuser" && password === "superuser123") {
            setIsAuthenticated(true);
            setUsername(name); // Set the logged-in username
            setRole("superuser")
            setData((data) =>
                data.map((post) =>
                    post.role === "admin"
                        ? { ...post, isauthenticate: false } // Keep admin posts inaccessible
                        : { ...post, isauthenticate: true } // Allow access to other posts
                )
            );
        } else if (name === "admin" && password === "admin123") {
            setIsAuthenticated(true);
            setUsername(name); // Set the logged-in username
            setRole("admin")
            setData((data) =>
                data.map((post) =>({ ...post, isauthenticate: true }) // Allow access to other posts
                )
            );
        }
        else {
            alert("Invalid username or password");
        }

    };

    const logout = () => {
        setIsAuthenticated(false);
        setUsername(""); // Clear the username
        setData(initialData);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, username, login, logout, data, role }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);