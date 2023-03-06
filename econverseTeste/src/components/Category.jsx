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
               <p>Tecnologia</p>
            </div>
            

            <div id="box-category">
               < IconSupermarket/> 
               <p>Supermercadp</p>
            </div>
      

            <div id="box-category">
               < IconDrinks/> 
               <p>Bebidas</p>
            </div>
        

            <div id="box-category">
               < IconTools/> 
               <p>Ferramentas</p>
            </div>
            

            <div id="box-category">
               <IconHealth /> 
               <p>Saúde</p>
            </div>
            

            <div id="box-category">
               < IconSport/> 
               <p>Esporte e Fitness</p>
            </div>
            

            <div id="box-category">
               <IconFashion /> 
               <p>Moda</p>
            </div>
            
        </div>
    )
}