import { useState, useEffect } from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ data }) => {
  const [newData, setNewData] = useState([]);

  let getProducts = () => {
    return new Promise((resolve, reject) => {
      if (data.length > 0) {
        setTimeout (() => {
            resolve(data);
        },1500)
        
      } else {
        reject("Error");
      }
    });
  };

  useEffect(() => {
    getProducts()
    .then(data => setNewData(data));
    
  },[]);

  return (
    <div className='list-container'>
      <ul className="list-group list-group-horizontal">
        {newData.map((item) => (
          <li className="list-group-item w-25" key={item.id}>
            <Item item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ItemList;
