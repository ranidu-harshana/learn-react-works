import {useContext, useEffect} from "react";
import {loginDataContext} from "../contexts/LoginDataContext";
import {useNavigate} from "react-router-dom";
import Welcome from "../componets/Welcome";
import BookDetailsTable from "../componets/BookDetailsTable";
import RegisterBook from "../componets/RegisterBook";

const Admin = () => {
	const {loggedUser, setLoggedUser} = useContext(loginDataContext)
	const navigate = useNavigate();

	useEffect(() => {
		if ((loggedUser === undefined || Object.keys(loggedUser).length === 0)) {
			navigate('/login')
		}
	}, [loggedUser, navigate])

	const userAvailable = loggedUser !== undefined && Object.keys(loggedUser).length !== 0
	return (
		<>
			{userAvailable ? <Welcome>
				<button onClick={() => {
					!userAvailable ? navigate('/login') : setLoggedUser({})
				}
				}>Logout
				</button>
			</Welcome> : null}

			{userAvailable ? <RegisterBook/> : ''}

			<br/><br/>
			{userAvailable ? <BookDetailsTable/> : ''}
		</>
	)
}

export default Admin