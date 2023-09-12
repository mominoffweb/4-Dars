import { increment, decrement, remove } from "../redux/Features/basketSlice";
import { useDispatch } from "react-redux";

import { MdDelete } from "react-icons/Md";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/Ai";
function Product({ name, price, image, amount }) {
  const dispatch = useDispatch();
  // const { amount } = useSelector((state) => state.basket);

  return (
    <>
      <div className="flex justify-between mb-5 p-1 bg-green-400 rounded-lg shadow text-2xl">
        <div className="flex gap-20">
          <img className="w-40" src={image} alt={name + "glasses"} />
          <div className="flex flex-col gap-1">
            <p className="font-medium">{name}</p>
            <p className="font-medium">${price}</p>
            <button
              onClick={() => dispatch(remove(name))}
              className="text-red-500 tracking-wider hover:text-red-900">  
              <MdDelete className="text-2xl" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
   <button onClick={() => { dispatch(decrement(name)); }}  > <AiFillLeftCircle className="text-3xl" />
          </button>

          <p>{amount}</p>

          <button onClick={() => {   dispatch(increment(name));  }} >
            <AiFillRightCircle className="text-3xl" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
