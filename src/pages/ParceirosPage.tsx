import parceiro1 from './assets/ParceirosPage/parceiro_1.jpeg'
import parceiro2 from './assets/ParceirosPage/parceiro_2.png'
import parceiro3 from './assets/ParceirosPage/parceiro_3.jpeg'
import "./styles/ParceirosPage.css"

export default function ParceirosPage() {
    return(
        <section className="ParceirosPage">
            <div className="ParceirosPageItens">
                <h3>Conheça nossos parceiros</h3>
                <div className="ParceirosPageItensImagens">
                    <img src={parceiro1} alt="Parceiro 1" />
                    <img src={parceiro2 } alt="Parceiro 2" />
                    <img src={parceiro3} alt="Parceiro 3" />
                </div>
            </div>
        </section>
    )
}