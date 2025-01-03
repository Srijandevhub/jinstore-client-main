import { createSlice } from "@reduxjs/toolkit";
const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {

    }
})

export default wishlistSlice.reducer