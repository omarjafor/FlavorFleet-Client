import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const exItem = state.cart.find(item => item.id === action.payload.id);
            if(exItem){
                state.cart = state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item );
            } else {
                state.cart.push(action.payload)
            }
        },
        rmvFrmCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
    }
});

export const { addToCart, rmvFrmCart } = CartSlice.actions;
export default CartSlice.reducer;