import ItemList from "../ItemList/ItemList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router";
import {firestoreFetch} from "../../utils/firestoreFetch";


function ItemListContainer() {
  const [newData, setNewData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();
  useEffect(() => {
      
    firestoreFetch(categoryName)
    .then(result => setNewData(result))
    .catch(err => console.log(err))
    .finally(() => setLoading(false));
  }, [categoryName]);

  return (
    <Container fluid>
      {loading ? (
        <div className="spinner">
          <Spinner animation="grow" variant="dark" />
        </div>
      ) : (
        <Row>
          <Col xs={6} md={4}>
            <ItemList newData={newData} />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default ItemListContainer;
