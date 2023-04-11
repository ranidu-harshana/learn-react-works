import {createContext, useContext, useState} from "react";
import {loginDataContext} from "./LoginDataContext";

export const bookDetailsContext = createContext({})

const BookDetailsContext = ({children}) => {
	const [bookDetails, setBookDetails] = useState([])
	const {loggedUser} = useContext(loginDataContext)

	const filteredBookDetails = bookDetails.filter((book) => {
		return book.addedBy === loggedUser.email;
	})

	return (
		<bookDetailsContext.Provider value={{filteredBookDetails, setBookDetails}}>
			{children}
		</bookDetailsContext.Provider>
	)
}

export default BookDetailsContext