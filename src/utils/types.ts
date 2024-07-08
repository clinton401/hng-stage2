export type ProductDataType = {
    id: number,
    name: string,
    price: number,
    img: any
}
export type CartProductDataType = {
    id: number,
    name: string,
    price: number,
    img: any,
    quantity: number
}
export type ContextType = {
  productData: ProductDataType[];
  AddToCart: (data: CartProductDataType) => void;
  removeCart: (data: CartProductDataType) => void;
  scrollToTop: () => void;
  clearCart: () => void;
  removeQuantity: (id: number) => void;
  addQuantity: (id: number) => void;
  cartItems: CartProductDataType[];
  isAddedToCart: (id: number) => boolean;
  total: number;
};
