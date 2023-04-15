import {useDispatch, useSelector} from "react-redux";
import {incrementCount} from "./store/slices/laptopSlice";

function App() {
  const count = useSelector(store=>store.laptopSlice.count)
  const dispatch = useDispatch()
  return (
    <>
      <button onClick={()=>{
        dispatch(incrementCount(1))
      }
      }>Increment</button>
      {count}
    </>
  );
}

export default App;
