import { useEffect, useState } from "react"
import "../styles/components/product.sass"


// const [data, setData ] = useState([])

export function Produto () {
    // useEffect(() => {
    //     const fetchApi = async () => {
    //         const url = "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
    //         const response = await fetch(url)
    //         const objJson = await response.json()
    //         setData(objJson.products)
    //     }
    //     fetchApi()
    // }, [])


    return (
        <div id="items">
            <div id="items-product" >
                {/* {
                    data.map((e) => {
                       <div key={e.productName}>
                            <img src={e.photo} alt="" />,
                            <h4>{e.descriptionShort}</h4>,
                            <h4>{e.price}</h4>,
                        </div>
                        
                    })
                } */}
                <p>Frete gratis</p>
                <button type="submit">comprar</button>
            </div>
        </div>
    )
}
