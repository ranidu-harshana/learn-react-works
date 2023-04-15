import {configureStore} from "@reduxjs/toolkit";
import laptopSlice from "./slices/laptopSlice";

const store = configureStore({
	reducer: {
		laptopSlice
	}
})

export default store