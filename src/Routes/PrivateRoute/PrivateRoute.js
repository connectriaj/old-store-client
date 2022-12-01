import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../components/contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center my-10">
        <button
          type="button"
          class="bg-slate-600 mt-00 text-white px-10 pb-4 rounded-lg shadow-lg"
          disabled
        >
          <svg class="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24"></svg>
          Loading...
        </button>
      </div>
    );
  }

  if (user && user.uid) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
