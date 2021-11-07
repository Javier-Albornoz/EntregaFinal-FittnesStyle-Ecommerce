import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "./ItemDetail";
import './itemDetail.scss';
import { productosMock } from "./productosMock";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});
    const [cargando, setCargando] = useState(false);

    const mostrarProductos = new Promise((res, rej)=>{
        setTimeout(function(){
            res(productosMock);
        },2000);
    });
    useEffect(()=>{
        setCargando(true);
        mostrarProductos
        .then((res)=>{
            res.forEach((producto) => {
                if(producto.id === id){
                setProducto(producto)}
            });
        })
        .catch((err)=>alert(err))
        .finally(()=>setCargando(false));
    },[]);

    
    return (
        <div className='detalleProducto'>
            {cargando ? <h2>Cargando...</h2> : <ItemDetail producto={producto} />}
        </div>
    );
};
