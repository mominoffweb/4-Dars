import { useSelector } from "react-redux";
import Product from "../components/Product";

function BasketProducts() {
  const { products, total } = useSelector((store) => store.basket);

  if (products == 0) {
    return (
      <h1 className=" mt-4 text-center text-4xl ">
        You don't have any item in your basket 🤦‍♂️
      </h1>
    );
  }

  return (
    <div>
      {products.map((item) => {
        const { name, price, image, amount } = item;
        return (
          <Product
            key={new Date().getTime() + Math.random()}
            name={name}
            price={price}
            image={image}
            amount={amount}
          />
        );
      })}
      <hr />
      <div className="mt-10 flex justify-between text-4xl  font-medium items-center">
        <h1>Total:</h1>
        <h1>{total.toFixed(2)}</h1>
      </div>
    </div>
  );
}

export default BasketProducts;
