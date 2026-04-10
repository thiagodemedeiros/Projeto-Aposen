import "./styles/ThumbPost.css";

interface ThumbPostProps {
    titulo: string;
    noticia: string;
}

export function ThumbPostVertical({titulo, noticia} : ThumbPostProps) {
    return(
        <div className="ThumbPostVertical">
            <img src="https://img.freepik.com/fotos-gratis/fundo-abstrato-escuro_1048-1920.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
            <div className="ThumbPostVertical_texto">
                <h3>{titulo}</h3>
                <p>{noticia}</p>
            </div>
        </div>
    )
}

export function ThumbPostHorizontal({titulo, noticia} : ThumbPostProps) {
    return(
        <div className="ThumbPostHorizontal">
            <img src="https://img.freepik.com/fotos-gratis/fundo-abstrato-escuro_1048-1920.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
            <div className="ThumbPostHorizontal_texto">
                <h3>{titulo}</h3>
                <p>{noticia}</p>
            </div>
        </div>
    )
}