import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';
import './ItemCount.css';
import Button from 'react-bootstrap/Button';

const ItemCount = ({initial, stock, onAdd}) => {
    const quantity = 0;
    const [count, setCount] = useState(1);
    function onIncr() {
        count < stock && setCount(count + 1);
    }
    function onDecr() {
        count > 1 && setCount(count - 1);
    }
    function handlerOnAdd() {
        onAdd(count)
        setCount(initial)
    }
    console.log(count);
    console.log(quantity);
    return (
        <Card style={{ width: '18rem', margin: 'auto'}}>
  <Card.Body>
    <Card.Title>Babolat Pure Strike</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <div className="buttons">
    <button onClick={onIncr}><FiPlus size={20} /></button>
    <input type="text" placeholder={count} disabled />
    <button onClick={onDecr}><FiMinus size={20} /></button>
    </div>
    <Button variant="dark" className="add-to-cart" onClick={handlerOnAdd}>Agregar</Button>
  </Card.Body>
</Card>
    )
}

export default ItemCount