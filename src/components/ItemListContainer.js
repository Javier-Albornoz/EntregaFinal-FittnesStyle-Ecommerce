import { useState } from "react";
import { ItemsCuont } from "./ItemsCuont";

export const ItemListContainer = ({greeting}) =>{
    const [carrito, setCarrito] = useState(1);
    const onAdd = (cantProductos) =>{
        setCarrito(cantProductos);
        alert(`Sumaste ${cantProductos} productos al carrito✨`);
    } ;
    return (<>
    <h1>{greeting}🏋️‍♂️💪🏋️‍♀️</h1>
    <ItemsCuont disponible={7} inicial={1} onAdd={onAdd} />
    </>);
};
