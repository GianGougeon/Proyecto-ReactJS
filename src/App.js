import './css/style.css'
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemList/ItemListContainer'
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/footer';
import Tienda from './views/Tienda'
import Inicio from './views/Inicio'
import Contacto from './views/Contacto'
import Cart from './views/Cart';
import CartContextProvider from './components/context/CartContext';

const App = () => {
    return (
        <>
            <CartContextProvider>
                <BrowserRouter>
                    <div className="fondo-circle"></div>
                    <div className="fondo-circle2"></div>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={< Inicio />} />
                        <Route path='/tienda' element={< Tienda />} />
                        <Route path='/tienda/category/:idCategoria' element={< ItemListContainer />} />
                        <Route path='/tienda/item/:id' element={< ItemDetailContainer />} />
                        <Route path='/contacto' element={< Contacto />} />
                        <Route path='/cart' element={< Cart />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CartContextProvider>
        </>
    );
}

export default App;
