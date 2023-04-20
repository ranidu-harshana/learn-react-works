import {memo} from "react";

const PostComponent = ({title})=>{
	return (
		<>
			<p>{title}</p>
		</>
	)
}

export default memo(PostComponent)