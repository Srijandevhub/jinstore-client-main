import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadWishlistAsync = createAsyncThunk("data/loadWishlistAsync", async (_, thunkAPI) => {
    try {
        const res = await axios.get("http://localhost:5000/api/v1/wishlist/get-wishlist", { withCredentials: true });
        if (res.status === 200) {
            return res.data.wishlist.products;
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {
        addProductToWishlistSync: (state, action) => {
            state.data.push(action.payload);
        },
        syncWishlistFromLocalStorage: (state) => {
            if (localStorage.getItem("wishlistproducts")) {
                state.data = JSON.parse(localStorage.getItem("wishlistproducts"));
            }
        },
        removeProductFromWishlistSync: (state, action) => {
            const filteredList = state.data.filter(prd => prd !== action.payload);
            state.data = filteredList;
        },
        clearWishlistSync: (state) => {
            console.log("Wishlist clear triggered");
            state.data = [];
            localStorage.removeItem("wishlistproducts")
        },
        syncWishlistToLocalStorage: (state) => {
            localStorage.setItem("wishlistproducts", JSON.stringify(state.data));
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadWishlistAsync.pending, (state) => {
            state.status = 'loading';
        }).addCase(loadWishlistAsync.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        }).addCase(loadWishlistAsync.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        })
    }
})


export const { addProductToWishlistSync, syncWishlistFromLocalStorage, removeProductFromWishlistSync, clearWishlistSync, syncWishlistToLocalStorage } = wishlistSlice.actions;
export default wishlistSlice.reducer