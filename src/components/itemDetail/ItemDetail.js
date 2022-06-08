import React, { useState, useContext } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'
import { GrFormSubtract, GrFormAdd } from 'react-icons/gr';
import MetodoDePago from '../../img/metodosdepago.png';

export const ItemDetail = ({ item }) => {
    const [ItemChek, setItemChek] = useState(0);
    const { addItem } = useContext(CartContext);
    const [pago, setPago] = useState(false);
    const [envio, setEnvio] = useState(false);
    const [devoluciones, setDevoluciones] = useState(false);

    const onCheck = (quantity) => {

        if (quantity === 0) {
            return null
        } else {
            alert("Agregado: " + quantity)
            setItemChek(quantity);
            addItem(item, quantity);
        }
    }
    const onPago = () => {
        setPago(!pago);
    }
    const onEnvio = () => {
        setEnvio(!envio);
    }
    const onDevoluciones = () => {
        setDevoluciones(!devoluciones);
    }

    return (
        <section className='ItemDetail'>
            {/* indice */}
            <div className='indice-ItemDetail'>
                <ul className="indice-estructura">
                    <li>
                        <Link to={"/"}>Inicio</Link>
                    </li>
                    <li>
                        <span>&gt;</span>
                        <Link to={"/tienda"}>Tienda</Link>
                    </li>
                    <li>
                        <span>&gt;</span>
                        <strong>{item.titulo}</strong>
                    </li>
                </ul>
            </div>

            <div className='container ItemDetail-c'>
                <div className='row'>
                    {/* Carousel columna */}
                    <div className='col-sm-12 col-md-6'>
                        <Carousel className='carousel'>
                            <div>
                                {/* img1 */}
                                <img src={item.imagenURL} alt={item.titulo} />
                            </div>
                            <div>
                                {/* img2 */}
                                <img src={item.imagenURL2} alt={item.titulo} />
                            </div>
                            <div>
                                {/* img2 */}
                                <img src={item.imagenURL3} alt={item.titulo} />
                            </div>
                        </Carousel>
                    </div>
                    {/* Informacion columna */}
                    <div className="col-sm-12 col-md-6 ItemDetail-col2">
                        <div className='ItemDetail-col2-container'>
                            <div>
                                <h2 className='Titulo-producto'>{item.titulo}</h2>
                            </div>
                            <hr className='ItemDetail-hr'></hr>
                            <div>
                                <span className='Precio-producto'>UYU$ {item.precio}</span>
                            </div>
                            <div>
                                <p className='Descripcion-producto'>
                                    {item.descripcion}
                                </p>
                            </div>
                            <hr className='ItemDetail-hr'></hr>
                            {ItemChek === 0
                                ? <ItemCount stock={item.stock} initial={ItemChek} onCheck={onCheck} />
                                : <div className='ItemCount-Check'>
                                    <ul>
                                        <li><Link to={"/cart"}>
                                            <button>Ir al carrito</button>
                                        </Link>
                                        </li>
                                        <li><Link to={"/tienda"}>
                                            <button>Seguir comprando</button>
                                        </Link></li>
                                    </ul>
                                </div>}
                            <div>
                                {/* Métodos de pago */}
                                <hr className='ItemDetail-hr-2'></hr>
                                <div className='ItemDetail-extra'>
                                    <div>Métodos de pago</div>
                                    <button onClick={onPago} className='ItemDetail-extra-drop'>{pago ? <GrFormSubtract /> : <GrFormAdd />}</button>
                                </div>
                                {pago ? <div className='ItemDetail-extra-dropdown'><img src={MetodoDePago}></img></div> : null}
                                {/* Envío */}
                                <hr className='ItemDetail-hr-2'></hr>
                                <div className='ItemDetail-extra'>
                                    <div>Envío</div>
                                    <button onClick={onEnvio} className='ItemDetail-extra-drop'>{envio ? <GrFormSubtract /> : <GrFormAdd />}</button>
                                </div>
                                {envio ? <p className='ItemDetail-extra-dropdown'>
                                    Envío a domicilio: $120
                                    <br />
                                    Retiro desde nuestro Local: Gratis</p> : null}
                                {/* Devoluciones */}
                                <hr className='ItemDetail-hr-2'></hr>
                                <div className='ItemDetail-extra'>
                                    <div>Devoluciones</div>
                                    <button onClick={onDevoluciones} className='ItemDetail-extra-drop'>{devoluciones ? <GrFormSubtract /> : <GrFormAdd />}</button>
                                </div>
                                {devoluciones ? <p className='ItemDetail-extra-dropdown'>
                                    Podrás pedir la devolución hasta 48 hs. luego de recibir el artículo. Para eso nos tienes que escribir a <b>infoLenuSecond@Lenu.com</b> solicitando la devolución.
                                </p> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}
