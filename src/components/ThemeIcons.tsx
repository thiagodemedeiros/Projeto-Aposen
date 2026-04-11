import { Link } from "react-router-dom";
import "./styles/ThemeIcons.css"

interface ThemeIconsProps {
    link: string;
    img: string;
}

export default function ThemeIcons({link, img} : ThemeIconsProps) {
    return(
        <div className="ThemeIcons">
            <Link to={link}>
                <img src={img} alt="" />
            </Link>
        </div>
    )
}