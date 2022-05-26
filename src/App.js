import './css/App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemList/ItemListContainer'
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';



const App = () => {
  return (
    <div>
      <NavBar />
      {/* <ItemListContainer Contenido="ItemListContainer" /> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;
