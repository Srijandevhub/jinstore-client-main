import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { clearWishlistSync } from "./wishlistSlice";

export const fetchUser = createAsyncThunk("fetchUser/data", async (_, thunkAPI) => {
    try {
        const res = await axios.get("http://localhost:5000/api/v1/user/loggedin-user", { withCredentials: true });
        if (res.status === 200) {
            return res.data.user;
        }
    } catch (error) {
        if (error.response.status === 400 || error.response.status === 500 || error.response.status === 403) {
            //thunkAPI.dispatch(clearWishlistSync());
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
});

export const logoutUser = createAsyncThunk("logoutUser/data", async (_, thunkAPI) => {
    try {
        const res = await axios.post("http://localhost:5000/api/v1/user/logout-user", { }, { withCredentials: true });
        if (res.status === 200) {
            return null;
        }
    } catch (error) {
        if (error.response.status === 400 || error.response.status === 500 || error.response.status === 403) {
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        status: 'idle',
        error: null
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.status = "loading";
        }).addCase(fetchUser.fulfilled, (state, action) => {
            state.status = "success";
            state.data = action.payload;
        }).addCase(fetchUser.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        }).addCase(logoutUser.pending, (state) => {
            state.status = 'loading';
        }).addCase(logoutUser.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = "success";
        }).addCase(logoutUser.rejected, (state, action) => {
            state.error = action.payload;
            state.status = "failed";
        })
    }
})

export default userSlice.reducer