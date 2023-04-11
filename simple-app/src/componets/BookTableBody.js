const BookTableBody = ({id, bookName, authorName, addedBy}) => {
	return (
		<>
			<tr>
				<td>{id}</td>
				<td>{bookName}</td>
				<td>{authorName}</td>
				<td>{addedBy}</td>
			</tr>
		</>
	)
}

export default BookTableBody