import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Posts from "./pages/Posts";
import SinglePost from "./components/SinglePost";
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/posts',
      element: <Posts/>
    },
    {
      path: '/post/:id',
      element: <SinglePost />
    }
  ])
  return (
    <>
      {
        <RouterProvider router={router} />
      }
    </>
  );
}

export default App;
