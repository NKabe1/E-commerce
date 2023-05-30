import { createContext, Dispatch, SetStateAction } from "react";

export type cartItemsTypes = {
  id: number;
  quantity: number;
  price: number;
}

type TCartModalContext = {
  cartItems: cartItemsTypes[];
  setCartItems: Dispatch<SetStateAction<cartItemsTypes[]>>;
};

export const CartModalContext = createContext<TCartModalContext>({
  cartItems: [],
  setCartItems: () => {},
});
