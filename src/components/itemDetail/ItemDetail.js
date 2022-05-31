import React, { Component, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ item }) => {

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
                                <p>
                                    <b>Estado: </b>
                                    {item.estado}</p>
                            </div>
                            <div>
                                <p className='Descripcion-producto'>
                                    {item.descripcion}
                                </p>
                            </div>
                            <hr className='ItemDetail-hr'></hr>
                            <ItemCount stock={item.stock} initial={1} />
                            <div>
                                <hr className='ItemDetail-hr-2'></hr>
                                <div className='ItemDetail-extra'>
                                    <div>Métodos de pago</div>
                                    <Link to={"#!"} className='ItemDetail-extra-drop'>+</Link>
                                </div>
                                <hr className='ItemDetail-hr-2'></hr>
                                <div className='ItemDetail-extra'>
                                    <div>Envío</div>
                                    <Link to={"#!"} className='ItemDetail-extra-drop'>+</Link>
                                </div>
                                <hr className='ItemDetail-hr-2'></hr>
                                <div className='ItemDetail-extra'>
                                    <div>Devoluciones</div>
                                    <Link to={"#!"} className='ItemDetail-extra-drop'>+</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}
