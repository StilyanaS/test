import React from "react";

const CartForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Tu email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="text" placeholder="Teléfono" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>
      <Button variant="dark" type="submit">
        Finalizar compra
      </Button>
    </Form>
  );
};

export default CartForm;
