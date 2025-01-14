import { createSlice } from "@reduxjs/toolkit";
import { addItemsToCart, removeItemFromCart } from "./cart-utils";


const INITIAL_STATE = {
    cartItems: []
}


const cartSlice = createSlice ({
    name: "cart",
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
                return {
                    ...state,
                    cartItems: addItemsToCart(state.cartItems, action.payload)
                }

        },
        removeFromCart: (state, action) => {
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }

    },
    clearCart: (state) => {
        return {
            ...state,
            cartItems: []
    };
    },
}, 
});


export const {addToCart, clearCart,removeFromCart} = cartSlice.actions

export default cartSlice.reducer;