import { createContext, useContext, useState } from "react";
export const CartContext = createContext({
   items: [],
   onAddToCart: () => { },
   onUpdateCartItemQuantity: () => { },
});
