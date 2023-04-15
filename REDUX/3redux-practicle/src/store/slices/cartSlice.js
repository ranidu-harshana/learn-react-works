import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	cart: [],
	totalPrice: 0
}

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		// addToCart: (state, action) => {
		// 	// state.cart.push(action.payload)
		// 	return [...state, action.payload]
		// }
		addToCart: {
			reducer: (state, {payload}) => {
				if (state.cart.length === 0) {
					state.cart.push(payload)
				} else {
					const userAvailable = state.cart.find((cart)=>{
						return cart.user === payload.user;
					})

					if(userAvailable) {
						const lapAvailableInCart = userAvailable.cart.find((cartItem)=> {
							return cartItem.laptopId === payload.cart[0].laptopId
						})

						if (!lapAvailableInCart) {
							payload.cart[0].id += userAvailable.cart[userAvailable.cart.length - 1].id
							userAvailable.cart.push(payload.cart[0])
						} else {
							lapAvailableInCart.count += 1
						}
					} else {
						state.cart.push(payload)
					}
				}
			},

			prepare: (userId, {id, price}) => ({
				payload: {
					user: userId,
					cart: [{
						id: 1,
						laptopId: id,
						count: 1,
						price
					}]
				}
			})
		},

		calculateTotalPrice: {
			reducer: (state, {payload}) => {
				const userFound = state.cart.find((cartItem)=>{
					return cartItem.user === payload
				})

				if (userFound) {
					state.totalPrice = 0
					userFound.cart.forEach((item) => {
						state.totalPrice += item.price * item.count
					})
				}
			},

			prepare: (userId) => ({
				payload: userId
			})
		}
	}
})

export const cartSliceSelector = (store) => (store.cartSlice)
export const {addToCart, calculateTotalPrice} = cartSlice.actions
export default cartSlice.reducer