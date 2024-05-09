import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Category from "./page/category/Category";
import CategoryDetail from "./page/category/CategoryDetail";

export default function App() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        Header
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/category">Category</Link>
      </header>
      <div className="app_body">
        ...
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/category" element={<Category />}>
            <Route path="test" element={<>Test</>}></Route>
            <Route path=":categoryName" element={<CategoryDetail />} />
          </Route>
        </Routes>
      </div>
      <footer>Footer</footer>
      <button
        onClick={() => {
          navigate("/category/laptop");
        }}
      >
        Goto Laptop
      </button>
    </>
  );
}
