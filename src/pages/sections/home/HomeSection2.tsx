import "./styles/HomeSection2.css"
import ThemeIcons from "../../../components/ThemeIcons"
import balance from "./assets/balance.png"
import dollar from "./assets/dollar.png"
import handshake from "./assets/handshake.png"
import healthCare from "./assets/health-care.png"

export default function HomeSection2() {
    return (
        <div className="HomeSection2">
            <div className="HomeSection2_container">
                <ThemeIcons link="/search/type/tech" img={healthCare} />
                <ThemeIcons link="/search/type/tech" img={dollar} />
                <ThemeIcons link="/search/type/design" img={handshake} />
                <ThemeIcons link="/search/type/design" img={balance} />
            </div>
        </div>
    );
}