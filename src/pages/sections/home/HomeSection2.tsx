import "./styles/HomeSection2.css"
import balance from "./assets/balance.png"
import dollar from "./assets/dollar.png"
import handshake from "./assets/handshake.png"
import healthCare from "./assets/health-care.png"
import { Link } from "react-router-dom"

export default function HomeSection2() {
    return (
        <div className="HomeSection2">
            <div className="HomeSection2_container">
                <Link to="/search/type/tech"><img src={healthCare} alt="" /></Link>
                <Link to="/search/type/tech"><img src={dollar} alt="" /></Link>
                <Link to="/search/type/design"><img src={handshake} alt="" /></Link>
                <Link to="/search/type/design"><img src={balance} alt="" /></Link>
            </div>
        </div>
    );
}