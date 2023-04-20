import {useDispatch, useSelector} from "react-redux";
import {getPosts, postSliceSelector} from "./store/slices/postSlice";
import PostComponent from "./components/PostComponent";

function App() {
  const posts = useSelector(postSliceSelector)
  const dispatcher = useDispatch()
  return (
    <>
      <button onClick={()=>{
        dispatcher(getPosts())
      }
      }>Click</button>
        {posts.data.map((post, index)=>(<PostComponent {...post} key={index} />))}
        {posts.status === "Pending"?<p>Loading</p>:""}
    </>
  );
}

export default App;
