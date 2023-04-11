import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const SinglePost = () => {
    const [post, setPost] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        const fetchPost = async () => {
            const res =  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            setPost(await res.json())
        }

        fetchPost()

        return ()=>{
            fetchPost()
        }
    }, [id])

    return (
        <>
            <p><b>Title:</b> {post.title}</p>
            <p><b>Body:</b> {post.body}</p>
            <Link to={'/posts'}>Go Back</Link>
        </>
    )
}

export default SinglePost