import { Navigate, Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { checkAuthToken, refreshToken } from "../../../API/authAPI";
import SpinnerLoader from "../../../components/Loader/SpinnerLoader";

const ProtectedRoute = () => {
  const [authStatus, setAuthStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      let isAuth = await checkAuthToken();
      console.log(isAuth);
      if (!isAuth) {
        isAuth = await refreshToken();
      }
      setAuthStatus(isAuth);
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  const centeredStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  if (isLoading) {
    return (
      <div style={centeredStyle}>
        <SpinnerLoader />
      </div>
    );
  }
  if (!authStatus) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
