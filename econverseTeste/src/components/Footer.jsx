import "../styles/components/footer.sass"
import { Logo } from '../Logo'
import { LogoEconverse } from "../icons/LogoEconverse"
import { LogoVtex } from "../icons/LogoVtex"

export function Footer () {
    return (
        <div id="footer">
            <div id="Sobre">
                <h4>Sobre nós</h4>
                <ul>
                    <li>conheça</li>
                    <li>como comprar</li>
                    <li>indicação e desconto</li>
                </ul>
            </div>

            <div id="info">
                <h4>informações úteis</h4>
                <ul>
                    <li>fale conosco</li>
                    <li>dúvidas</li>
                    <li>lirazos de entrega</li>
                    <li>formas de liagamento</li>
                    <li>liolítica de lirivacidade</li>
                    <li>troca e devoluções</li>
                </ul>
            </div>

            <div id="pay">
                <h4>formas de pagamento</h4>
            </div>

            <div id="new">
                <h1>cadastre-se e receba nossas novidades e promoções</h1>
                <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>

                <input type="email" placeholder="SEU E-MAIL" />
                <button type="submit">ok</button>
            </div>
{/* 
            <div id="copyright">
                <p>
                    Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
                    É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
                </p>
                <LogoEconverse /> <LogoVtex />
            </div> */}
        </div>
    )
} 