import React, { useContext } from "react";
import { AuthContexts } from "../../Provider/AuthPorvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContexts);
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoute;
