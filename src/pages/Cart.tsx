import { useContext, useEffect } from "react"
import { myContext } from "../App"
import { useNavigate } from "react-router-dom";
import type { CartProductDataType } from "../utils/types";
import deleteImg from "../assets/delete.png";
import addImg from '../assets/Vector.png'
import subtractImg from '../assets/do_disturb_on.png'
import downImg from '../assets/arrow_back_ios.png'
function Cart() {
    const {
      cartItems,
      scrollToTop,
      removeQuantity,
      addQuantity,
      total,
      removeCart,
    } = useContext(myContext);
    const navigate = useNavigate();
    useEffect(() => {
        scrollToTop()
    }, [])
  return (
    <div
      className={`w-full min-h-dvh pb-[80px] ${
        cartItems.length < 1
          ? "flex-col gap-4 flex items-center justify-center"
          : ""
      } pt-[80px] px-[5%]`}
    >
      {cartItems.length < 1 && (
        <>
          <h1 className="font-black font-inter text-4xl sm:w-2/4 w-full text-typo text-center">
            You have no items in your cart
          </h1>
          <button
            className="bg-typo w-[150px] p-2 flex text-white items-center outline-none  justify-center"
            onClick={() => navigate("/")}
          >
            SHOP NOW
          </button>
        </>
      )}
      {cartItems.length >= 1 && (
        <div className="w-full gap-8 flex flex-col ">
          <h2 className="text-3xl w-full text-center font-black text-italics text-typo font-brand">
            Place Your Order
          </h2>
          <section className="w-full flex flex-col gap-4 bg-cardBg  overflow-x-auto">
            <p className="py-4 min-w-[600px] text-2xl font-[600] px-4 border-b border-btn">
              Cart ({cartItems.length})
            </p>
            {cartItems.map((item: CartProductDataType) => {
              const { id, name, price, img, quantity } = item;
              const cartObj = {
                id,
                name,
                price,
                img,
                quantity,
              };
              return (
                <div
                  className="pb-4 min-w-[600px] px-4 flex items-center justify-between gap-2"
                  key={item.id}
                >
                  <div className="flex items-center gap-2">
                    <span className="h-[150px] aspect-square">
                      <img
                        src={item.img}
                        alt={`${item.name} image`}
                        className="h-full w-full "
                      />
                    </span>

                    <span className="flex flex-col gap-2  ">
                      <p className="font-[600]">{item.name}</p>
                      <button
                        className="flex text-xs items-center gap-1"
                        onClick={() => removeCart(cartObj)}
                      >
                        <img
                          src={deleteImg}
                          alt="delete icon"
                          className="h-[20px] aspect-square "
                        />{" "}
                        REMOVE ITEM
                      </button>
                    </span>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-2">
                    <p className="font-[600]">${item.price}</p>
                    <span className="flex gap-2 items-center ">
                      {" "}
                      <button onClick={() => removeQuantity(id)}>
                        {" "}
                        <img
                          src={subtractImg}
                          alt="delete icon"
                          className="h-[20px] aspect-square "
                        />{" "}
                      </button>
                      {item.quantity}
                      <button onClick={() => addQuantity(id)}>
                        {" "}
                        <img
                          src={addImg}
                          alt="add icon"
                          className="h-[20px] aspect-square "
                        />{" "}
                      </button>
                    </span>
                  </div>
                </div>
              );
            })}
          </section>
          <section className="w-full flex flex-col  gap-4 bg-cardBg  overflow-x-auto">
            <p className="py-4 min-w-[600px] text-2xl font-[600] px-4 border-b border-btn">
              Cart Summary
            </p>
            <div className=" min-w-[600px] pb-4 px-4 flex flex-wrap justify-between items-center gap-2 ">
              <span className="flex flex-col  gap-2 ">
                <p className="font-[500]">Subtotal</p>
                <p className="text-sm">Delivery fee is not included yet</p>
              </span>
              <p className="font-[600]">${total}</p>
            </div>
            <button
              className=" min-w-[600px] mb-4 font-[600] mx-2 p-2 border-2 border-typo "
              onClick={() => navigate("/checkout")}
            >
              CHECK OUT ${total}
            </button>
          </section>
          <button
            className="flex gap-1 w-full items-center"
            onClick={() => navigate("/")}
          >
            <img
              src={downImg}
              alt="delete icon"
              className="h-[20px] aspect-square "
            />{" "}
            Go back & continue shopping
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart
