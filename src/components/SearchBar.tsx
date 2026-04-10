import "./styles/SearchBar.css"
import lupa from "/magnifying-glass.png"

export default function SearchBar() {
    return(
        <div className="SearchBar">
            <div className="SearchBar_item">
                <button>
                    <img src={lupa} alt="Search" />
                </button>
                <input type="text" placeholder="Pesquise por algo..."/>
            </div>
        </div>
    )
}