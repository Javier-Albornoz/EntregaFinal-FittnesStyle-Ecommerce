import { useState } from "react";
import './itemsCuont.scss'

export function ItemsCuont({stock, inicial, onAdd}){
    const [counter, setCounter] = useState(inicial);
    const incrementar = () => {
        if(counter<stock){
            setCounter(counter+1);
        }
    };
    const decrementar = () => {
        if(counter>inicial){
            setCounter(counter-1);
        }
    }
    return (
        <div className = 'counterContainer'>
            <div className = 'counter'>
                <div className = 'display'>
                    <button className = 'btn' onClick={decrementar}>{' '} - {' '}</button>
                    <div>
                        <h2>Unidades:{counter}</h2>
                    </div>
                    <button className = 'btn' onClick={incrementar}>{' '} + {' '}</button>
                </div>
                <button className = 'btn' onClick={()=>onAdd(counter) }>Sumar al carrito</button>
            </div>
        </div>
    )
}