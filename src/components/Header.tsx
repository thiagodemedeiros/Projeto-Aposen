import SearchBar from "./SearchBar"
import logo from "/logo_aposen.png"
import "./styles/Header.css"
import { Link } from "react-router-dom"

export default function Header() {
    return(
    <header className="Header">
        <SearchBar />
        <div className="Header_itens">
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>
            <div className="Header_itens_menu">
                <a href="">Oferta 1</a>
                <a href="">Oferta 2</a>
                <a href="">Oferta 3</a>
                {/* <a href="">Oferta 4</a> */}
                {/* <a href="">Oferta 5</a> */}
                {/* <a href="">Oferta 6</a> */}
                {/* <a href="">Oferta 7</a> */}
            </div>
        </div>
    </header>
    )
}