import { collection, getDocs, getFirestore, query } from "@firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "./ItemDetail";
import './itemDetail.scss';

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});
    const [cargando, setCargando] = useState(false);

    useEffect(()=>{
        setCargando(true);
        const db = getFirestore();
        const q = query(collection(db, 'items'));
        getDocs(q)
        .then((querySnapshot) =>{
            querySnapshot.docs.forEach((doc)=> {
                if(doc.id === id){
                    setProducto({...doc.data(), id: doc.id});
                }
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
