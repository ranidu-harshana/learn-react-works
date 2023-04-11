import {useContext} from "react";
import {bookDetailsContext} from "../contexts/BookDetailsContext";
import BookTableBody from "./BookTableBody";

const BookDetailsTable = () => {
	const {filteredBookDetails} = useContext(bookDetailsContext)
	return (
		<>
			<table border='1'>
				<tr>
					<th>#</th>
					<th>Book Name</th>
					<th>Author Name</th>
					<th>Added By (email)</th>
				</tr>
				{
					filteredBookDetails?.map((bookDetail, index) => (<BookTableBody {...bookDetail} key={index}/>))
				}
			</table>
		</>
	)
}

export default BookDetailsTable