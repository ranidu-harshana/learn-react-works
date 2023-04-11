import {useContext, useRef} from "react";
import {bookDetailsContext} from "../contexts/BookDetailsContext";
import {loginDataContext} from "../contexts/LoginDataContext";

const RegisterBook = () => {
	const {setBookDetails} = useContext(bookDetailsContext)
	const {loggedUser} = useContext(loginDataContext)
	const bookNameRef = useRef();
	const authorNameRef = useRef();

	return (
		<>
			<input type="text" ref={bookNameRef} placeholder="Book Name"/> <br/>
			<input type="text" ref={authorNameRef} placeholder="Author Name"/> <br/>
			<button onClick={() => {
				setBookDetails((preBookDetails) => {
					return [...preBookDetails, {
						id: preBookDetails.length + 1,
						bookName: bookNameRef.current.value,
						authorName: authorNameRef.current.value,
						addedBy: loggedUser.email
					}]
				})
			}
			}>Submit
			</button>
		</>
	)
}

export default RegisterBook