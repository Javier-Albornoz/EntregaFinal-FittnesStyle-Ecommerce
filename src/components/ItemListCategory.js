import { collection, getDocs, getFirestore, query } from "@firebase/firestore";
import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { ItemList } from "./ItemList";


export const ItemListCategory = () => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(false);
    const {categoria} = useParams();

        useEffect(()=>{
            setCargando(true);
            const db = getFirestore();
            const q = query(collection(db, 'items'));
            getDocs(q)
            .then((querySnapshot)=>{
                querySnapshot.docs.forEach((doc)=>{
                    console.log(doc);
                    if(doc.categoria === categoria){
                        setProductos({...doc.data(), categoria: doc.categoria});
                }});
            })
            .catch((err)=>alert(err))
            .finally(()=> setCargando(false));
        }, [categoria]);
        return <>{cargando ? <h2>Cargando...</h2> : <ItemList productos={productos}/>}</>;
    };