import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
    const storedData = JSON.parse(localStorage.getItem("LocalData"));

    let isAuthenticated =false;
if( storedData && storedData.isAuthenticated === true){
  isAuthenticated =true
}
   console.log(isAuthenticated)
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default Protected;
