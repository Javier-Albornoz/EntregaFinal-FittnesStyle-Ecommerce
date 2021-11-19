import { useEffect, useState } from "react";
// import { ItemsCuont } from "./ItemsCuont";
import { productosMock } from "./productosMock";
import { ItemList } from "./ItemList";
import './itemList.scss'
import { getFirestore } from "../firebase/index";
import { collection, doc, getDocs, query } from "@firebase/firestore";


export const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [getIsEmpty, setGetIsEmpty] = useState(false);
    
    useEffect(()=>{
        setCargando(true);
        const db = getFirestore();
        const q =  query(collection(db, 'items'));
        getDocs(q).then((querySnapshot) =>{
            if (querySnapshot.size === 0){
                setGetIsEmpty(true);
            }
            setProductos(
                querySnapshot.docs.map((doc) => {
                    const newDoc = {  ...doc.data(), id: doc.id };
                    return newDoc;
                })
            );
          })
        .catch((err)=>alert(err))
        .finally(()=>setCargando(false));
    }, []);
    return (
    <>
    {cargando ? (<h2>Cargando...</h2>) : getIsEmpty ? (
        <h2>Aun no hay productos 😃</h2>
    ): (<ItemList productos={productos}/>)}
    </>
    );
};

export default ItemListContainer;
