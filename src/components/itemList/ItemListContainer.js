import { fireStoreFetch } from "../utils/fireStoreFetch";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import CategoriasProductos from "../CategoriaProductos";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    //Variables de estado
    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const { idCategoria } = useParams();

    useEffect(() => {
        setCargando(true);
        fireStoreFetch(parseInt(idCategoria))
            .then(result => setListaProductos(result))
            .catch(err => console.log(err))
            .finally(() => setCargando(false))

    }, [idCategoria]);

    return (
        <>
            <CategoriasProductos /> {cargando
                ? <div className="ItemListContainerLoader"><div className="dot-spin" /></div>
                : <ItemList listaProductos={listaProductos} />}
        </>
    )
}
export default ItemListContainer;