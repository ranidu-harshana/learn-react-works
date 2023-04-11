import {createContext, useState} from "react";

export const userDataContext = createContext({})
const UserDataContext = ({children}) => {
	const [userDataArr, setUserDataArr] = useState([])
	return (
		<userDataContext.Provider value={{userDataArr, setUserDataArr}}>
			{children}
		</userDataContext.Provider>
	)
}

export default UserDataContext