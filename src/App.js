import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Carrito } from './components/Carrito';
import { CartProvider } from './components/CartContext';
import { Contacto } from './components/Contacto';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListCategory } from './components/ItemListCategory';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { Promociones } from './components/Promociones';


function App() {
  return (
    <BrowserRouter>
    <CartProvider>
    <div className="App">
       <NavBar />
     <Routes>
       <Route path="/Contacto"element={<Contacto />}></Route>

       <Route  path="/Promociones" element={<Promociones />}></Route>

       <Route  path="/Carrito" element={<Carrito />}></Route>

       <Route  path="/categoria/:categoria"element={<ItemListCategory />}></Route>

       <Route  path="/producto/:id" element={<ItemDetailContainer />}></Route>
       
       <Route exact path="/" element={<ItemListContainer />}></Route>
     </Routes>
    </div>
    </CartProvider>
    </BrowserRouter>
    
  );
}

export default App;
