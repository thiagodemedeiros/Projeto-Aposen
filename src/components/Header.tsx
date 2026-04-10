import SearchBar from "./SearchBar"
import logo from "../../public/logo_aposen.png"
import "./styles/Header.css"

export default function Header() {
    return(
    <header className="Header">
        <SearchBar />
        <div className="Header_itens">
            <img src={logo} alt="Logo" />
            <div className="Header_itens_menu">
                <a href="">Oferta 1</a>
                <a href="">Oferta 2</a>
                <a href="">Oferta 3</a>
                <a href="">Oferta 4</a>
                <a href="">Oferta 5</a>
                <a href="">Oferta 6</a>
                <a href="">Oferta 7</a>
            </div>
        </div>
    </header>
    )
}