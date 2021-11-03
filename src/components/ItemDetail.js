import { ItemsCuont } from "./ItemsCuont";
export const ItemDetail = ({producto, setViewModal})=>{
    const onAdd = (cantidad) => {
        alert(`Agregaste ${cantidad} productos al carrito😀`);
        setViewModal(false);
    }
    return (
        <div className = 'cardProducto'>
            <button className = 'cerrarModal' onClick={()=>setViewModal(false)}> X </button>
            <img src={producto.img} alt='productoimg'className='IMG'/>
            <h2>{producto.nombre}</h2>
            <h3>{producto.descripcion}</h3>
            <h4>${producto.precio} </h4>
            <ItemsCuont stock={producto.stock} icnicial={1} onAdd={onAdd} />
        </div>
    );
};