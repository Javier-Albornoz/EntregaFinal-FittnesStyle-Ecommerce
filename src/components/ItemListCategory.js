import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { ItemList } from "./ItemList";
import { productosMock } from "./productosMock";


export const ItemListCategory = () => {
    const [productos, setProductos] = useState([]);
    const[cargando, setCargando] = useState(false);
    const {categoria} = useParams();

    const tomarProductos = new Promise((res, rej) => {
        setTimeout(function(){
            res(productosMock);
        },2000)
    });

        useEffect(()=>{
            setCargando(true);
            tomarProductos
            .then((res)=>{
                setProductos(res.filter((item)=> item.categoria === categoria));
            })
            .catch((err)=>alert(err))
            .finally(()=> setCargando(false));
        }, [categoria]);
        return <>{cargando ? <h2>Cargando...</h2> : <ItemList productos={productos}/>}</>;
    };