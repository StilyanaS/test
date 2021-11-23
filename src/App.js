import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailcontainer'
import Cart from './components/Cart/Cart'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
      <Route path='/category/:categoryName' element={<ItemListContainer />}/>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/about' element={<p>About</p>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
      </BrowserRouter>
    
  );
}

export default App;
