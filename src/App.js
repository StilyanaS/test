import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar';
import data from './data'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer data={data}/>
      
    </div>
  );
}

export default App;
