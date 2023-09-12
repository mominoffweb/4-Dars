import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HiShoppingCart } from "react-icons/Hi";

function Navbar() {
  const { products } = useSelector((state) => state.basket);

  let initial = 0;
  for (let i = 0; i < products.length; i++) {
    initial += products[i].amount;
  }

  return (
    <div className="flex justify-between py-5 bg-green-200 p-2 rounded-lg ">
      <p className="font-medium ">Home</p>
      <div className="flex gap-2">
        <p className="font-medium ">
          <HiShoppingCart className="text-3xl  ml-10px" />
        </p>
        <span className="bg-red-500 rounded-full text-white py-1 px-1 ">
          {initial}
        </span>
      </div>
    </div>
  );
}

export default Navbar;
