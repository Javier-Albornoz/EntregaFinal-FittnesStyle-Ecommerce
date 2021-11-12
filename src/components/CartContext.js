import { createContext, useState } from "react";


export const CartContext = createContext();

export function CartProvider({children}){
    const [carrito, setCarrito] = useState([]);
    const sumarProducto = (id, nombre, precio, cantidad) =>{
        const indexExistente = carrito.findIndex((item)=> item.id === id);

        if (indexExistente >= 0){
            carrito[indexExistente] = {
                ...carrito[indexExistente],
                cantidad: carrito[indexExistente].cantidad + cantidad,
            };
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
    const removerProducto = (itemInCart)=>{
        const indexExistente = carrito.findIndex((item)=> item.id === itemInCart.id);

        if(indexExistente >= 0){
            carrito.splice(indexExistente, 1);
        }
    };
    return (
        <CartContext.Provider value={{sumarProducto, carrito, setCarrito, removerProducto}}>
        {children}
        </CartContext.Provider>
        );
}

