import {useDispatch, useSelector} from "react-redux";
import {laptopSelector} from "./store/slices/laptopSlice";
import LaptopComponent from "./components/LaptopComponent";
import {addToCart, calculateTotalPrice, cartSliceSelector} from "./store/slices/cartSlice";

function App() {
	const laptops = useSelector(laptopSelector)
	const cart = useSelector(cartSliceSelector)
	const dispatcher = useDispatch()

	const userId = 1;
	return (
		<>
			{laptops?.map((laptop) => (
				<LaptopComponent {...laptop} key={laptop.id}>
					<button onClick={() => {
						dispatcher(addToCart(userId, laptop))
						dispatcher(calculateTotalPrice(userId))
					}}>Add to Cart
					</button>
				</LaptopComponent>
			))}
			<h1>Total: {cart.totalPrice}</h1>
		</>
	);
}

export default App;
