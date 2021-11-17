import Container from "react-bootstrap/Container";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import customFetch from "../../utils/customFetch";
import './ItemDetailContainer.css'

const ItemDetailContainer = ({ item }) => {
  const [getNewItem, setgetNewItem] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    customFetch(4000, item)
      .then((item) => setgetNewItem(item))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <div class='spinner'><Spinner animation="grow" variant="dark" /></div>
      ) : (
        <Container fluid>
          <ItemDetail getNewItem={getNewItem} />
        </Container>
      )}
    </>
  );
};

export default ItemDetailContainer;
