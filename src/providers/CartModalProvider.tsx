import { useState, useEffect, PropsWithChildren } from "react";
import { CartModalContext } from "@src/contexts/CartModalContext";
import { cartItemsTypes } from "@src/contexts/CartModalContext";

export function CartModalProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<cartItemsTypes[]>([]);

  //saving in local storage
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  return (
    <CartModalContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartModalContext.Provider>
  );
}
