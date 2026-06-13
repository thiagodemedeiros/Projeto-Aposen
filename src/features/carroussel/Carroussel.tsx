import "./styles/Carroussel.css"
import { carrousselImgs } from "./data/data"
import { useState } from "react"
import seta from "./assets/seta.png"

export const Carroussel = () => {
    const [ indexImg, setIndexImg ] = useState(0);
    const [ imgMovimentationDirection, setImgMovimentationDirection ] = useState<string>("")

    return (
        <div className="carroussel">
            <img 
                src={seta}
                className="carrousselSetaDireita"
                onClick={() => (
                    setIndexImg(indexImg === carrousselImgs.length - 1 ? 0 : indexImg + 1),
                    setImgMovimentationDirection("right")
                )}
            />
            <img
                src={seta}
                className="carrousselSetaEsquerda"
                onClick={() => (
                    setIndexImg(indexImg === 0 ? carrousselImgs.length - 1 : indexImg - 1),
                    setImgMovimentationDirection("left")
                )}
            />
            <div className="carrousselItems">
                <img
                    key={indexImg} 
                    src={carrousselImgs[indexImg].img} 
                    className={imgMovimentationDirection === "right" ? "carrousselItemsImg slide-next" : "carrousselItemsImg slide-prev"}
                />
            </div>
        </div>
    )
}