import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const localEmail = localStorage.getItem("email");
    return localEmail ? children : <Navigate to="/login" />
};

export default PrivateRoute