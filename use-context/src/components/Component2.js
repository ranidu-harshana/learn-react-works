import {useContext} from "react";
import {userDetailsContext} from "../App";

const Component2 = () => {
	const {name} = useContext(userDetailsContext)
	return (
		<>
			<p>Component Two {name}</p>
		</>
	)
}

export default Component2