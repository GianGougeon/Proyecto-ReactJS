import React, { useContext, useState } from 'react';
import { useMediaQuery } from 'beautiful-react-hooks';
import { CartContext } from '../components/context/CartContext';
import { Link } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import { GrFormSubtract, GrFormAdd } from 'react-icons/gr';
import { ImCross } from 'react-icons/im';
import { BsCheckLg } from 'react-icons/bs';


const Cart = () => {
    const { cartList, removeItem, clear, addSub, addMore, CartSubTotal, CartTotal } = useContext(CartContext);
    const changeButton = useMediaQuery('(max-width: 556px)');
    const [active, setActive] = useState(false);
    const [activeTodo, setActiveTodo] = useState(false);

    const Confirmacion = () => {
        setActive(!active);
    }
    const ConfirmacionTodo = () => {
        setActiveTodo(!activeTodo);
    }

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
                                <hr className='Cart-Section-hr' />
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
                                                {item.stock === 1
                                                    ? <div style={{ margin: "0 23px" }}><span style={{ borderRadius: "5px" }} className='Cart-itemCount'>{item.cantidad}</span></div>
                                                    : <div>
                                                        <button onClick={() => addSub(item)}><GrFormSubtract /></button>
                                                        <span className='Cart-itemCount'>{item.cantidad}</span>
                                                        <button onClick={() => addMore(item)}><GrFormAdd /></button>
                                                    </div>
                                                }
                                                <div>
                                                    <span>
                                                        $U {item.precio}
                                                    </span>
                                                </div>
                                                <div>

                                                    {active ? null : <button onClick={Confirmacion}>X</button>}
                                                    {active
                                                        ? <div>
                                                            <button onClick={() => removeItem(item.id)}><BsCheckLg /></button>
                                                            <button onClick={Confirmacion} ><ImCross /></button>
                                                        </div>
                                                        : null}
                                                </div>
                                            </div>
                                            <hr className='Cart-Section-hr' />
                                        </div>))}
                            </div>
                        </div>
                        {cartList.length >= 1 ? activeTodo
                            ? null
                            : <div className='Cart-Section-01-borrarTodo'>
                                <button onClick={ConfirmacionTodo}><MdDeleteForever />Todo</button>
                            </div>
                            : null
                        }

                        {cartList.length >= 1 ? activeTodo
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
                                        <span>$U {CartSubTotal}</span>
                                    </div>
                                    <div>
                                        <p>Total + IVA:</p>
                                        <span>$U {CartTotal}</span>
                                    </div>
                                </div>
                                : null}
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