import React, { Children, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../components/contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <button type="button" class="bg-indigo-500 ..." disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        Loading...
      </button>
    );
  }

  if (user && user.uid) {
    return Children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;