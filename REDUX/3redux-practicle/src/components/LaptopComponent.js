const LaptopComponent = ({brand, HDD, RAM, price, children}) => {
	return (
		<>
			<p>Brand: {brand}</p>
			<p>HDD: {HDD}</p>
			<p>RAM: {RAM}</p>
			<p>Price: {price}</p>
			{children}
			<hr/>
		</>
	)
}

export default LaptopComponent