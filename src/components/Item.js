import { NavLink } from 'react-router-dom';


export const Item = ({producto}) => {
    return(
        <>
        <NavLink className='card' to={`/producto/${producto.id}`} >
            <div className='cardFoto' >
            <img src = {producto.img} alt ='producto' className='img' />
            </div>
            <div className='cardDescripcion'>
            <h2>{producto.nombre}</h2>
            <h3>${producto.precio}</h3>
            </div>
        </NavLink>
        </>
    );
};