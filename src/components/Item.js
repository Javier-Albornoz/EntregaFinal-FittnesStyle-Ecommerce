import { NavLink } from 'react-router-dom';


export const Item = ({producto}) => {
    return(
        <>
        <NavLink className='card' to={`/item/${producto.id}`} >
            <img src = {producto.img} alt ='producto' className='img'/>
            <h2>{producto.nombre}</h2>
            <h3>${producto.precio}</h3>
        </NavLink>
        </>
    );
};