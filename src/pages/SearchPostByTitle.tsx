import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { posts } from "../../data/Posts"
import { ThumbPostHorizontal } from "../components/ThumbPost"

export default function SearchPostByTitle() {
    const { title } = useParams<{ title: string }>()
    const [findedPosts, setFindedPosts] = useState<any[]>([])

    useEffect(() => {
        const filteredPosts = posts.filter(post =>
            post.title.toLowerCase().includes(title?.toLowerCase() || "")
        )
        setFindedPosts(filteredPosts)
    }, [title])

    useEffect(() => {
        console.log(findedPosts)
    }, [findedPosts])

    return (
        <div>
            <h1>Pesquisando por: {title}</h1>
            <div>
                {findedPosts.map(post => (
                    <ThumbPostHorizontal key={post.id}
                        img={post.image}
                        link={`/post/${post.id}`}
                        noticia={post.content}
                        titulo={post.title} />
                ))}
            </div>
        </div>
    )
}
