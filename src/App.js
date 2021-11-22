import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailcontainer'
function App() {
  // let item = {
  //   id: 1,
  //   name: "Babolat Pure Aero Rafa",
  //   description:
  //     "Desde hace más de 20 años, la Pure Drive 300 g, modelo emblemático de la marca francesa Babolat",
  //   image:
  //     "https://www.tennispro.es/media/catalog/product/cache/7/thumbnail/1200x/9df78eab33525d08d6e5fb8d27136e95/1/0/101455_1_17.jpg?q=80&sw=640",
  //   price: 100,
  // }
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Routes>
      <Route path='/category/:categoryName' element={<ItemListContainer />}/>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path='/about' element={<p>About</p>}/>
      <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>

      </Routes>
    </div>
      </BrowserRouter>
    
  );
}

export default App;
