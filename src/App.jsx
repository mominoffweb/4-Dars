import React from "react";
import Navbar from "./components/Navbar";
import BasketProducts from "./components/BasketProducts";


function App() {
     

  return (
    <div className=" max-w-screen-lg mx-auto px-3">
      <Navbar />
      <h1 className="text-center mt-5 py-3 text-5xl">Redex Store</h1>
      <BasketProducts />

      <h1 className="text-center py-5 text-3xl">Total:${}</h1>
    </div>
  );
}

export default App;
