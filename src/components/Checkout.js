import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import Swal from 'sweetalert2'

import { updateDoc, setDoc, serverTimestamp, collection, doc, increment } from "firebase/firestore";
import db from './utils/firebaseConfig';


const Checkout = () => {
    const { cartList, cartTotal, clear } = useContext(CartContext);
    const [buyer, setBuyer] = useState();
    const [form, setForm] = useState({});
    const navigate = useNavigate();


    const sAlert = (res) => {
        Swal.fire({
            icon: 'success',
            title: 'Gracias por tu compra.',
            text: `Número de orden: ${res}`,
            willClose: () => {
                clear();
                navigate("/");
            }
        })
    };

    /* Datos del Formulario */
    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        })
        const itemsData = cartList.map(item => ({
            id: item.id,
            title: item.titulo,
            precio: item.precio,
            quantity: item.cantidad,
        }));
        setForm({
            buyer: buyer,
            date: serverTimestamp(),
            total: cartTotal,
            items: itemsData,
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        Order()
    }


    const Order = () => {
        const fireStoreOrder = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, form);
            return newOrderRef;
        }
        fireStoreOrder()
            .then(res => sAlert(res.id))
            .catch(error => console.log(error));

        clear();

        cartList.forEach(async (element) => {
            const itemRef = doc(db, "productos", element.id);
            await updateDoc(itemRef, { stock: increment(-element.cantidad) });
        });
    }

    return (
        <div className='Checkout-div'>
            <p>Datos de contacto:</p>
            <form onSubmit={handleSubmit} className="Form">
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    pattern="[a-zA-Z]+"
                    title="Por favor, introduzca un Nombre"
                    required="required"
                    value={form.name}
                    onChange={handleChange}
                />
                <label htmlFor="nombre">Apellido:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    pattern="[a-zA-Z]+"
                    title="Por favor, introduzca un Apellido"
                    required="required"
                    value={form.lastName}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                    title="Por favor, introduzca un Email valido"
                    required="required"
                    value={form.email}
                    onChange={handleChange}
                />
                <label htmlFor="phone">Teléfono:</label>
                <input
                    type="number"
                    id="phone"
                    name="phone"
                    required="required"
                    value={form.phone}
                    onChange={handleChange}
                />
                <div className='submit-div'><button type="submit">Completar</button></div>
            </form>
        </div>)
}

export default Checkout;