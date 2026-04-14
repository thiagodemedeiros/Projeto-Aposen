import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { posts } from "../../data/Posts"
import { ThumbPostHorizontal } from "../components/ThumbPost"
import "./styles/SearchPostBy.css"

export default function SearchPostByType() {
    const { type } = useParams<{ type: string }>()
    const [findedPosts, setFindedPosts] = useState<any[]>([])

    useEffect(() => {
        const filteredPosts = posts.filter(post =>
            post.type.toLowerCase().includes(type?.toLowerCase() || "")
        )
        setFindedPosts(filteredPosts)
    }, [type])

    useEffect(() => {
        console.log(findedPosts)
    }, [findedPosts])

    return (
        <div className="SearchPostByType">
            <div className="SearchPostByType_itens">
                <h1>Pesquisando por: {type}</h1>
                <div className="SearchPostByType_itens_post_thumb">
                    {findedPosts.map(post => (
                        <ThumbPostHorizontal key={post.id}
                            img={post.img}
                            link={`/post/${post.id}`}
                            noticia={post.content}
                            titulo={post.title} />
                    ))}
                </div>
            </div>
        </div>
    )
}
