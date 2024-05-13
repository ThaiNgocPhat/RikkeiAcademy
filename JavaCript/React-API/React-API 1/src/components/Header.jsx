import React from "react";

const Home = ({ user }) => {
  return (
    <div>
      <h2>Xin chào, {user.username}!</h2>
      <p>Bạn đã đăng nhập thành công.</p>
    </div>
  );
};

export default Home;
