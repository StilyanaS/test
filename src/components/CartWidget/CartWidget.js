import React, { useContext } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './CartWidget.css';
import {CartContext} from '../../context/CartContext/CartContext';
const CartWidget = () => {
const {cartList, totalQty} = useContext(CartContext);

    return (
        <div>
           <AiOutlineShoppingCart size={30}/>
           {cartList.length > 0 &&
           <div className='cartCount'><span>{totalQty()}</span></div>}
        </div>
    )
}

export default CartWidget
