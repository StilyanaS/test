import Container from "react-bootstrap/Container";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import customFetch from "../../utils/customFetch";
import './ItemDetailContainer.css'
import { useParams } from "react-router";
import data from '../../utils/data'

const ItemDetailContainer = () => {

  const { itemId } = useParams();
  const [getNewItem, setgetNewItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    customFetch(2000, data.find((item) => item.id === parseInt(itemId)))
    .then((item) => setgetNewItem(item))
    .finally(() => setLoading(false))
  }, [itemId]) 

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
