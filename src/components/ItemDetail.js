import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "./CartContext";
import { ItemsCuont } from "./ItemsCuont";


export const ItemDetail = ({producto})=>{
    const [cantidad , setCantidad] = useState(0);
    const [botonSumar, setBotonSumar] = useState(false);
    const {sumarProducto} = useContext(CartContext);

    const comprarProductos = () => {
        sumarProducto(producto.id, producto.nombre, producto.precio, cantidad)
    };
    
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
            <h4>{producto.descripcion}</h4>
            <h3>${producto.precio} </h3>
            <ItemsCuont stock={producto.stock} inicial={1} onAdd={onAdd} />
            {botonSumar ? ( 
                <NavLink to='/Carrito' className='btn2' onClick={()=>{comprarProductos()}}>
                    Comprar
                </NavLink>
            ): null}
            <NavLink className='cerrarModal' to='/' onClick={()=>{setCantidad(0)}}>
                Volver◀◀
            </NavLink>
        </div>
    );
};