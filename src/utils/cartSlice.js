import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {
        addProductToCart: (state, action) => {
            const { productid, quantity } = action.payload;
            state.data.push({ productid, quantity });
        }
    }
})

export const { addProductToCart } = cartSlice.actions;
export default cartSlice.reducer