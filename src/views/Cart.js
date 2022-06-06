import React, { useContext } from 'react';
import { useMediaQuery } from 'beautiful-react-hooks';
import { CartContext } from '../components/context/CartContext';
import { Link } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';


const Cart = () => {
    const { cartList, removeItem, clear } = useContext(CartContext);
    const changeButton = useMediaQuery('(max-width: 556px)');





    return (
        <>
            <section className='Cart-Section container2'>
                <div className='row'>
                    <div className='col-sm-12 col-md-9 Cart-Section-01'>
                        <div className='Cart-Section-1'>
                            {changeButton ? <Link to={"/"}>🡰</Link> : <Link to={"/"}>🡰 Volver</Link>}
                            <span>Mi carrito</span>
                            <div></div>
                            <span>Envío</span>
                            <div></div>
                            <span>Pago</span>
                        </div>
                        <div className='Cart-Section-1p2'>
                            <div>
                                <hr />
                                {cartList.length === 0
                                    ? <p className='Cart-Section-1p2-em'>Su carrito se encuentra Vacío</p>
                                    : cartList.map((item) => (
                                        <div key={item.id}>
                                            <div className='Cart-items'>
                                                <img src={item.imagenURL} alt={item.titulo} />
                                                <div>
                                                    <p>
                                                        {item.titulo}
                                                    </p>
                                                </div>
                                                <div>
                                                    <span className='Cart-itemCount'>x {item.cantidad}</span>
                                                </div>
                                                <div>
                                                    <span>
                                                        $U {item.precio}
                                                    </span>
                                                </div>
                                                <div>
                                                    <button onClick={() => removeItem(item.id)}>X</button>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>)
                                    )
                                }
                               
                            </div>
                            
                        </div>
                        {cartList.length >=1 ? <button onClick={clear}><MdDeleteForever width={40} />Todo</button> : null}
                    </div>
                    <div className='col-sm-12 col-md-3'>
                        <div className='Cart-Section-2'>
                            <span>Resumen de compra</span>
                            <hr></hr>
                            <button
                                className={cartList.length >= 1
                                    ? "cart-active"
                                    : "cart-no-active"}>
                                Comprar
                            </button>


                        </div>
                    </div>
                </div>
            </section>





        </>
    );
}

export default Cart