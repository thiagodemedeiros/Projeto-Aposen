import "./styles/ThumbPost.css";
import { Link } from "react-router-dom"

interface ThumbPostProps {
    titulo: string;
    noticia: string;
    link: string;
    img: string;
}

export function ThumbPostVertical({titulo, noticia, link, img} : ThumbPostProps) {
    return(
        <Link to={link}>
            <div className="ThumbPostVertical">
                <img src={img} alt="" />
                <div className="ThumbPostVertical_texto">
                    <h3>{titulo}</h3>
                    <p>
                        {
                            noticia.length > 200
                            ? noticia.slice(0, 200) + '...'
                            : noticia
                        }
                    </p>
                </div>
            </div>
        </Link>
    )
}

export function ThumbPostHorizontal({titulo, noticia, link, img} : ThumbPostProps) {
    return(
        <Link to={link}>
            <div className="ThumbPostHorizontal">
                <img src={img} alt="" />
                <div className="ThumbPostHorizontal_texto">
                    <h3>{titulo}</h3>
                    <p>
                        {
                            noticia.length > 100
                            ? noticia.slice(0, 100) + '...'
                            : noticia
                        }
                    </p>
                </div>
            </div>
        </Link>
    )
}