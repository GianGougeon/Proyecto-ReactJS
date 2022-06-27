import React, { useContext, useState } from 'react';
import { useMediaQuery } from 'beautiful-react-hooks';
import { CartContext } from '../components/context/CartContext';
import { Link } from 'react-router-dom';
import { handleLongText } from '../components/handleLongText';

import { MdDeleteForever } from 'react-icons/md';
import { GrFormSubtract, GrFormAdd } from 'react-icons/gr';
import { ImCross } from 'react-icons/im';
import { BsCheckLg } from 'react-icons/bs';



import Checkout from '../components/Checkout';


const Cart = () => {
    const { cartList, removeItem, clear, addSub, addMore, cartSubTotal, cartTotal, Confirmacion } = useContext(CartContext);
    const changeButton = useMediaQuery('(max-width: 556px)');
    const [checkout, setCheckout] = useState(false);
    const [activeTodo, setActiveTodo] = useState(false);

    // Boton para confirmar borrar todo el carrito
    const ConfirmacionTodo = () => {
        setActiveTodo(!activeTodo);
    }
    // boton para el cambio al checkout con un pequeño dlay
    const CheckoutButton = () => {
        setTimeout(() => {
            setCheckout(!checkout);
        }, 100);
    }
    return (
        <>
            <section className='Cart-Section container2'>
                <div className='row'>
                    <div className='col-sm-12 col-md-9 Cart-Section-01'>
                        <div className='Cart-Section-1'>
                            {changeButton ? <Link to={"/tienda"}>🡰</Link> : <Link to={"/tienda"}>🡰 Tienda</Link>}
                            <span>Mi carrito</span>
                            <div className={!checkout ? "cart-progress" : null}></div>
                            <span className={!checkout ? "cart-progress" : null}>Checkout</span>
                            <div className="cart-progress"></div>
                            <span className="cart-progress">Pago</span>
                        </div>
                        <div className='Cart-Section-1p2'>
                            <div>
                                <hr className='Cart-Section-hr' />
                                {!checkout
                                    ? <>{cartList.length === 0
                                        ? <p className='Cart-Section-1p2-em'>Su carrito se encuentra Vacío</p>
                                        : cartList.map((item) => (
                                            <div key={item.id}>
                                                <div className='Cart-items'>
                                                    <img src={item.img[0]} alt={item.titulo} />
                                                    <div>
                                                        <ul>
                                                            <li>
                                                                <Link to={`/tienda/item/${item.id}`}>
                                                                    <p className='Cart-items-titulo'>{changeButton ? handleLongText(item.titulo, 10) : item.titulo}</p>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {item.stock === 1
                                                        ? <div style={{ margin: "0 23px" }}><span style={{ borderRadius: "5px" }} className='Cart-itemCount'>{item.cantidad}</span></div>
                                                        : <div>
                                                            {item.cantidad !== 1
                                                                ? <button onClick={() => addSub(item)}><GrFormSubtract /></button>
                                                                : <button className='Cart-ItemCount-Button-Disable'><GrFormSubtract /></button>}
                                                            <span className='Cart-itemCount'>{item.cantidad}</span>
                                                            {item.stock !== item.cantidad
                                                                ? <button onClick={() => addMore(item)}><GrFormAdd /></button>
                                                                : <button className='Cart-ItemCount-Button-Disable'><GrFormAdd /></button>}
                                                        </div>
                                                    }
                                                    <div>
                                                        <span>
                                                            $U {item.precio}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        {item.active ? null : <button onClick={() => Confirmacion(item.id)}>x</button>}
                                                        {item.active
                                                            ? <div>
                                                                <button onClick={() => removeItem(item.id)}><BsCheckLg /></button>
                                                                <button onClick={() => Confirmacion(item.id)} ><ImCross /></button>
                                                            </div>
                                                            : null}
                                                    </div>
                                                </div>
                                                <hr className='Cart-Section-hr' />
                                            </div>))}
                                    </>
                                    : <>
                                        <Checkout />
                                    </>}
                            </div>
                        </div>
                        {!checkout
                            ? <>
                                {cartList.length >= 1 ? activeTodo
                                    ? null
                                    : <div className='Cart-Section-01-borrarTodo'>
                                        <button onClick={ConfirmacionTodo}><MdDeleteForever />Todo</button>
                                    </div>
                                    : null
                                }
                            </>
                            : null}
                        {cartList.length >= 1
                            ? activeTodo
                                ? <div className='Cart-Section-01-borrarTodoConfirm'>
                                    <span>¿Seguro?</span>
                                    <button onClick={clear}><BsCheckLg /></button>
                                    <button onClick={ConfirmacionTodo} ><ImCross /></button>
                                </div>
                                : null
                            : null
                        }
                    </div>
                    <div className='col-sm-12 col-md-3'>
                        <div className='Cart-Section-2'>
                            <span>Resumen de compra</span>
                            {cartList.length >= 1
                                ? <div className='Cart-Section-2-Montos'>
                                    <div>
                                        <p>SubTotal:</p>
                                        <span>$U {cartSubTotal}</span>
                                    </div>
                                    <div>
                                        <p>Total + IVA:</p>
                                        <span>$U {cartTotal}</span>
                                    </div>
                                </div>
                                : null}
                            <hr></hr>
                            {!checkout
                                ? <>
                                    {cartList.length >= 1
                                        ? <button
                                            onClick={CheckoutButton}
                                            className="cart-active">
                                            Continuar
                                        </button>
                                        : <button
                                            className="cart-no-active">
                                            Continuar
                                        </button>}
                                </>
                                : <button className="cart-cancel" onClick={CheckoutButton}>Cancelar</button>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart