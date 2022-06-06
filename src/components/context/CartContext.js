import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);



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

    // Remueve un item del carrito por su id
    const removeItem = (id) => {
        setCartList(cartList.filter((item) => item.id !== id));
    }
    // Vacia el carrito
    const clear = () => {
        setCartList([]);
    }



    return (
        /* estado global */
        <CartContext.Provider value={{ cartList, addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;
