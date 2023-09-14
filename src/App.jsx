import React from "react";
import Navbar from "./components/Navbar";
import BasketProducts from "./components/BasketProducts";
import { updateTotal } from "./redux/Features/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const { products } = useSelector((state) => state.basket);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTotal());
  }, [products, dispatch]);

  return (
    <div className=" max-w-screen-lg mx-auto px-3">
      <Navbar />
      <h1 className="text-center mt-5 py-3 text-5xl">Redux Store</h1>
      <BasketProducts />
    </div>
  );
}

export default App;
