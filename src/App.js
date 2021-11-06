import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Carrito } from './components/Carrito';
import { Contacto } from './components/Contacto';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { Promociones } from './components/Promociones';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <NavBar />
     <Routes>
       <Route path="/Contacto"element={<Contacto />}></Route>

       <Route  path="/Promociones" element={<Promociones />}></Route>

       <Route  path="/Carrito" element={<Carrito />}></Route>

       <Route  path="/category/:id"element={<ItemListContainer />}></Route>

       <Route  path="/item/:id" element={<ItemDetailContainer />}></Route>
       <Route exact path="/" element={<ItemListContainer />}></Route>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
