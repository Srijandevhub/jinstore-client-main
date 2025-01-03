import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {

    }
})

export default cartSlice.reducer