import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cartIco from '../images/cartIco.ico'
import { CartContext } from './CartContext';

export const CartWidgets = () =>{
    const {carrito} = useContext(CartContext);

    return(
        <NavLink to='/carrito'>
            <img className = 'cartIco' src={cartIco} alt='iconoCarrito'></img>
            {carrito.length ? <p className='cantidad'>{carrito.length} </p> : null}
        </NavLink>
    );
    };