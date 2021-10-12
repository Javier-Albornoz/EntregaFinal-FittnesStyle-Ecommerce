import './navBar.scss'
export const NavBar = () => {
    return (
        <div className ='navbarContainer'>
            <ul className ='navbarMenu'>
                    <h2 className = 'navbarBrand'>FittnesStyle</h2>
                <li className ='navbarItem'>
                    <a href ='/#'>Inicio</a>
                </li>
                <li className ='navbarItem'><a href ='/#'>Tienda</a>
                <ul>
                    <li className ='section'>
                        <a>Mujer</a>
                    </li>
                    <li className='section'>
                        <a href ='/#'>Hombre</a>
                    </li>
                    <li className='section'>
                        <a href='/#'>Teens&Kids</a>
                    </li>
                </ul>
                </li>
                <li className = 'navbarItem'>
                    <a href ='/#'>contacto</a>
                </li>
                <li className ='navbarItem'>
                    <a href='/#'>Promociones</a>
                </li>
            </ul>
        </div>
    );
};