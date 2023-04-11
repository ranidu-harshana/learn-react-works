import {useReducer, useRef} from "react";

const reducer = (currentState, {type, payload}) => {
	switch (type) {
		case 'setStateArr':
			return [...currentState, payload]
		default:
			return currentState
	}
}
function App() {
	const nameRef = useRef('');
	const cityRef = useRef('');
	const positionRef = useRef('');

	const [state, setState] = useReducer(reducer, []);
	return(
		<>
			<input type="text" ref={nameRef} placeholder="name"/> <br/>
			<input type="text" ref={cityRef} placeholder="city"/> <br/>
			<input type="text" ref={positionRef} placeholder="position"/> <br/>

			<button onClick={()=>{
				return setState({
					type: "setStateArr",
					payload: {
						name: nameRef.current.value,
						city: cityRef.current.value,
						position: positionRef.current.value
					}
				})
			}
			}>Submit</button>
		</>
	);
}

export default App;
