import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ItemListContainer({data}) {
  function onAdd(count) {
    console.log(`cantidad ${count}`);
  }

  return (
    <Container>
      <Row>
        <Col>
          <ItemList data={data}/>
          <ItemCount initial={1} stock={5} onAdd={onAdd} />
        </Col>
      </Row>
    </Container>
  );
}

export default ItemListContainer;
