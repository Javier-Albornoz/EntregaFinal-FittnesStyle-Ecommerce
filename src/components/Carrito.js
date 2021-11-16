import { useContext } from "react";
import { CartContext } from "./CartContext";
import trashIcon from '../images/trashIcon.ico';
import './carrito.scss'


export const Carrito= ()=>{
    const {carrito, removerProducto, precioTotal} = useContext(CartContext);

    const calcularPrecio = (precio, cantidad) =>{
        return precio*cantidad;
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
                  <button className='btn2'>
                      <h4>Terminar mi compra😁</h4>
                  </button>
                  </>
            ) : (
                <h1>Aun no tenes productos en el carrito😃</h1>
            )}
        </div>
    );
};