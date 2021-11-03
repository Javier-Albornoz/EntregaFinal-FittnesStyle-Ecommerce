import { useState } from 'react';
import { ItemDetailContainer } from './ItemDetailContainer';
import './itemList.scss'
export const Item = ({producto}) => {
    const [viewModal, setViewModal] = useState(false);
    return(
        <>
        <div className='card' onClick={()=> setViewModal(true)}>
            <img src = {producto.img} alt ='producto' className='img'/>
            <h2>{producto.nombre}</h2>
            <h3>{producto.descripcion}</h3>
            <h4>${producto.precio}</h4>
        </div>
        {viewModal ? (
            <ItemDetailContainer setViewModal={setViewModal}/>
        ) : null}
        </>
    );
};