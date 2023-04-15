import {createSlice} from "@reduxjs/toolkit";

const initialState = [
	{
		id: 1,
		brand: "Asus",
		HDD: "512GB SSD",
		RAM: "8GB",
		price: 120000
	},{
		id: 2,
		brand: "Dell",
		HDD: "512GB SSD",
		RAM: "6GB",
		price: 100000
	},{
		id: 3,
		brand: "Acer",
		HDD: "256GB SSD",
		RAM: "4GB",
		price: 90000
	},
]

const laptopSlice = createSlice({
	name: "laptop",
	initialState,
	// reducers: {
	// 	addLaptop: (state, action)=>{
	//
	// 	}
	// }

})

export const laptopSelector = (store)=>(store.laptopSlice)
export default laptopSlice.reducer