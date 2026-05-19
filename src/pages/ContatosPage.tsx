import "./styles/ContatosPage.css"

export default function ContatosPage() {
    return(
        <section className="ContatosPage">
            <div className="ContatosPageItens">
                <h3>Nossos Contatos</h3>
                <div className="ContatosPageItensContatos">
                    <h4>Telefones e celulares:</h4>
                    <p>(021) 2275-5310 (RJ)</p>
                    <p>(021) 2586-1293 (RJ)</p>
                    <p>(011) 95322-0516 (SP)</p>
                    <p>(011) 99166-5101 (SP)</p>
                </div>
                <div className="ContatosPageItensContatos">
                    <h4>E-mails:</h4>
                    <p>aposen@outlook.com.br</p>
                    <p>aposensp@yahoo.com.br</p>
                </div>
            </div>
        </section>
    )
}