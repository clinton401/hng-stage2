import { useContext, useEffect, useState } from "react";
import { myContext } from "../App";
import { useNavigate } from "react-router-dom";
import type { CartProductDataType } from "../utils/types";
import checkImg from "../assets/Frame 1000009239.png";
import rightImg from "../assets/Vector2.png";
import checkoutImg from "../assets/check-out_9431186 2.png";

import downImg from "../assets/arrow_back_ios.png";
function Checkout() {
  const [finalCheckout, setFinalCheckout] = useState<boolean>(false);
  const [paid, setPaid] = useState<boolean>(false);
  const { cartItems, scrollToTop, total, clearCart } = useContext(myContext);
  const navigate = useNavigate();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (!finalCheckout && paid) {
      setPaid(false);
    }
  }, [finalCheckout, paid]);
  useEffect(() => {
    if (paid) {
      scrollToTop();
    }
  }, [paid]);
  useEffect(() => {
    if (cartItems.length < 1) {
      navigate("/");
    }
  }, []);
  return (
    <div className="w-full min-h-dvh py-[80px] gap-8 flex flex-col px-[5%] ">
      <h2 className="text-3xl w-full text-center font-black text-italics text-typo font-brand">
        Checkout
      </h2>
      {!finalCheckout && (
        <>
          <section className="w-full flex flex-col gap-4 bg-cardBg ">
            <div className="border-b gap-2 flex-wrap p-4 border-background flex items-center justify-between">
              <span className="flex items-center gap-2 ">
                <img
                  src={checkImg}
                  alt="check icon"
                  className="w-[20px] aspect-square "
                />
                <h3 className="font-[600] text-lg sm:text-2xl ">
                  Customer Address
                </h3>
              </span>

              <p className="flex items-center text-xs gap-1">
                CHANGE <img src={rightImg} alt="check icon" className="" />
              </p>
            </div>
            <div className="flex flex-col px-4 pb-4 gap-2">
              <h4 className="font-[600]">Ayomide Adepoju</h4>
              <p>3, Allen, Ikeja, Lagos state | +2347035467289</p>
            </div>
          </section>
          <section className="w-full flex flex-col gap-4 bg-cardBg ">
            <div className="border-b gap-2 flex-wrap p-4 border-background flex items-center justify-between">
              <span className="flex items-center gap-2 ">
                <img
                  src={checkImg}
                  alt="check icon"
                  className="w-[20px] aspect-square "
                />
                <h3 className="font-[600] text-lg sm:text-2xl ">
                  Delivery Option
                </h3>
              </span>

              <p className="flex items-center text-xs gap-1">
                CHANGE <img src={rightImg} alt="check icon" className="" />
              </p>
            </div>
            <div className="flex flex-col px-4 pb-4 gap-2">
              <h4 className="font-[600]">Door Step Delivery From #600</h4>
              <p>Delivery between 10th July and 12th July</p>
            </div>
          </section>
          <section className="w-full flex flex-col gap-4 bg-cardBg ">
            <div className="border-b gap-2 flex-wrap p-4 border-background flex items-center justify-between">
              <span className="flex items-center gap-2 ">
                <img
                  src={checkImg}
                  alt="check icon"
                  className="w-[20px] aspect-square "
                />
                <h3 className="font-[600] text-lg sm:text-2xl ">
                  Payment Method
                </h3>
              </span>

              <p className="flex items-center text-xs gap-1">
                CHANGE <img src={rightImg} alt="check icon" className="" />
              </p>
            </div>
            <div className="flex flex-col px-4 pb-4 gap-2">
              <h4 className="font-[600]">
                Pay with Cards, Bank Transfer OR USSD
              </h4>
              <p>You will be redirected to our secure checkout page</p>
            </div>
          </section>
          <section className="w-full flex flex-col gap-4 bg-cardBg overflow-x-auto ">
            <div className="border-b gap-2 min-w-[600px] flex-wrap p-4 border-background flex items-center justify-between">
              <h3 className="font-[600] text-lg sm:text-2xl ">Order Summary</h3>
            </div>
            <div className="flex flex-col px-4 pb-4 gap-2 min-w-[600px]">
              <span className="flex gap-2 w-full justify-between ">
                <h4 className="">Items total ({cartItems.length})</h4>
                <h4 className="font-[600]">${total}</h4>
              </span>

              <span className=" w-full flex-col gap-2">
                {cartItems.map((item: CartProductDataType) => {
                  return (
                    <div
                      className="h-[60px] flex gap-2 items-center"
                      key={item.id}
                    >
                      <img
                        src={item.img}
                        alt={`${item.name} image`}
                        className="h-full object-cover"
                      />
                      <h5 className="font-[600] text-sm">{item.name}</h5>
                    </div>
                  );
                })}
              </span>
              <span className="flex gap-2 w-full justify-between ">
                <h4 className="">Delivery fees</h4>
                <h4 className="font-[600]">$600</h4>
              </span>
              <span className="flex gap-2 w-full justify-between ">
                <h4 className="">Total</h4>
                <h4 className="font-[600]">${total + 600}</h4>
              </span>
              <button
                className=" min-w-[600px] mb-4 font-[600] p-2 border-2 border-typo "
                onClick={() => {
                  setFinalCheckout(true);
                  scrollToTop();
                }}
              >
                CHECK OUT ${total + 600}
              </button>
            </div>
          </section>
          <button
            className="flex gap-1 w-full items-center"
            onClick={() => navigate(-1)}
          >
            <img
              src={downImg}
              alt="delete icon"
              className="h-[20px] aspect-square "
            />{" "}
            Go back & continue shopping
          </button>
        </>
      )}
      {finalCheckout && (
        <>
          <section className="w-full flex flex-col gap-4 bg-cardBg overflow-x-auto ">
            <div className="border-b gap-2 w-full flex-wrap p-4 border-background flex items-center justify-between">
              <h3 className="font-[600] text-lg sm:text-2xl ">Order Summary</h3>
              <p className="flex items-center text-xs gap-1">
                SEE DETAILS <img src={rightImg} alt="check icon" className="" />
              </p>
            </div>
            <div className="flex flex-col px-4 pb-4 gap-2 w-ful">
              <span className="flex gap-2 w-full flex-wrap justify-between ">
                <h4 className="">Total to pay</h4>
                <h4 className="font-[600]">${total + 600}</h4>
              </span>
            </div>
          </section>
          <section className="w-full flex flex-col gap-4 bg-cardBg overflow-x-auto ">
            <div className="border-b gap-2 w-full flex-wrap p-4 border-background flex items-center justify-between">
              <h3 className="font-[600] text-lg sm:text-2xl ">
                Select Payment Method
              </h3>
            </div>
            <div className="flex flex-col px-4  gap-2 w-ful">
              <span className="flex gap-2 w-full flex-wrap justify-between ">
                <h4 className="">Pay with USSD or Bank Transfer</h4>
              </span>
            </div>
            <button className="w-full text-2xl mb-4 text-center  font-[600]">
              USE A DIFFERENT PAYMENT METHOD
            </button>
          </section>
          <section className="w-full flex flex-col p-4 bg-cardBg overflow-x-auto ">
            <button
              className="w-full  font-[600] p-2 border-2 border-typo "
              onClick={() => {
                setPaid(true);
                scrollToTop();
              }}
            >
              PAY NOW
            </button>
          </section>
          <p className="text-center w-full ">
            By tapping ‘’PAY NOW’’ I accept the Payment Terms and Conditions,
            General Terms and Conditions and Privacy and Cookie Notice.
          </p>
          <p className="text-center w-full ">
            NOTE: we will never ask you for your password, CVV or full card
            details over the phone or is email.
          </p>
          <p className="text-center w-full ">Need Help? Contact Us</p>
          <button
            className="font-[600] w-full text-center "
            onClick={() => navigate("/")}
          >
            {" "}
            BACK TO HOME
          </button>
        </>
      )}
      {paid && (
        <section className="fixed top-0 left-0 sm:z-[100] sm:px-[5%] blurred h-full w-full flex items-center justify-center">
          <div className="bg-background w-full h-full gap-4  sm:h-auto py-[40px] px-[5%] rounded shadow-md flex items-center justify-center flex-col">
            <img
              src={checkoutImg}
              alt="checkout icon"
              className="h-[100px] aspect-square"
            />
            <h3 className="font-[800]">Thank You</h3>
            <p className="text-center sm:w-3/4">
              Congratulations! Your order has been successfully placed. A
              confirmation email has just been sent to you. We will notify you
              once your order has been shipped.
            </p>
            <button
              className="border-2   text-sm font-[500] border-typo px-4 py-2 flex items-center outline-none text-white bg-typo  justify-center"
              onClick={() => {
                navigate("/");
                setPaid(false);
                clearCart();
              }}
            >
              GO HOME
            </button>
          </div>
        </section>
      )}
    </div>
  );
}

export default Checkout;
