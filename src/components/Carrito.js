import { useContext } from "react";
import { CartContext } from "./CartContext";
import trashIcon from '../images/trashIcon.png';


export const Carrito= ()=>{
    const {carrito, removerProducto} = useContext(CartContext);

    const calcularPrecio = (precio, cantidad) =>{
        return precio*cantidad;
    };

    return(
        <div>
            {carrito.length ? (
                carrito.map((producto)=>(
                    <div key={producto.id} className='cartItem'>
                        <h2>{producto.nombre}</h2>
                        <h4>Cantidad:{producto.cantidad}</h4>
                        <h4>${calcularPrecio(producto.precio, producto.cantidad)}</h4>
                        <img 
                        className='trashIcon'
                        src={trashIcon}
                        alt='iconoBasura'
                        onClick={()=>{
                            removerProducto(producto);
                        }}
                        />
                    </div>
                ))
            ) : (
                <h1>Aun no tenes productos en el carrito😃</h1>
            )}
        </div>
    );
};