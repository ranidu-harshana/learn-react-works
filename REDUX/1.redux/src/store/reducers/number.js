const defaultState = {
	number: 0
}
const reducer = (state= defaultState, {type, payload}) => {
	if(type === "increment") {
		return {number: state.number += payload}
	} else if (type === "decrement"){
		return {number: state.number += payload}
	}
	return state
}

const numberIncrement = () => {
	return {
		type: "increment",
		payload: 1
	}
}

const numberDecrement = () => {
	return {
		type: "decrement",
		payload: -1
	}
}

export {
	numberIncrement,
	numberDecrement
}
export default reducer