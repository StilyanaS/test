import ItemList from "../ItemList/ItemList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import customFetch from "../../utils/customFetch";
import { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner'

function ItemListContainer({data}) {
  const [newData, setNewData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    customFetch(2000,data)
    .then(data => setNewData(data))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  },[data]);

  return (
    <Container>
      {loading ? (
        <div class='spinner'><Spinner animation="grow" variant="dark" /></div>
      ) : (
      <Row>
        <Col>
          <ItemList newData={newData}/>
        </Col>
      </Row>
      )}
    </Container>
  );
}

export default ItemListContainer;
