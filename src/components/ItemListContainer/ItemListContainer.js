import ItemCount from '../ItemCount/ItemCount'

function ItemListContainer() {
    function onAdd(count) {
        console.log(`cantidad ${count}`);
      }
      
    return (
        <>
        <h1>¡Bienvenid@!</h1>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        </>
    )
    }
    
    export default ItemListContainer