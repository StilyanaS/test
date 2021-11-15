import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './Item.css'

const Item = ({ item }) => {
  return (
    <Card style={{ width: "18" }}>
      <Card.Img variant="top"  />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Image src={item.image} alt='' fluid className='imageWidth'/>
        <Card.Text>
          {item.description}
          <p><strong>Precio: {item.price}</strong></p>
        </Card.Text>
        <Button variant="dark">Comprar</Button>
      </Card.Body>
    </Card>
  );
};

export default Item
