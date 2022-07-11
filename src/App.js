import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom";





function App() {
  return (
      <div className="App">

        <BrowserRouter>
            <Navbar  />
            <Routes>
              <Route path="/" element={<ItemListContainer titulo="ItemList" />}  />
              <Route path="/category/:categoryid" element={<ItemListContainer titulo="Categoria de Productos" />} />
              <Route path="/colchon/:itemid" element={<ItemDetailContainer/>} />
            </Routes>
        </BrowserRouter>
    
        
      </div>     
  
  );
}

export default App;
