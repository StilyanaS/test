import Container from "react-bootstrap/Container";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import './ItemDetailContainer.css'
import { useParams } from "react-router";
import { firestoreFetchItem } from "../../utils/firestoreFetch";


const ItemDetailContainer = () => {

  const { itemId } = useParams();
  const [getNewItem, setgetNewItem] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firestoreFetchItem(itemId)
    .then((item) => setgetNewItem(item))
    .finally(() => setLoading(false))
  }, [itemId]) 

  return (
    <>
      {loading ? (
        <div className='spinner'><Spinner animation="grow" variant="dark" /></div>
      ) : (
        <Container fluid>
          <ItemDetail item={getNewItem} />
        </Container>
      )}
    </>
  );
};

export default ItemDetailContainer;
