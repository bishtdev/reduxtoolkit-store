import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <div className="flex justify-between px-8 items-center pt-2 font-medium h-20 bg-[#d3f3b5]">
      <div>
        
        <h1 className="font-bold text-xl sm:text-4xl text-center text-[#cb3075] "> Glasses Store</h1>
      </div>
      <div className=" flex gap-10 pr-2 sm:pr-14">
        <a className="hover:scale-110 transition duration-200 hover:font-bold text-[#cb3075]" > Home</a>
        <a className=" hover:scale-110 transition duration-200 hover:font-bold text-[#cb3075]" > 
        Basket
        </a>
      </div>
    </div>
  );
};

export default Navbar;
