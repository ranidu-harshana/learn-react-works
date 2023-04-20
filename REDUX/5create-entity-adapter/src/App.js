import {useDispatch, useSelector} from "react-redux";
import {getPosts, postSliceSelector, selectAll, selectById, selectIds} from "./store/slices/postSlice";
import PostComponent from "./components/PostComponent";
import store from "./store/store";

function App() {
  const posts = useSelector(selectAll)
    const post = useSelector((state)=>selectById(state, 1))
    console.log(posts)
    console.log(post)
  const dispatcher = useDispatch()
  return (
    <>
      <button onClick={()=>{
        dispatcher(getPosts())
      }
      }>Click</button>
        {posts.map((post, index)=>(<PostComponent {...post} key={index} />))}
        {/*{posts.status === "Pending"?<p>Loading</p>:""}*/}
    </>
  );
}

export default App;
