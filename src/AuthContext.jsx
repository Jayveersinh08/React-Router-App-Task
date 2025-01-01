import React, { createContext, useContext, useState, useEffect } from "react";
import { Data as initialData } from "./DummyData/Data";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("");
    const [data, setData] = useState(initialData);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("LocalData"));
        if (storedData && storedData.isAuthenticated) {
            setIsAuthenticated(storedData.isAuthenticated);
            setUsername(storedData.username);
            setRole(storedData.role);
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem("LocalData",JSON.stringify({ isAuthenticated, username, role })
        );
    }, [isAuthenticated, username, role]);

    const login = (name, password) => {
        if (name === "superuser" && password === "superuser123") {
            setIsAuthenticated(true);
            setUsername(name);
            setRole("superuser");
            setData((data) =>
                data.map((post) =>
                    post.role === "admin"
                        ? { ...post, isauthenticate: false }
                        : { ...post, isauthenticate: true }
                )
            );
        } else if (name === "admin" && password === "admin123") {
            setIsAuthenticated(true);
            setUsername(name);
            setRole("admin");
            setData((data) =>
                data.map((post) => ({ ...post, isauthenticate: true }))
            );
        } else if (name === "user" && password === "user123") {
            setIsAuthenticated(true);
            setUsername(name);
            setRole("user");
            setData((data) =>
                data.map((post) =>
                    post.role === "admin"
                        ? { ...post, isauthenticate: false }
                        : post.role === "superuser"
                        ? { ...post, isauthenticate: false }
                        : { ...post, isauthenticate: true }
                )
            );
        } else {
            alert("Invalid username or password");
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUsername("");
        setRole("");
        setData(initialData);
        localStorage.removeItem("LocalData"); // Clear localStorage on logout
    };

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, username, role, login, logout, data }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
