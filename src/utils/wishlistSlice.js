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


export const addProductToWishlist = createAsyncThunk("data/addProductToWishlist", async (productid, thunkAPI) => {
    try {
        const res = await axios.post("http://localhost:5000/api/v1/wishlist/add-product", {
            productid: productid
        }, { withCredentials: true });
        if (res.status === 200) {
            return res.data.wishlist.products;
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const removeProductFromWishlist = createAsyncThunk("data/removeProductFromWishlist", async (productid, thunkAPI) => {
    try {
        const res = await axios.post("http://localhost:5000/api/v1/wishlist/delete-product", {
            productid: productid
        }, { withCredentials: true });
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
            localStorage.setItem("wishlistproducts", JSON.stringify(state.data));
        },
        syncWishlistFromLocalStorage: (state) => {
            if (localStorage.getItem("wishlistproducts")) {
                state.data = JSON.parse(localStorage.getItem("wishlistproducts"));
            }
        },
        removeProductFromWishlistSync: (state, action) => {
            const filteredList = state.data.filter(prd => prd !== action.payload);
            state.data = filteredList;
            localStorage.setItem("wishlistproducts", JSON.stringify(state.data));
        },
        clearWishlistSync: (state) => {
            state.data = [];
            localStorage.removeItem("wishlistproducts")
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
        }).addCase(addProductToWishlist.pending, (state) => {
            state.status = 'loading';
        }).addCase(addProductToWishlist.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        }).addCase(addProductToWishlist.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        }).addCase(removeProductFromWishlist.pending, (state) => {
            state.status = 'loading';
        }).addCase(removeProductFromWishlist.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        }).addCase(removeProductFromWishlist.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        })
    }
})


export const { addProductToWishlistSync, syncWishlistFromLocalStorage, removeProductFromWishlistSync, clearWishlistSync } = wishlistSlice.actions;
export default wishlistSlice.reducer