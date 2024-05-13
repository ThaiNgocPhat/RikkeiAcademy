// Dashboard.js
import React from "react";
import { useDispatch, useSelector } from "react-redux"; // or useContext for Context API

const Dashboard = () => {
  const dispatch = useDispatch(); // or useContext
  const username = useSelector((state) => state.auth.username); // or useContext

  const handleLogout = () => {
    // Dispatch logout action
    dispatch(logout());
  };

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
