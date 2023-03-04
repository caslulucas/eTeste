import "../styles/components/navproduct.sass"
import { TitleMain } from "./TitleMain"


export function NavProduct () {
    return (
        
        <div id="container-main">
            <TitleMain />
            <div id="product-list">
                <p>celular</p>
                <p>acessórios</p>
                <p>tablets</p>
                <p>notebooks</p>
                <p>tvs</p>
                <p>ver todos</p>
            </div>  

        </div>
    )
}