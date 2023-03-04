import { Logo } from "../Logo"

import "../styles/components/marks.sass"


export function Marks () {
    return (
        <div id="marks-container">

            <h1>Navegue por marcas</h1>
                
            <div id="logo-marks">
                <Logo className="Logo"/>
            </div>

        </div>
    )
}