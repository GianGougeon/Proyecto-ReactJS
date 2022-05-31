import {useEffect} from "react";
import {useState} from "react";
import ItemList from "./ItemList";
import CategoriasProductos from "../CategoriaProductos";
import {getData} from "../../data/data";
import {useParams} from "react-router-dom";
const {productos} = require('../../data/data');

const ItemListContainer = () => {

  //Variables de estado
  const [listaProductos,
    setListaProductos] = useState([])
  const [cargando,
    setCargando] = useState(false)
  const {id} = useParams();

  useEffect(() => {
    let productosDatos = ""
    setCargando(true)
    if (id === undefined) {
      productosDatos = getData(2000, productos)
    } else {
      productosDatos = getData(2000, productos.filter(item => item.idCategoria == parseInt(id)))
    }
    productosDatos.then((res) => setListaProductos(res)).catch((error) => console.log(error)). finally(() => setCargando(false))
  }, [id]);

  return (
    <div className="itemListContainer">
      <CategoriasProductos/> {cargando
        ? <div className="dot-spin"/>
        : <ItemList listaProductos={listaProductos}/>}
    </div>
  )
}
export default ItemListContainer;