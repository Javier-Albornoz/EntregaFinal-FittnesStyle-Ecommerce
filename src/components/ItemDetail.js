import { NavLink } from "react-router-dom";
import { ItemsCuont } from "./ItemsCuont";


export const ItemDetail = ({producto})=>{
    const onAdd = (cantidad) => {
        alert(`Agregaste ${cantidad} productos al carrito😀`);
    };
    return (
        <div className = 'cardProducto'>
            <img src={producto.img} alt='productoimg'className='IMG'/>
            <h2>{producto.nombre}</h2>
            <h3>{producto.descripcion}</h3>
            <h4>${producto.precio} </h4>
            <ItemsCuont stock={producto.stock} inicial={1} onAdd={onAdd} />
            <NavLink className='cerrarModal' to='/'>
                Volver◀◀
            </NavLink>
        </div>
    );
};