import { useEffect, useState } from "react";
// import { ItemsCuont } from "./ItemsCuont";
import { productosMock } from "./productosMock";
import { ItemList } from "./ItemList";
import './itemList.scss'


export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(false);
    const mostrarProductos = new Promise ((result,reject)=>{
        setTimeout(function(){
            result(productosMock);
        }, 2000);
    });
    useEffect(()=>{
        setCargando(true);
        mostrarProductos
        .then((result) =>setProductos(result))
        .catch((err)=>alert(err))
    }, []);
    return <>{cargando ? <h2>Cargando...</h2> : <ItemList productos={productos}/>}</>
};

export default ItemListContainer;
