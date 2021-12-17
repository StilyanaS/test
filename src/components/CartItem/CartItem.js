import React from 'react'
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/esm/Button";
import {CartContext} from '../../context/CartContext/CartContext'
import {useContext} from 'react'

const CartItem = (item) => {

    const contextCart = useContext(CartContext);
    console.log('Esto es item',item.itemId);
    return (
        <tr key={item.itemId}>
                    <td>
                      <div className="align-me">3</div>
                    </td>
                    <td className="w-20">
                      <Image src={item.image} className="cart-photo" />
                    </td>
                    <td colSpan="2">
                      {" "}
                      <div className="align-me">
                        {" "}
                        <h3>{item.name}</h3>
                      </div>
                      <div className="align-me">
                        <p>
                          {item.qty} <span className="span-space">x</span>
                          {item.price}
                        </p>
                      </div>
                    </td>
                    <td colSpan="2">
                      {" "}
                      <div className="align-me">
                        {/* Total: {contextCart.calcTotalPerItem(item.itemId)} */}
                      </div>
                    </td>
                    <td colSpan="2">
                      <div className="align-me">
                        <Button
                          variant="dark"
                          onClick={() => contextCart.deleteItem(item.itemId)}
                        >
                          Eliminar
                        </Button>
                      </div>
                    </td>
                  </tr>
    )
}

export default CartItem
