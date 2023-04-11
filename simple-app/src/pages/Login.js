import {useContext, useEffect, useRef} from "react";
import {userDataContext} from "../contexts/UserDataContext";
import {loginDataContext} from "../contexts/LoginDataContext";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
	const {loggedUser, setLoggedUser} = useContext(loginDataContext)
	const {userDataArr} = useContext(userDataContext)

	const emailRef = useRef();
	const passwordRef = useRef();

	const navigate = useNavigate();

	useEffect(() => {
		loggedUser === undefined || Object.keys(loggedUser).length === 0 ? navigate('/login') : navigate('/admin')
	}, [loggedUser, navigate])

	return (
		<>
			<input type="email" ref={emailRef} placeholder="Email"/><br/>
			<input type="password" ref={passwordRef} placeholder="Password"/><br/>
			<button onClick={() => {
				setLoggedUser(userDataArr.find((user) => {
					return user.email === emailRef.current.value
				}))
			}
			}>Submit
			</button>
			<br/>
			<Link to={'/'}>Back</Link>
		</>
	)
}

export default Login