import {useContext} from "react";
import {userDetailsContext} from "../App";

const Component3 = () => {
	const { setName } = useContext(userDetailsContext)
	return (
		<>
			<p>Component Three</p>
			<input type="text" onChange={(e)=>{
				setName(e.target.value)
			}
			} placeholder="name"/>
		</>
	)
}

export default Component3