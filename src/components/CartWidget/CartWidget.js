import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './CartWidget.css'
const CartWidget = () => {
    return (
        <div>
           <AiOutlineShoppingCart size={30}/>
           <div className='cartCount'><span>1</span></div>
        </div>
    )
}

export default CartWidget
