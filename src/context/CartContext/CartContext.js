import React, { useState } from "react";

export const CartContext = React.createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    const [totalQty, setTotalQty] = useState();

    const addToCart = (item, quantity) => {
        let foundProduct = cartList.find(current => current.itemId === item.id);
        if (foundProduct === undefined){
        setCartList([
            ...cartList,
             {
            image: item.image,
            itemId: item.id,
            name: item.name,
            price: item.price,
            qty: quantity
        }])
    } else {
        foundProduct.qty += quantity;
    }


        setTotalQty(totalQty + quantity);
    }

    const deleteItem = (id) => {
       const newCartList = cartList.filter(item => item.itemId !== id);
       setCartList(newCartList);
    }

    const deleteItems = () => {
        setCartList([]);
    }

  return <CartContext.Provider value={{cartList, addToCart, totalQty, deleteItems, deleteItem}}>
      {children}
  </CartContext.Provider>;
};

export default CartContextProvider