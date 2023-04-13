import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {numberDecrement, numberIncrement} from "./store/reducers/number";

function App() {
    const number = useSelector(store=>store.number)
    const dispatch = useDispatch()
  return (
    <>
      <button onClick={()=>{
        dispatch(numberIncrement())
      }
      }>Increment</button>

      <button onClick={()=>{
        dispatch(numberDecrement())
      }
      }>Decrement</button>
        <p>{number}</p>
    </>
  );
}

export default App;
