import { useEffect, useState } from "react";
import { fireStoreFetch } from "../utils/fireStoreFetch";
import ItemInicio from './ItemInicio'


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

    // 3 productos del array
    const ultimosProductos = (result) => {
        const productoReciente = result.slice(-3);
        if (result.length < 2) {
            productoReciente.shift();
        }
        setListaProductos(productoReciente)
    }

    return (
        <>
            {cargando
                ? <div className="dot-spin" />
                : <div className="div-tienda">
                    <div>
                        <div>
                            <div>
                                {listaProductos.map((productos) => <ItemInicio key={productos.id} producto={productos} />)}
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}
export default ItemListContainerReciente;