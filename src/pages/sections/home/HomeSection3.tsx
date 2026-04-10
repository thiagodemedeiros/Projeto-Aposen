import { ThumbPostVertical } from "../../../components/ThumbPost"
import "./styles/HomeSection3.css"
import { posts } from "../../../../data/Posts"

export default function HomeSection3() {
    return (
        <div className="HomeSection3">
            <div className="HomeSection3_texto">
                {posts.slice(-9,-3)
                    .reverse()
                    .map((post : any) => (
                    <ThumbPostVertical
                        key={post.id}
                        titulo={post.title}
                        noticia={post.content}
                        link="#"
                        img={post.img}
                    />
                ))}
            </div>
        </div>
    )
}