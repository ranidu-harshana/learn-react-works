import {createAsyncThunk, createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";

const postState = createEntityAdapter({
	selectId: (ele)=>ele.id
})

const initialState = postState.getInitialState({
	status: "",
	error: null
})
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
	reducers: {
		updatePost: (state, action)=>{

		}
	},
	extraReducers: (builder) =>{
		builder.addCase(getPosts.fulfilled, (state, action) => {
			state.status = "Completed"
			postState.addMany(state, action.payload)
		})

		builder.addCase(getPosts.pending, (state, action) => {
			state.status = "Pending"
		})
	}
})

export const {selectIds, selectAll, selectById, selectEntities, selectTotal} = postState.getSelectors(store=>store.postSlice)
export default postSlice.reducer