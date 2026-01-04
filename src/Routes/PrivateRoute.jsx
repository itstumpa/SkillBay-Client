

import React from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext.jsx";
import Loading from "../components/Loading.jsx";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth(); 
  const location = useLocation();

   if (loading) return <Loading />;

  if (!user) {

      return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;

