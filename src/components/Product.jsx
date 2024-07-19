import React, { useContext } from "react";



const Product = ({ name, price, amount, image }) => {
  

  const handleAdd = () =>{
    addToBasket(item)
  }

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
          <button 
          className="px-4 py-2 bg-[#d3f3b5] hover:bg-[#b9eb8e] rounded-md"
          onClick={handleAdd}>
            Add To Basket
          </button>
          <p className="font-bold text-lg  px-1 text-white">amount: {amount}</p>
          <button className="text-red-500  "> Remove </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
