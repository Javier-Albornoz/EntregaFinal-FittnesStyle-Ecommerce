import { collection, getDocs, getFirestore, query, where} from "@firebase/firestore";
import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { ItemList } from "./ItemList";


export const ItemListCategory = () => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(false);
    const {categoria} = useParams();
    const [getIsEmpty, setGetIsEmpty] = useState(false);

        useEffect(()=>{
            setCargando(true);
            const db = getFirestore();
            const q = query(collection(db, 'items'), where('categoria', '==', categoria));
            getDocs(q)
            .then((querySnapshot)=>{
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
        }, [categoria]);
        return  <>
        {cargando ? (<h2>Cargando...</h2>) : getIsEmpty ? (
            <h2>Aun no hay productos 😃</h2>
        ): (<ItemList productos={productos}/>)}
        </>
    };
   