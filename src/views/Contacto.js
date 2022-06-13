import React from 'react'
import { FaTruck } from 'react-icons/fa';
import { AiFillCreditCard } from 'react-icons/ai';
import { GiCardboardBoxClosed, GiReceiveMoney } from 'react-icons/gi';


const Contacto = () => {
        return (
            <section className='container Section-Contacto'>
                <h2>Hola, <br></br>¿en qué podemos ayudarte?</h2>
                <div>
                    <p>¿Buscas respuestas? Nuestra sección de ayuda es la manera más rápida de resolver cualquier consulta. Aquí puedes ver el seguimiento de un envío, cancelar un pedido o gestionar una devolución. También encontrarás información sobre muchos temas, incluyendo las formas de pago.</p>
                </div>
                <div className='row'>
                    <h3 className='Contacto-Div-h'>Lo más consultado:</h3>
                    <div className='col-md-6'>
                        <ul>
                            <li><a href='#!'>Formas de pago</a></li>
                            <li><a href='#!'>Pago contra reembolso</a></li>
                        </ul>
                    </div>
                    <div className='col-md-6'>
                        <ul>
                            <li><a href='#!'>Seguimiento del pedido</a> </li>
                            <li><a href='#!'>Cómo recibir el dinero de una devolución</a></li>
                        </ul>
                    </div>
                </div>
                <div className='Contacto-Div2'>
                    <h3 className='Contacto-Div-h'>Busca respuestas por categorías:</h3>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div>
                                <FaTruck />
                                <div>
                                    <h3>Envío y entrega</h3>
                                    <ul>
                                        <li><a href='#!'>Seguimiento del pedido</a></li>
                                        <li><a href='#!'>Plazos de entrega del paquete</a></li>
                                        <li><a href='#!'>Gastos de envío</a></li>
                                        <li><a href='#!'>Modalidades de entrega</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div>
                                <GiReceiveMoney />
                                <div>
                                    <h3>Devolución y reembolso</h3>
                                    <ul>
                                        <li><a href='#!'>Cómo devolver un artículo</a></li>
                                        <li><a href='#!'>Artículo defectuoso</a></li>
                                        <li><a href='#!'>Cómo recibir el dinero de una devolución</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div>
                                <GiCardboardBoxClosed />
                                <div>
                                    <h3>Pedido</h3>
                                    <ul>
                                        <li><a href='#!'>Cancelar artículo/pedido</a></li>
                                        <li><a href='#!'>Artículos partner</a></li>
                                        <li><a href='#!'>Artículo defectuoso</a></li>
                                        <li><a href='#!'>Sostenibilidad</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div>
                                <AiFillCreditCard />
                                <div>
                                    <h3>Pago</h3>
                                    <div className='Contacto-Center'>
                                        <ul>
                                            <li><a href='#!'>Pago contra reembolso</a></li>
                                            <li><a href='#!'>Pago con tarjeta de crédito</a></li>
                                            <li><a href='#!'>Formas de pago</a></li>
                                            <li><a href='#!'>Pago con tarjeta de débito</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    export default Contacto