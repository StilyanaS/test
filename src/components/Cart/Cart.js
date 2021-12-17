import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import Table from "react-bootstrap/Table";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Cart.css";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import { collection, doc, setDoc, updateDoc, increment } from "firebase/firestore";
import db from "../../utils/firebaseConfig";
import CartItem from '../CartItem/CartItem'

const Cart = () => {
  const {
    cartList,
    totalQty,
    deleteItems,
    deleteItem,
    calcTotalPerItem,
    calcTotal,
  } = useContext(CartContext);
  const handleOnDelete = () => {
    deleteItems();
  };

  const createOrder = () => {
    let order = {
      buyer: {
        name: "Buyer",
        phone: "299 999 999",
        email: "tucorreo@gmail.com",
      },
      items: cartList.map((item) => ({
        id: item.itemId,
        title: item.name,
        price: item.price,
      })),
      total: calcTotal(),
      date: Date().toLocaleString()
    };

    let createNewOrder = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };

    createNewOrder()
      .then((res) => alert(res.id))
      .catch((err) => console.log(err));

    cartList.forEach(async(item) => {
      const itemRef = doc(db, "products", item.itemId);
      await updateDoc(itemRef, {
        stock: increment(-item.qty)
      });
    });

    handleOnDelete();
  };

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
                  <CartItem item={item}/>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
        <Col>
          <Card>
            <Card.Header>
              Tienes {totalQty()} productos en el carrito
            </Card.Header>
            <Card.Body>
              <Card.Title>Total: {calcTotal()} euros</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="dark" onClick={createOrder}>
                Finalizar compra{" "}
              </Button>
              <Button variant="dark" onClick={handleOnDelete}>
                Eliminar{" "}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;