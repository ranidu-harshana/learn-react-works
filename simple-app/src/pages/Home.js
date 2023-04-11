import {Link} from "react-router-dom";

const Home = () => {
	return (
		<>
			<Link to={'/login'}>Login</Link> <br/>
			<Link to={'/register'}>Register</Link> <br/>
			<Link to={'/admin'}>Admin</Link>
		</>
	)
}

export default Home