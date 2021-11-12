import { useState } from "react"
import { NavLink } from "react-router-dom";

export const DropDown = ()=>{
    const[desplegado, setDesplegado] = useState(false);
    const categorias = [
        {
            id:'proteinas',
            nombre:'Proteinas'
        },
        {
            id:'sup.generales',
            nombre: 'Sup. Generales'
        },
        // {
        //     id:'teen&kids',
        //     nombre:'Teen&Kids'
        // },
    ];
    return (
        <div className='navbarInteractivo'>
            <button type='button' className='drop' onClick={()=>setDesplegado(!desplegado)}>Tienda</button>
            {desplegado ? (
                <ul className='menuDesplegable'>
                    {categorias.map((categoria)=>(
                        <NavLink key={categoria.id} to={`/categoria/${categoria.id}`}>{categoria.nombre}</NavLink>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};