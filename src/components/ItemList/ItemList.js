import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ newData }) => {

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
