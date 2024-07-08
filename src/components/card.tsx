import { useContext, useEffect, useState } from "react";
import favorite from "../assets/favorite_border.png"
import { myContext } from "../App";
function Card({ img, name, price, id }: {
    img: string;
    name: string;
    price: number,
    id: number
}) {
    const [isAdded, setIsAdded] = useState(false)
    const { AddToCart, removeCart, isAddedToCart, cartItems } = useContext(myContext);
    const cartObj = {
        id,
        name,
        price,
        img,
        quantity: 1
}
    useEffect(() => {
        setIsAdded(isAddedToCart(id));
    }, [cartItems]);

    const cartHandler = () => {
        if (isAdded) {
          removeCart(cartObj);
        } else {
          AddToCart(cartObj);
        }
    }
  return (
    <div className="relative card rounded-md flex w-[45%]  sm:w-[230px] min-w-[155px]  items-center flex-col bg-cardBg gap-2 p-2">
      <button className="w-[30px] top-2 right-2 absolute aspect-square flex items-center rounded justify-center">
        <img
          src={favorite}
          alt="search icon"
          className="h-[20px] aspect-square "
        />
      </button>
      <img
        src={img}
        alt="search icon"
        className="w-full aspect-[1/0.8] object-fit "
      />
      <h3 className="text-lg text-typo font-[600] w-full truncate text-center">{name}</h3>
      <p className="text-sm   text-center">${price}</p>
      <button
        className="border-2 transition-all duration-300 h-[60px] sm:h-auto text-sm font-[500] border-typo w-full p-2 flex items-center outline-none hover:text-white hover:bg-typo text-typo justify-center"
        onClick={cartHandler}
      >
        {isAdded ? "REMOVE FROM" : "ADD TO"} CART
      </button>
    </div>
  );
}

export default Card
