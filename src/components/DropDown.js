import { useState } from "react"
import { NavLink } from "react-router-dom";

export const DropDown = ()=>{
    const[desplegado, setDesplegado] = useState(false);
    const tienda = [
        {
            id:'mujeres',
            nombre:'Mujeres'
        },
        {
            id:'hombres',
            nombre: 'Hombres'
        },
        {
            id:'teen&kids',
            nombre:'Teen&Kids'
        },
    ];
    return (
        <div className='navbarInteractivo'>
            <button type='button' className='drop' onClick={()=>setDesplegado(!desplegado)}>Tienda</button>
            {desplegado ? (
                <ul className='menuDesplegable'>
                    {tienda.map((tienda)=>(
                        <NavLink key={tienda.id} to={`/tienda/${tienda.id}`}>{tienda.nombre}</NavLink>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};