import { createContext, useState } from 'react'

import dbImage from "./assets/Durahex_40_lb_Rubber_Hex_Dumbbell-removebg-preview 1.png"
import matImage from "./assets/Yoga_Mat_Eco_Friendly_Packaging_Double_Layer_TPE_-removebg-preview 1.png"
import watchImage from "./assets/Garmin_010-02156-05_Forerunner_45__42mm_Easy-to-use_GPS_Running_Watch_with_Coach_Free_Training_Plan_Support__Black-removebg-preview 1.png"
import bagImage from "./assets/Nike_Woman_s_Gym_Club_Duffle_Bag-removebg-preview 1.png"
import type {
  ProductDataType,
  ContextType,
  CartProductDataType,
} from "./utils/types";
import RouteComp from './RoutesComp'
import Navbar from "./layout/Navbar"
import Footer from './layout/Footer'
const defaultContextValues: ContextType = {
  productData: [],
  AddToCart: () => {},
  removeCart: () => {},
  addQuantity: () => {},
  clearCart: () => {},
  removeQuantity: () => {},
  scrollToTop: () => {},
  cartItems: [],
  isAddedToCart: () => false,
  total: 0,
};

export const myContext = createContext<ContextType>(defaultContextValues);
function App() {
  const [cartItems, setCartItems] = useState< CartProductDataType[]>([]);
  const [total, setTotal] = useState<number>(0)
  
const productData: ProductDataType[] = [
  {
    id: 1,
    name: "Dumbbell",
    price: 15000,
    img: dbImage,
  },
  {
    id: 2,
    name: "Yoga Mat",
    price: 10000,
    img: matImage,
  },
  {
    id: 3,
    name: "GPS Watch",
    price: 15000,
    img: watchImage,
  },
  {
    id: 4,
    name: "Women's Gym Bag",
    price: 15000,
    img: bagImage,
  },
];
  const AddToCart = (data:  CartProductDataType) => {
    const isExisting = cartItems.some(
      (product: ProductDataType) => product.id === data.id
    );
    if (!isExisting) {
      const totalQuantity = data.quantity * data.price;
      setTotal(prev => prev + totalQuantity);
      setCartItems([...cartItems, data]);
    }
  };
  const clearCart = () => {
    setCartItems([]);
  }
  const removeCart = (data:  CartProductDataType) => {
    const filteredResult = cartItems.filter(
      (product: ProductDataType) => product.id !== data.id
    );
     const totalQuantity = data.quantity * data.price;
     setTotal((prev) => prev - totalQuantity);
    setCartItems(filteredResult)
  };
 const addQuantity = (id: number) => {
   const dataIndex = cartItems.findIndex(
     (item: CartProductDataType) => item.id === id
   );

   if (dataIndex !== -1) {
     const updatedCartItems = [...cartItems];
     updatedCartItems[dataIndex] = {
       ...updatedCartItems[dataIndex],
       quantity: updatedCartItems[dataIndex].quantity + 1,
     };
setTotal((prev) => prev + updatedCartItems[dataIndex].price);
     setCartItems(updatedCartItems);
   }
 };
  const removeQuantity = (id: number) => {
    const dataIndex = cartItems.findIndex(
      (item: CartProductDataType) => item.id === id
    );

    if (dataIndex !== -1) {
      const updatedCartItems = [...cartItems];
      const newQuantity = updatedCartItems[dataIndex].quantity - 1;

      if (newQuantity > 0) {
        updatedCartItems[dataIndex] = {
          ...updatedCartItems[dataIndex],
          quantity: newQuantity,
        };
setTotal((prev) => prev - updatedCartItems[dataIndex].price);
        setCartItems(updatedCartItems);
      } 
    }
  };

  const isAddedToCart = (id: number) => {
    const isAdded = cartItems.some(
      (product: ProductDataType) => product.id === id
    );
    return isAdded
  }
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  const contextValues = {
    productData,
    AddToCart,
    removeCart,
    cartItems,
    isAddedToCart,
    scrollToTop,
    removeQuantity,
    addQuantity,
    total,
    clearCart,
  };
  return (
    <div className="font-main text-btn w-full overflow-x-hidden bg-background  ">
      <myContext.Provider value={contextValues}>
        <Navbar />
        <RouteComp />

        <Footer />
      </myContext.Provider>
    </div>
  );
}

export default App
