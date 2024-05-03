import React from "react";
import Header from "./components/Header";
import ListProducts from "./components/ListProducts";
import './components/App.css'

function App() {
  const cartCount = 8;

  return (
    <>
      <Header cartCount={cartCount} />
      <ListProducts />
    </>
  );
}

export default App;
