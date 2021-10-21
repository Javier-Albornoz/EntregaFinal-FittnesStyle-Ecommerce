import { useEffect, useState } from "react";
// import { ItemsCuont } from "./ItemsCuont";
import { productosMock } from "./productosMock";
import { ItemList } from "./ItemList";
import './itemList.scss'

// export const ItemListContainer = ({greeting}) =>{
//     const [carrito, setCarrito] = useState(1);
//     const onAdd = (cantProductos) =>{
//         setCarrito(cantProductos);
//         alert(`Sumaste ${cantProductos} productos al carrito✨`);
//     } ;
//     return (<>
//     <h1>{greeting}🏋️‍♂️💪🏋️‍♀️</h1>
//     <ItemsCuont disponible={7} inicial={1} onAdd={onAdd} />
//     </>);
// };
export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const mostrarProductos = new Promise ((result,reject)=>{
        setTimeout(function(){
            result(productosMock);
        }, 3000);
    });
    useEffect(()=>{
        mostrarProductos
        .then((result) =>setProductos(result))
        .catch((err)=>alert(err))
    }, []);
    return <>{<ItemList productos={productos}/>}</>
}
