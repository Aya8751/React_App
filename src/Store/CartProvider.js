import React, { useReducer } from "react";
import CartContext from "./Cart_Context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "Add-Cart") {
    const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingItemIndex = state.items.findIndex((item)=>
      item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];
    let updateItems;
    if(existingItem){
    const updatedItem={
      ...existingItem,
      amount:existingItem.amount + action.item.amount
    }
    updateItems =[...state.items];
    updateItems[existingItemIndex]=updatedItem;
    }
    else{
      updateItems = state.items.concat(action.item);
    }
    return {
    items: updateItems,
    totalAmount: updateTotalAmount
    };
  }
  if (action.type === "Remove-Cart") {
    
    const existingItemIndex = state.items.findIndex((item)=>
      item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    const updateTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if(existingItem.amount === 1){
      updatedItems = state.items.filter((item)=> item.id !== action.id)
    }else{
      const updatedItem ={...existingItem, amount: existingItem.amount -1};
      updatedItems =[...state.items] ;
      updatedItems[existingItemIndex] = updatedItem
    }
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount
      };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const addItemCardHandler = (item) => {
    dispatchCartState({ type: "Add-Cart", item: item });
  };
  const removeItemCardHandler = (id) => {
    dispatchCartState({ type: "Remove-Cart", id: id });
  };
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemCardHandler,
    removeItem: removeItemCardHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
