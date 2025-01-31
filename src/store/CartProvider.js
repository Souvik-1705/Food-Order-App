
import { type } from "@testing-library/user-event/dist/type";
import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartReducer={
    items:[],
    totalAmout:0,
}

const cartReducer=(state,action)=>{
    if(action.type==='ADD'){
        const updatedItems=state.items.concat(action.item);
        const updatedTotalAmout=state.totalAmout+action.item.price*action.item.amount;
        return{
            items:updatedItems,
            totalAmout:updatedTotalAmout,
        }
    }
    return defaultCartReducer;
};

const CartProvider=props=>{
   const [cartState,dispatchCartAction]= useReducer(cartReducer,defaultCartReducer);
    const addItemToCartHandler=(item)=>{
        dispatchCartAction({type:"ADD",item:item});
    };
    const removeItemFromCardHandler=(id)=>{
        dispatchCartAction({type:"REMOVE",id:id})
    };
    const cartContext={
        items:cartState.items,
        totalAmout:cartState.totalAmout,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCardHandler,
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;