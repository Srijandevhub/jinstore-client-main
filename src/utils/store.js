import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import cartReducer from './cartSlice'
import wishlistReducer from './wishlistSlice'
import compareReducer from './compareSlice'
const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
        compare: compareReducer
    }
})

export default store