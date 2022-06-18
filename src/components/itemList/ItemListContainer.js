import { fireStoreFetch } from "../utils/fireStoreFetch";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import CategoriasProductos from "../CategoriaProductos";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    //Variables de estado
    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [search, setSearch] = useState("");
    const { idCategoria } = useParams();


    useEffect(() => {
        setCargando(true);
        fireStoreFetch(parseInt(idCategoria))
            .then(result => setListaProductos(result))
            .catch(err => console.log(err))
            .finally(() => setCargando(false))

    }, [idCategoria]);

    // funcion busqueda
    const searcher = (e) => {
        setSearch(e.target.value)
    }
    // filtrado
    const results = !search
        ? listaProductos
        : listaProductos.filter((dato) => dato.titulo.toLowerCase().includes(search.toLocaleLowerCase()))

    return (
        <>
            <CategoriasProductos />
            <div class="form__group field">
                <input value={search} onChange={searcher} type="input" className="form__field" placeholder="Name" />
                <label className="form__label">Busqueda de productos...</label>
            </div>
            {
                cargando
                    ? <div className="ItemListContainerLoader"><div className="dot-spin" /></div>
                    : <ItemList listaProductos={results} />
            }
        </>
    )
}
export default ItemListContainer;