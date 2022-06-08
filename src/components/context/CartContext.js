import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    // localStorage
    const cartStorage = JSON.parse(localStorage.getItem('cart'))
    // si esta vacio, lo inicializo con un array y lo guarda
    // si no esta vacio, lo carga
    const [cartList, setCartList] = useState(!cartStorage ? [] : cartStorage)

    //useEffect
    useEffect(() => {
            localStorage.setItem("cart", JSON.stringify(cartList))
 }, [cartList])

    //Agrega el producto
    const addItem = (item, setCantidad) => {
        const exist = cartList.find((cartItem) => cartItem.id == item.id)
        if (exist) {
            // si son iguales mapea el producto y le suma la cantidad
            // si no son iguales mapea el producto nuevo y le asigna la cantidad
            setCartList(cartList.map((cartItem) => cartItem.id === item.id
                ?
                { ...cartItem, cantidad: cartItem.cantidad + setCantidad }
                : cartItem))
        } else {
            setCartList([...cartList, { ...item, cantidad: setCantidad }])
        }
    }

    //agrega items dentro del carrito
    const addMore = (item) => {
        item.stock > item.cantidad ? addItem(item, 1) : alert("No hay suficiente stock")
    }

    // resta items dentro del carrito
    const addSub = (item) => {
        const exist = cartList.find((cartItem) => cartItem.id === item.id)
        if (exist.cantidad === 1) {
            removeItem(item)
        } else {
            setCartList(cartList.map((cartItem) => cartItem.id === item.id
                ?
                { ...cartItem, cantidad: cartItem.cantidad - 1 }
                : cartItem))
        }
    }

    // Remueve un item del carrito por su id
    const removeItem = (id) => {
        setCartList(cartList.filter((item) => item.id !== id));
    }

    // Vacia el carrito
    const clear = () => {
        setCartList([]);
    }

    // Total de cantidad de items en el carrito
    const CartWidgetNumber = cartList.reduce((cantidad, cartItem) => cantidad + cartItem.cantidad, 0)
    // Subtotal de los items en el carrito
    const CartSubTotal = cartList.reduce((subtotal, cartItem) => subtotal + cartItem.precio * cartItem.cantidad, 0)
    // Total + iva
    const CartTotal = (CartSubTotal * 1.22).toFixed(0)



    return (
        /* estado global */
        <CartContext.Provider value={{ cartList, addItem, removeItem, clear, CartWidgetNumber, addMore, addSub, CartSubTotal, CartTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
