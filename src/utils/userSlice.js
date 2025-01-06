import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        status: 'idle',
        error: null
    },
    reducers: {
        addUser: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const { addUser } = userSlice.actions;

export default userSlice.reducer