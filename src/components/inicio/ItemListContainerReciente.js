import { useEffect } from "react";
import { useState } from "react";
import ItemListReciente from "./ItemListReciente";
import { fireStoreFetch } from "../utils/fireStoreFetch";

const ItemListContainerReciente = () => {

    //Variables de estado
    const [listaProductos, setListaProductos] = useState([])
    const [cargando, setCargando] = useState(true)


    useEffect(() => {
        setCargando(true);
        fireStoreFetch()
            .then(result => ultimosProductos(result))
            .catch(err => console.log(err))
            .finally(() => setCargando(false))
    }, []);

    // ultimos 3 productos del array
    const ultimosProductos = (result) => {
        const productoReciente = result.slice(-3);
        if (result.length < 4) {
            productoReciente.shift();
        }

        setListaProductos(productoReciente)



        
    }


    return (
        <>
            {cargando
                ? <div className="dot-spin" />
                : <ItemListReciente listaProductos={listaProductos} />}
        </>
    )
}
export default ItemListContainerReciente;