import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import trashIcon from '../images/trashIcon.ico';
import './carrito.scss';
import { getFirestore } from "../firebase/index";
import * as firebase from 'firebase/app';
import "firebase/firestore";
import { UserForm } from "./UserForm";


export const Carrito= ()=>{
    const {carrito, removerProducto, precioTotal} = useContext(CartContext);
    const [orden, setOrden] = useState({});
    const [usuario, setUsuario] = useState({
        nombre: null,
        email: null,
    });
    

    const calcularPrecio = (precio, cantidad) =>{
        return precio*cantidad;
    };

    const crearOrden = () => {
        const db = getFirestore();
        const ordenes = db.collection('ordenes');
        const newOrden ={
            compredor: usuario,
            items: carrito,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: precioTotal,
        }
        ordenes
        .add(newOrden)
        .then(({id})=>{
            console.log((id));
            setOrden({id: id, ...newOrden});
        }) 
        .catch((error)=>{
            console.log('error creacion de orden', error);
        });
    };


    return(
        <div>
            {carrito.length ? (
                <>
                {carrito.map((producto)=>(
                    <div key={producto.id} className='cartItem'>
                        {/* <img src={producto.img} alt='productoimg'className='IMG'/> */}
                        <h2>{producto.nombre}</h2>
                        <h3>Cantidad:{producto.cantidad}</h3>
                        <h3>${calcularPrecio(producto.precio, producto.cantidad)}</h3>
                        <img 
                        className='trashIcon'
                        src={trashIcon}
                        alt='#'
                        onClick={()=>{
                            removerProducto(producto);
                        }}
                        />
                    </div>
                  ))}
                  <div className='cartItem'>
                      <h2>TOTAL</h2>
                      <span><h4>${precioTotal}</h4></span>
                  </div>
                  <button className='btn2' disabled={!(usuario.nombre && usuario.email && carrito.length)} onClick={()=>crearOrden()}>
                      <h4>Terminar mi compra😁</h4>
                  </button>
                  </>
            ) : (
                <h1>Aun no tenes productos en el carrito😃</h1>
            )}
            <div className='formulario'>
                <UserForm usuario = {usuario} setUsuario = {setUsuario}/>
                {orden.id ? <div>Tu nº de orden es: {orden.id}</div> : <h2>Cargando...</h2> }

            </div>

        </div>
        
    );
};