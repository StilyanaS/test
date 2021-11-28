import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useContext, useState} from 'react';
import {Link} from 'react-router-dom'
import { CartContext } from "../../context/CartContext/CartContext";

const ItemDetail = ({item}) => {
  const test = useContext(CartContext);
  const [qtityAdded, setqtityAdded] = useState(false);
  function onAdd(quantity) {
    setqtityAdded(true);
    test.addToCart(item, quantity);
  }
  return (
    <Row className="mt-3">
      <Col>
        <Image
          className="product-img"
          src={item.image}
          rounded
        />
      </Col>
      <Col>
        <Card style={{ margin: "1rem" }} className='card'>
        <Card.Header as="h1" className='h1card'>{item.name}</Card.Header>
          <Card.Body>
            <Card.Title>Tu nueva raqueta</Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
          </Card.Body>
        </Card>
        {!qtityAdded ? (
        <ItemCount initial={1} stock={5} onAdd={onAdd} item={item}/>
        ) : (
          <Button variant="dark"> <Link to='/cart' className='btn-color'>Cart</Link></ Button>
        )

      }
      </Col>
    </Row>
  );
};

export default ItemDetail;
