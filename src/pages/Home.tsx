import HomeSection1 from "./sections/home/HomeSection1"
import HomeSection2 from "./sections/home/HomeSection2"
import HomeSection3 from "./sections/home/HomeSection3"
import { Carroussel } from "../features/carroussel/Carroussel"

export default function Home() {
    return(
    <>
        <Carroussel />
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
    </>
    )
}