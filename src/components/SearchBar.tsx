import { useState } from "react";
import "./styles/SearchBar.css";
import lupa from "/magnifying-glass.png";
import { useNavigate } from "react-router-dom"

export default function SearchBar() {
    const [valor, setValor] = useState("");
    const navigate = useNavigate()

    function fazerBusca() {
        if (!valor.trim()) return;
        console.log("Buscando por:", valor);
        navigate(`/search/${valor}`)
        setValor("");
    }

    function handleKeyDown(e : React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            fazerBusca();
        }
    }

    return (
        <div className="SearchBar">
            <div className="SearchBar_item">
                <button onClick={fazerBusca}>
                    <img src={lupa} alt="Search" />
                </button>

                <input
                    type="text"
                    placeholder="Pesquise por algo..."
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
}