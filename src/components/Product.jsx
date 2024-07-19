import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { decreaseAmount, increaseAmount } from "../features/basketSlice";

const Product = ({ name, price, amount, image }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    addToBasket(item);
  };

  return (
    <div className="shadow-md flex flex-col items-center justify-center hover:scale-110 transition duration-200 mx-4 w-full sm:w-1/5 rounded-md bg-[#1f5d69]">
      <img
        src={image}
        alt="product img"
        width={200}
        className="rounded-full p-3"
      />
      <div className="flex flex-row items-center justify-around gap-10">
        <div>
          <p className="font-bold text-lg py-2 px-1 text-white">{name}</p>
          <p className="font-mono text-md py-2 px-1 text-green-200">${price}</p>
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="flex gap-3">
            <button
              className="px-4 py-2 bg-[#d3f3b5] hover:bg-[#b9eb8e] rounded-md"
              onClick={() => {dispatch(increaseAmount({name}))}}
            >
              +
            </button>
            <button
              className="px-5 py-2 bg-[#d3f3b5] hover:bg-[#b9eb8e] rounded-md"
              onClick={() => {if(amount > 1) dispatch(decreaseAmount({name}))}}
            >
              -
            </button>
          </div>
          <p className="font-mono text-lg text-white">amount: {amount}</p>
          <button className="text-red-500 font-mono "> Remove </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
