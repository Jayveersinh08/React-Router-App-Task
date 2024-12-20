// AuthContext.js
import React, { createContext, useContext, useState } from "react";
import { Data as initialData } from "./DummyData/Data";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [data, setData] = useState(initialData);

    const login = (name) => {
        setIsAuthenticated(true);
        setUsername(name); // Set the logged-in username
        setData((prevData) =>
            prevData.map((post) => ({ ...post, isauthenticate: true }))
        );
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUsername(""); // Clear the username
        setData(initialData);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, username, login, logout, data }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
