import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {
        addProductToCartSync: (state, action) => {
            const { productid, quantity } = action.payload;
            state.data.push({ productid: productid, quantity: quantity });
            localStorage.setItem("cartproducts", JSON.stringify(state.data));
        },
        removeProductFromCartSync: (state, action) => {
            const filteredState = state.data.filter(prd => prd !== action.payload);
            state.data = filteredState;
            localStorage.setItem("cartproducts", JSON.stringify(state.data));
        },
        clearCartSync: (state) => {
            state.data = [];
            localStorage.removeItem("cartproducts");
        },
        loadCartSync: (state) => {
            if (localStorage.getItem("cartproducts")) {
                state.data = JSON.parse(localStorage.removeItem("cartproducts"));
            }
        }
    }
})

export const { addProductToCart, removeProductFromCartSync, clearCartSync, loadCartSync } = cartSlice.actions;
export default cartSlice.reducer