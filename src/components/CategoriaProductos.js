import React from 'react'
import { Link, useParams } from 'react-router-dom'

const CategoriasProductos = () => {

    const { id, tienda } = useParams();



    return (
        <div>
            <div className='inicioEdad-categoria'>
                <h3>Tienda</h3>
            </div>
            <div className='Categoria'>
                <Link to={'/tienda'}>
                    <div
                        className={"tienda" === tienda
                            ? "active"
                            : "no-active"}>
                        <p>Todo</p>
                    </div>
                </Link>
                <Link to={'/tienda/category/1'}>
                    <div className={"1" === id
                        ? "active"
                        : "no-active"}>
                        <p>Superior</p>
                    </div>
                </Link>
                <Link to={'/tienda/category/2'}>
                    <div className={"2" === id
                        ? "active"
                        : "no-active"}>
                        <p>Inferior</p>
                    </div>
                </Link>
                <Link to={'/tienda/category/3'}>
                    <div className={"3" === id
                        ? "active"
                        : "no-active"}>
                        <p>Calzados</p>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default CategoriasProductos;