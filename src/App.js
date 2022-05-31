import './css/App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemList/ItemListContainer'
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Tienda from './views/Tienda'
import Inicio from './views/Inicio'
import Contacto from './views/Contacto'
import Cart from './views/Cart';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="fondo-circle"></div>
        <div className="fondo-circle2"></div>
        <NavBar/>
        <Routes>
          <Route path='/' element={< Inicio/>}/>
          <Route path='/:tienda' element={<Tienda/>}/>
          <Route path='/tienda/category/:id' element={< ItemListContainer/>}/>
          <Route path='/tienda/item/:id' element={< ItemDetailContainer/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/cart' element={< Cart/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
