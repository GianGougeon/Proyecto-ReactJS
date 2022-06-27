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
        : listaProductos.filter((item) => item.titulo.toLowerCase().includes(search.toLocaleLowerCase()))

    return (
        <>
            <CategoriasProductos />
            <div className="form__group ItemListContainer-serach">
                <input value={search} onChange={searcher} type="input" className="ItemListContainer-input" placeholder="Buscar.." />
                <label className="ItemListContainer-label">Busqueda de productos...</label>
            </div>
            {
                cargando
                    ? <div className="ItemListContainerLoader"><div className="dot-spin" /></div>
                    : <>
                        {
                            !results.length
                                ? <div className="ItemListContainer-Res">
                                    <p>Sin resultados...</p>
                                </div>
                                : <ItemList listaProductos={results} />
                        }
                    </>
            }
        </>
    )
}
export default ItemListContainer;