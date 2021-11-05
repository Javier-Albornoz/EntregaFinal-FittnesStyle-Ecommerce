import { NavLink } from 'react-router-dom';
import cartIco from '../images/cartIco.ico'
export const CartWidgets = () =>{
    return(
        <NavLink to='/carrito'>
            <img className = 'cartIco' src={cartIco} alt='iconoCarrito'></img>
        </NavLink>
    );
    };