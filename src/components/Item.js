import './itemList.scss'
export const Item = ({producto}) => {
    return(
        <div className='card'>
            <img src = {producto.img} alt ='producto' className='img'/>
            <h2>{producto.nombre}</h2>
            <h3>${producto.precio}</h3>
        </div>
    );
};