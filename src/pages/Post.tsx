import { useParams } from "react-router-dom"
import { posts } from "../../data/Posts"
import { useEffect } from "react"

export default function Post() {
    const { id } = useParams()
    const post : any = posts.find(post => post.id === Number(id))

    if (!post) {
        return <h1>Post not found</h1>
    }

    return (
        <div>
            <img src={post.img} alt={post.title} />
            <h1>{post.title}</h1>
            <h3>{post.type}</h3>
            <p>{post.content}</p>
        </div>
    )
}