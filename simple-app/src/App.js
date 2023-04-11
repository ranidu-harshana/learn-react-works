import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import UserDataContext from "./contexts/UserDataContext";
import LoginDataContext from "./contexts/LoginDataContext";
import BookDetailsContext from "./contexts/BookDetailsContext";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home/>
		}, {
			path: "/login",
			element: <Login/>
		}, {
			path: '/register',
			element: <Register/>
		}, {
			path: '/admin',
			element: <Admin/>
		}
	])

	return (
		<UserDataContext>
			<LoginDataContext>
				<BookDetailsContext>
					<RouterProvider router={router}/>
				</BookDetailsContext>
			</LoginDataContext>
		</UserDataContext>
	);
}

export default App;
