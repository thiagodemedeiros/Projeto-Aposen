import "./styles/HomeSection1.css"
import { ThumbPostHorizontal } from "../../../components/ThumbPost"
import { posts } from "../../../../data/Posts"

export default function HomeSection1() {
    return(
    <section className="HomeSection1">
        <div className="HomeSection1_itens">
            <div className="HomeSection1_item_esquerda">
                <h1>Energia para viver mais e melhor.</h1>
                <p>Ajudamos você a aproveitar o melhor desta nova fase, garantindo suporte e qualidade de vida. Nossa missão contínua é lutar pelos seus benefícios e proteger a história daqueles que iluminaram o desenvolvimento nuclear do país.</p>
                <button>Inscreva-se hoje!</button>
            </div>
            <div className="HomeSection1_item_direita">
                <h5>Notícias</h5>
                {posts.slice(-3)
                    .reverse()
                    .map((post : any) => (
                    <ThumbPostHorizontal
                        key={post.id}
                        titulo={post.title}
                        noticia={post.content}
                        link={`/post/${post.id}`}
                        img={post.img}
                    />
                ))}
            </div>
        </div>
    </section>
    )
}