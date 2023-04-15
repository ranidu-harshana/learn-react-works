import {configureStore} from "@reduxjs/toolkit";
import laptopSlice from "./slices/laptopSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
	reducer: {
		laptopSlice,
		cartSlice
	}
})

export default store