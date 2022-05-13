import './css/App.css';
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/navbar/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer Contenido="ItemListContainer contenido" />
    </div>
  );
}

export default App;
