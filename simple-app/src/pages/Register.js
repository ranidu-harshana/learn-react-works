import {useContext, useRef} from "react";
import {userDataContext} from "../contexts/UserDataContext";
import {Link, useNavigate} from "react-router-dom";

const Register = () => {
	const {setUserDataArr} = useContext(userDataContext);

	const navigate = useNavigate();

	const nameRef = useRef('')
	const emailRef = useRef('')
	const passwordRef = useRef('')
	return (
		<>
			<input type="text" ref={nameRef} placeholder="Name"/><br/>
			<input type="email" ref={emailRef} placeholder="Email"/><br/>
			<input type="password" ref={passwordRef} placeholder="Password"/><br/>
			<button onClick={() => {
				setUserDataArr((preArr) => {
					return [...preArr, {
						name: nameRef.current.value,
						email: emailRef.current.value,
						password: passwordRef.current.value
					}]
				})
				return navigate('/')
			}}>Submit
			</button>
			<br/>
			<Link to={'/'}>Back</Link>
		</>
	)
}

export default Register