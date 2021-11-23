import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import {Link} from 'react-router-dom'
const ItemDetail = ({getNewItem}) => {

  const [qtityAdded, setqtityAdded] = useState(false);
  function onAdd(count) {
    console.log(`cantidad ${count}`);
    setqtityAdded(true);
  }
  return (
    <Row className="mt-3">
      <Col>
        <Image
          className="product-img"
          src={getNewItem.image}
          rounded
        />
      </Col>
      <Col>
        <Card style={{ margin: "1rem" }} className='card'>
        <Card.Header as="h1" className='h1card'>{getNewItem.name}</Card.Header>
          <Card.Body>
            <Card.Title>Tu nueva raqueta</Card.Title>
            <Card.Text>
              {getNewItem.description}
            </Card.Text>
          </Card.Body>
        </Card>
        {!qtityAdded ? (
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        ) : (
          <Button variant="dark"> <Link to='/cart' className='btn-color'>Cart</Link></ Button>
        )

      }
      </Col>
    </Row>
  );
};

export default ItemDetail;
