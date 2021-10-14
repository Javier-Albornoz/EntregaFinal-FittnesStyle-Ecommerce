
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Bienvenid@s a FittnesStyle'/>
    </div>
  );
}

export default App;
