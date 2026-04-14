import { Link } from "react-router-dom";
import "./styles/Footer.css"

export default function Footer() {
    return(
    <footer className="Footer">
        <div className="Footer_itens">
            <div className="Footer_coluna">
                <FooterLink href="" text="Página Inicial"/>
                <FooterLink href="sobre-nos" text="Sobre nós"/>
                <FooterLink href="#" text="Serviços"/>
                <FooterLink href="#" text="Preços"/>
                <FooterLink href="#" text="Contato"/>
            </div>
            <div className="Footer_coluna">
                <FooterLink href="#" text="Termos e condições"/>
                <FooterLink href="#" text="Politicas de privacidade"/>
                <FooterLink href="#" text="Cookies"/>
            </div>
        </div>
    </footer>
    )
}

interface FooterLinkProps {
    href: string;
    text: string;
}

function FooterLink({href, text} : FooterLinkProps) {
    return(
        <Link to={href}>{text}</Link>
    )
}