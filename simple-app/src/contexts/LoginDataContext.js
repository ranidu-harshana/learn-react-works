import {createContext, useState} from "react";

export const loginDataContext = createContext({})

const LoginDataContext = ({children}) => {
	const [loggedUser, setLoggedUser] = useState({})
	return (
		<loginDataContext.Provider value={{loggedUser, setLoggedUser}}>
			{children}
		</loginDataContext.Provider>
	)
}

export default LoginDataContext