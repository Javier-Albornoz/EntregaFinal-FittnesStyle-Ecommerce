import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

export function CartProvider({children}){
    const [carrito, setCarrito] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0)
    const sumarProducto = (id, nombre, precio, cantidad) =>{
        const indexExistente = carrito.findIndex((item)=> item.id === id);


       let copiarCarrito = carrito.slice();
        if (indexExistente >= 0){
            copiarCarrito[indexExistente] = {
                ...copiarCarrito[indexExistente],
                cantidad: copiarCarrito[indexExistente].cantidad + cantidad,
            };
            setCarrito(copiarCarrito);
        } else{
            setCarrito([
                ...carrito,
                {
                    id: id,
                    nombre: nombre,
                    precio: precio,
                    cantidad: cantidad,
                },
            ]);
        }
    };
    const reductor = (valorPrevio, valorAactual) =>valorPrevio + valorAactual;

    useEffect(()=>{
        if(carrito.length) {
            const precios = carrito.map((item)=>item.precio * item.cantidad);
            // console.log(precios.reduce(reductor));
            setPrecioTotal(precios.reduce(reductor));
        }
    }, [carrito]);

    const removerProducto = (itemInCart)=>{
        const indexExistente = carrito.findIndex((item)=> item.id === itemInCart.id);
        const carritoStorage = Array.from(carrito);

        if(indexExistente >= 0){
            carritoStorage.splice(indexExistente, 1);
            setCarrito(carritoStorage);
        }
    };
    return (
        <CartContext.Provider value={{sumarProducto, carrito, setCarrito, removerProducto, precioTotal}}>
        {children}
        </CartContext.Provider>
        );
}

