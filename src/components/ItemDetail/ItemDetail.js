import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import Card from 'react-bootstrap/Card';

const ItemDetail = ({getNewItem}) => {
  function onAdd(count) {
    console.log(`cantidad ${count}`);
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
        <Card style={{ margin: "1rem" }}>
        <Card.Header as="h1">{getNewItem.name}</Card.Header>
          <Card.Body>
            <Card.Title>Babolat Pure Strike</Card.Title>
            <Card.Text>
              {getNewItem.description}
            </Card.Text>
          </Card.Body>
        </Card>
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
      </Col>
    </Row>
  );
};

export default ItemDetail;
