import { NavLink } from 'react-router-dom';
import './itemList.scss'

export const Item = ({producto}) => {
    return(
        <>
        <NavLink className='card' to={`/productos/${producto.id}`} >
            <img src = {producto.img} alt ='producto' className='img'/>
            <h2>{producto.nombre}</h2>
            <h3>{producto.descripcion}</h3>
            <h4>${producto.precio}</h4>
        </NavLink>
        </>
    );
};