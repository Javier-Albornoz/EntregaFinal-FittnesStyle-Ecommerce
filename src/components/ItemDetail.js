import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ItemsCuont } from "./ItemsCuont";


export const ItemDetail = ({producto})=>{
    const [cantidad , setCantidad] = useState(0);
    const [botonSumar, setBotonSumar] = useState(false);
    
    const onAdd = (cantidad) => {
        setCantidad(cantidad);    
    };
    useEffect(()=>{
        if(cantidad !==0){
            setBotonSumar(true);
        }
    }, [cantidad]);
    return (
        <div className = 'cardProducto'>
            <img src={producto.img} alt='productoimg'className='IMG'/>
            <h2>{producto.nombre}</h2>
            <h3>{producto.descripcion}</h3>
            <h4>${producto.precio} </h4>
            <ItemsCuont stock={producto.stock} inicial={1} onAdd={onAdd} />
            {botonSumar ? ( 
                <NavLink to='/Carrito' className='btn2' onClick={()=>{setBotonSumar(0)}}>
                    Comprar
                </NavLink>
            ): null}
            <NavLink className='cerrarModal' to='/' onClick={()=>{setBotonSumar(0)}}>
                Volver◀◀
            </NavLink>
        </div>
    );
};