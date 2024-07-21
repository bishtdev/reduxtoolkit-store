import { useSelector } from "react-redux";
import Product from "./Product";


const BasketProduct = () =>{
    const {products, total, amount} = useSelector((store) => store.basket)


    return (
        <>
        {amount > 1 ? (<>  
        <div className="flex gap-10 justify-center items-center my-4">
            <p className="font-mono text-2xl ">Total : </p>
            <p className="font-mono text-2xl ">${total}</p>
        </div>
        <div className="flex flex-row flex-wrap gap-5 justify-center my-4">
            {products.map((item, i)=>{
                return <Product
                        key={new Date().getTime + Math.random()}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        amount={item.amount}
                        />
            })}
        </div> </>) : ( <> <p className="font-bold text-4xl text-center text-[#cb3075]"> Your Cart is Empty </p> </>)
        }

        
        </>
      );
}

  


export default BasketProduct;
