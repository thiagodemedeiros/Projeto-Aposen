import { useParams } from "react-router-dom"
import { posts } from "../../data/Posts"
import "./styles/Post.css"

export default function Post() {
    const { id } = useParams()
    const post : any = posts.find(post => post.id === Number(id))

    if (!post) {
        return <h1>Post not found</h1>
    }

    return (
        <div className="Post">
            <div className="Post_itens">
                <img src={post.img1920} alt={post.title} />
                <h1>{post.title}</h1>
                <h3>{post.type}</h3>
                <p className="whitespace-pre-line">
                    {post.content}
                </p>
            </div>
        </div>
    )
}