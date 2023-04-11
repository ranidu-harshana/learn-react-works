import {useContext} from "react";
import {userDetailsContext} from "../App";

const Component1 = () => {
	const {name} = useContext(userDetailsContext)
	return (
	  <>
		  <p>Component One {name}</p>
	  </>
  )
}

export default Component1