import "../styles/components/category.sass"
import { IconDrinks } from '../icons/IconDrinks'
import { IconTecnologie } from '../icons/IconTecnologie'
import { IconSupermarket } from '../icons/IconSupermarket'
import { IconTools } from '../icons/IconTools'
import { IconHealth } from '../icons/IconHealth'
import { IconSport } from '../icons/IconSport'
import { IconFashion } from '../icons/IconFashion'

export function Category() {
    return (
        <div id="category-products">

            <div id="box-category">
               < IconTecnologie/> 
            </div>
            <p>Tecnologia</p>

            <div id="box-category">
               < IconSupermarket/> 
            </div>
            <p>Supermercadp</p>

            <div id="box-category">
               < IconDrinks/> 
            </div>
            <p>Bebidas</p>

            <div id="box-category">
               < IconTools/> 
            </div>
            <p>Ferramentas</p>

            <div id="box-category">
               <IconHealth /> 
            </div>
            <p>Saúde</p>

            <div id="box-category">
               < IconSport/> 
            </div>
            <p>Esporte e Fitness</p>

            <div id="box-category">
               <IconFashion /> 
            </div>
            <p>Moda</p>
           
         
            
            
            
            

           
        </div>
    )
}