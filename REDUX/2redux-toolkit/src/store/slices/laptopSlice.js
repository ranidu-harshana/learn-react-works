import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	count: 0,
	brands: []
}

const laptopSlice = createSlice({
	name: "laptop",
	initialState,
	reducers: {
		// because of the immer library we can use object as simple variables
		// so we do not need to spread the object inorder to change its values
		// previously we had to spread the object if we want to change property of it.
		// because if there are many properties if we change one property it will affect
		// to others. so we did like this if we have two or more properties in one object:
		// return {...state, count: state.count + payload}
		// but now we can simply
		// state.count += payload
		incrementCount: (state, action) => {
			state.count += action.payload
		}
	}
})

export const {incrementCount} = laptopSlice.actions
export default laptopSlice.reducer