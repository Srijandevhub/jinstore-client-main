import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCart = createAsyncThunk("data/fetchCart", async (_, thunkAPI) => {
    try {
        const res = await axios.get("http://localhost:5000/api/v1/cart/get-cart", { withCredentials: true });
        if (res.status === 200) {
            return res.data.cart;
        }        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

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
        },
        removeProductFromCartSync: (state, action) => {
            const filteredState = state.data.filter(prd => prd !== action.payload);
            state.data = filteredState;
        },
        clearCartSync: (state) => {
            state.data = [];
            localStorage.removeItem("cartproducts");
        },
        loadCartSync: (state) => {
            if (localStorage.getItem("cartproducts")) {
                state.data = JSON.parse(localStorage.getItem("cartproducts"));
            }
        },
        syncCartToLocalStorage: (state) => {
            localStorage.setItem("cartproducts", JSON.stringify(state.data));
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCart.pending, (state) => {
            state.status = "pending";
        }).addCase(fetchCart.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
        }).addCase(fetchCart.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        })
    }
})

export const { addProductToCartSync, removeProductFromCartSync, clearCartSync, loadCartSync, syncCartToLocalStorage } = cartSlice.actions;
export default cartSlice.reducer