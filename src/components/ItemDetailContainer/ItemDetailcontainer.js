import Container from "react-bootstrap/Container";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

const ItemDetailContainer = ({ item }) => {
  const [getNewItem, setgetNewItem] = useState({});
  const [loading, setLoading] = useState(true);

  let getItem = () => {
    return new Promise((resolve, reject) => {
      if (item) {
        setTimeout(() => {
          resolve(item);
        }, 2000);
        setLoading(false);
      } else {
        reject("Error");
      }
    });
  };

  useEffect(() => {
    getItem().then((item) => setgetNewItem(item), console.log(`Loading ${loading} `));
  }, [item]);

  return (
    <Container fluid>
      {loading && <Spinner />}
      {!loading && <ItemDetail getNewItem={getNewItem} />}
    </Container>
  );
};

export default ItemDetailContainer;
