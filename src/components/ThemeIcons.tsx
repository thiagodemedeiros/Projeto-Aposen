import "./styles/ThemeIcons.css"

interface ThemeIconsProps {
    link: string;
    img: string;
}

export default function ThemeIcons({link, img} : ThemeIconsProps) {
    return(
        <div className="ThemeIcons">
            <a href={link}>
                <img src={img} alt="" />
            </a>
        </div>
    )
}