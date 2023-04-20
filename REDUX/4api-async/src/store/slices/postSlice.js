import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit";

const initialState = {
	data: [],
	status: "",
	error: null
}

export const getPosts = createAsyncThunk("getPost", async () =>{
	const res = await fetch("https://jsonplaceholder.typicode.com/posts")
	const posts = await res.json()

	if(posts) {
		return posts
	}
})

const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {},
	extraReducers: (builder) =>{
		builder.addCase(getPosts.fulfilled, (state, action) => {
			state.status = "Completed"
			state.data = action.payload
		})

		builder.addCase(getPosts.pending, (state, action) => {
			state.status = "Pending"
		})
	}
})

const selector = (store)=>(store.postSlice)
export const postSliceSelector = createSelector([selector], (selector)=>{
	return selector
})
export default postSlice.reducer