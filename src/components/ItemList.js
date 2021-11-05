import { Item } from "./Item"
import './itemList.scss'
export const ItemList = ({productos}) =>{
    return(
        <div className = 'cardsList'>
            <div className ='cards'>
                {
                    productos.map((producto)=>(
                        <Item key={producto} producto = {producto}/>
                    ))
                }
            </div>
        </div>
    );
};