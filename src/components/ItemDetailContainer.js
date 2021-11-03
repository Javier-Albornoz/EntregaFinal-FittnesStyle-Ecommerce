import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import './itemDetail.scss';
export const ItemDetailContainer = ({setViewModal}) => {
    const productoMock = {
        id: 1,
        nombre: 'Creatina',
        descripcion: 'La creatina está involucrada en la generación de la energía que necesitan los músculos para su funcionamiento.',
        img: 'https://n7.nextpng.com/sticker-png/794/248/sticker-png-dietary-supplement-creatine-sports-nutrition-bodybuilding-supplement-sports-nutrition-food-nutrition-dietary-supplement-dose.png',
        stock: 3,
        precio: 2500,
    };
    const [producto, setProducto] = useState({});
    const [cargando, setCargando] = useState(false);
    const mostrarProductos = new Promise((res, rej)=>{
        setTimeout(function(){
            res(productoMock);
        },2000);
    });
    useEffect(()=>{
        setCargando(true);
        mostrarProductos
        .then((res)=>setProducto(res))
        .catch((err)=>alert(err))
        .finally(()=>setCargando());
    },[]);
    return (
        <div className='detalleProducto'>
            {cargando ? (
                <h2>Cargando...</h2>
            ) : (
                <ItemDetail producto={producto} setViewModal={setViewModal}/>
            )}
        </div>
    );
};