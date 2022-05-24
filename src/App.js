import './css/App.css';
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer Contenido="ItemListContainer" />
    </div>
  );
}

export default App;
