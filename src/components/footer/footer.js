import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './../../img/logo-2.png'
import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className='container2'>
                <div className='row'>
                    <div className='col-sm-6 col-md-3 col-sm-12 Footer-row1'>
                        <div className='Footer-Logo'>
                            <Link to={"/"}><img src={Logo}></img></Link>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-3 col-sm-12 Footer-row2'>
                        <div className='Footer-Tienda'>
                            <div>
                                <h4>Tienda</h4>
                            </div>
                            <ul>
                                <li>
                                    <Link to={"/tienda"}>Todo</Link>
                                </li>
                                <li>
                                    <Link to={"/tienda/category/2"}>Prendas Inferior</Link>
                                </li>
                                <li>
                                    <Link to={"/tienda/category/1"}>Prendas Superior</Link>
                                </li>
                                <li>
                                    <Link to={"/tienda/category/3"}>Prendas Calzados</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-3 col-sm-12 Footer-row3'>
                        <div className='Footer-Contactanos'>
                            <div>
                                <h4>Nosotros</h4>
                            </div>
                            <div className='Footer-Contacto'>
                                <ul>
                                    <li>
                                        <Link className='Footer-Contacto' to={"/contacto"}>Contacto</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className='col-sm-6 col-md-3 col-sm-12 Footer-row4'>
                        <div className='Footer-Siguenos'>
                            <div>
                                <h4>Redes</h4>
                            </div>
                            <div className='Footer-Contactanos-Redes'>
                                <ul>
                                <li><a href='https://www.instagram.com/'><AiOutlineInstagram /></a></li>
                                <li><a href='https://www.facebook.com/'><AiFillFacebook /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Footer-Derechos'>
                    <p>Copyright © 2022 Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer