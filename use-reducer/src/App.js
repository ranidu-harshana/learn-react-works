import { useReducer } from "react";

const reducer = (preInput, {type, payload}) => {
	switch(type) {
		case 'setName':
			return {...preInput, name: payload}
		case 'setCity':
			return {...preInput, city: payload}
		case 'setLocation':
			return {...preInput, location: payload}
		case 'setPosition':
			return {...preInput, position: payload}
		case 'setDataArr':
			return {...preInput, dataArr: [...preInput.dataArr, payload]}
		default: 
			return {...preInput, name: payload, city: payload, location: payload, position: payload}
	}
}

const App = () => {
	const [input, setState] = useReducer(reducer, {
		name: '',
		city: '',
		location: '',
		position:'',
		dataArr: []
	})
	console.log(input);
	return (
		<>
			<input type="text" value={input.name} placeholder="Name" onChange={(e)=>{
				setState({
					type: 'setName',
					payload: e.target.value
				})
			}}/> <br />
			<input type="text" value={input.city} placeholder="City" onChange={(e)=>{
				setState({
					type: 'setCity',
					payload: e.target.value
				})
			}}/> <br />
			<input type="text" value={input.location} placeholder="Location" onChange={(e)=>{
				setState({
					type: 'setLocation',
					payload: e.target.value
				})
			}}/> <br />
			<input type="text" value={input.position} placeholder="Position" onChange={(e)=>{
				setState({
					type: 'setPosition',
					payload: e.target.value
				})
			}}/> <br />

			<button onClick={()=>{
				setState({
					type: 'resetInputs',
					payload: ''
				})
				setState({
					type: 'setDataArr',
					payload: input
				})
			}}>Submit</button>
		</>
	);
}

export default App;
