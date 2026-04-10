import { useState } from "react";
import "./styles/SearchBar.css";
import lupa from "/magnifying-glass.png";

export default function SearchBar() {
    const [valor, setValor] = useState("");

    function fazerBusca() {
        if (!valor.trim()) return;

        console.log("Buscando por:", valor);

        //colocar aqui a lógica de busca, como uma chamada a uma API ou filtragem de dados
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