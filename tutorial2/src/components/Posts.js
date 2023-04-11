import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const fetchPosts = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
            setPosts(await res.json())
        }

        fetchPosts()
        
        return ()=>{
            fetchPosts()
        }
    }, [])
    return(
        <>
            {posts.map((post)=>{
                return <Link to={`/post/${post.id}`}><p>{post.title}</p></Link>
            })}
        </>
        
    )
}

export default Posts;