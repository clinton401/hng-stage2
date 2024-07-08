import { useContext, useEffect, useState } from "react";
import bgImage from "../assets/landing-page.avif";
import { myContext } from "../App";
import type { ProductDataType } from "../utils/types";
import Card from "../components/card";
function Home() {
  const [left, setLeft] = useState(true);
    const { productData, scrollToTop } = useContext(myContext);
    useEffect(() => {
        scrollToTop();
    }, [])
  return (
    <div className=" w-full pb-[80px]">
      <section
        className="w-full h-dvh min-h-[400px] flex items-center relative justify-center flex-col  gap-2 px-[5%] py-1 bg-cover bg-no-repeat bg-center max-h-[1300px] "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute top-0 left-0 h-full w-full blurred z-10"></div>
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center flex-col gap-4 px-[5%] py-1  z-20">
          {" "}
          <h1 className="font-black font-inter text-4xl sm:w-2/4 w-full text-white text-center">
            Your one-stop shop for all things fitness!
          </h1>
          <button className="border-4 border-white w-[150px] p-2 flex items-center outline-none text-white justify-center">
            SHOP NOW
          </button>
        </div>
      </section>
      <section className="w-full flex pt-16 px-[5%] flex-col gap-8 ">
        <h2 className="w-full text-center text-3xl font-black text-typo font-inter ">
          Best Sellers
        </h2>
        <div className="w-full flex-wrap justify-center flex items-center gap-x-[3%] gap-y-4 sm:gap-x-4 ">
          {productData.map((product: ProductDataType) => {
            return (
              <Card
                img={product.img}
                name={product.name}
                price={product.price}
                id={product.id}
                key={product.id}
              />
            );
          })}
        </div>
        <div className="flex w-full justify-center items-center gap-2">
          <button
            className={`w-[12px] aspect-square rounded-full border-typo border ${
              left ? "bg-typo" : "bg-background"
            }`}
            onClick={() => setLeft(true)}
          ></button>
          <button
            className={`w-[12px] aspect-square rounded-full border-typo border ${
              left !== true ? "bg-typo" : "bg-background"
            }`}
            onClick={() => setLeft(false)}
          ></button>
        </div>
      </section>
      <section className="w-full flex pt-16 px-[5%] flex-col gap-8 ">
        <h2 className="w-full text-center text-3xl font-black text-typo font-inter ">
          Our Fitness Solutions
        </h2>
        <div className="w-full flex-wrap justify-center flex items-center gap-x-[3%] gap-y-4 sm:gap-x-4 ">
          <button className="w-[45%]  sm:w-[230px] min-w-[170px]">
            All Categories
          </button>
          <button className="w-[45%] border border-btn   sm:w-[230px] min-w-[170px]">
            Strength Training
          </button>
          <button className="w-[45%]  sm:w-[230px] min-w-[170px]">
            Cardio Equipment
          </button>
          <button className="w-[45%]  sm:w-[230px] min-w-[170px]">
            Fitness Appeal
          </button>
        </div>
        <div className="w-full flex-wrap justify-center flex items-center gap-x-[3%] gap-y-4 sm:gap-x-4 ">
          {productData.map((product: ProductDataType) => {
            return (
              <Card
                img={product.img}
                name={product.name}
                price={product.price}
                id={product.id}
                key={product.id}
              />
            );
          })}
        </div>
        <div className="w-full flex-wrap flex-row-reverse justify-center flex items-center gap-x-[3%] gap-y-4 sm:gap-x-4 ">
          {productData.map((product: ProductDataType) => {
            return (
              <Card
                img={product.img}
                name={product.name}
                price={product.price}
                id={product.id}
                key={product.id}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;
