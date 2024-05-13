// PrivateRoute.js
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux"; // or useContext for Context API

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // or useContext
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
