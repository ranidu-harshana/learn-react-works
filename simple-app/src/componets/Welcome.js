import {useContext} from "react";
import LoginDataContext, {loginDataContext} from "../contexts/LoginDataContext";

const Welcome = ({children}) => {
	const {loggedUser} = useContext(loginDataContext)
	return (
		<LoginDataContext>
			<h3>Hi {loggedUser.name}! You are logged in {children}</h3>
		</LoginDataContext>
	)
}

export default Welcome