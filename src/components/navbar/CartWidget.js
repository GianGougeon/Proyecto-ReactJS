import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
    const { cartWidgetNumber } = useContext(CartContext);


    return (
        <>
            <Link to={"/cart"}>
                <div className="Cart-div">
                    <BsFillCartFill />
                    {cartWidgetNumber === 0
                        ? null
                        : <span className="BsFillCartFill-number">
                            {cartWidgetNumber}
                          </span>}
                </div>
            </Link>
        </>
    )
}
export default CartWidget;