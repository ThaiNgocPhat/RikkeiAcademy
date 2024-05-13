import React, { useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  return (
    <div>
      {loggedInUser ? (
        <Header user={loggedInUser} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
