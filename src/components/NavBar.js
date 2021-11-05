import { NavLink } from 'react-router-dom';
import {CartWidgets} from './CartWidgets'
import { DropDown } from './DropDown';
import './navBar.scss'
export const NavBar = () => {
    return (
        <div className ='navbarContainer'>
            <NavLink to='/'><h2 className = 'navbarBrand'>FittnesStyle</h2></NavLink>
            <ul className ='navbarMenu'>
                <li className ='navbarItem'>
                    <NavLink to ='/'>Inicio</NavLink>
                </li>
                <li className ='navbarItem dropdown'>
                    <DropDown />
                </li>
                <li className = 'navbarItem'>
                    <NavLink to ='/Contacto'>contacto</NavLink>
                </li>
                <li className ='navbarItem'>
                    <NavLink to='/Promociones'>Promociones</NavLink>
                </li>
                <li className='icon'>
                    <CartWidgets />
                </li>
            </ul>
        </div>
    );
};