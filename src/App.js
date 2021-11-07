import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  function onAdd() {
    console.log(`cantidad ${count}`);
  }
  return (
    <div className="App">
      <NavBar />
      
      <ItemListContainer />
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </div>
  );
}

export default App;
