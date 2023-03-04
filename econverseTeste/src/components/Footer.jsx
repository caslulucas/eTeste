import "../styles/components/footer.sass"
import { Logo } from '../Logo'

export function Footer () {
    return (
        <div id="footer">
            <div id="Sobre">
                <h1>Sobre nós</h1>
                <p>conheça</p>
                <p>como comprar</p>
                <p>indicação</p>
            </div>

            <div id="info">
                <h1>informações úteis</h1>
                <p>fale conosco</p>
                <p>dúvidas</p>
                <p>prazos de entrega</p>
                <p>formas de pagamento</p>
                <p>política de privacidade</p>
                <p>troca e devoluções</p>
            </div>

            <div id="pay">
                <h1>formas de pagamento</h1>
            </div>

            <div id="new">
                <h1>Cadastre-se e receba nossas</h1>
                <span>novidades e promoçoes</span>
                <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>

                <input type="text" />
                <button>ok</button>

            </div>

            <div id="copyright">
                <p>
                    Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
                    É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
                </p>
                <Logo />
            </div>
        </div>
    )
}