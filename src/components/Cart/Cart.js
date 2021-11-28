import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Cart.css";
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
const Cart = () => {
  const { cartList, totalQty, deleteItems, deleteItem } = useContext(CartContext);
const handleOnDelete = () => {
    deleteItems();
}
  return (
    <Container>
      <Row>
        <Col sm={8}>
          {cartList.length === 0 ? (
            <h1>Your cart is empty</h1>
          ) : (
            <Table bordered hover responsive="sm md" size="sm">
              <tbody>
                {cartList.map((item) => (
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
                        Total: {item.price * item.qty}
                      </div>
                    </td>
                    <td colSpan="2">
                      <div className="align-me">
                        <Button variant="dark" onClick={() => deleteItem(item.itemId)}>Eliminar</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
        <Col>
          <Card>
            <Card.Header>Total</Card.Header>
            <Card.Body>
              <Card.Title>Tienes {totalQty} productos en el carrito</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="dark" onClick={handleOnDelete}>Eliminar </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
