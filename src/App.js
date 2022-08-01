import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CartContextProvider} from "./store/CartContext";
import CartView from './components/CartView';


 

function App() {
  return (
      <div className="App">
       <CartContextProvider>
         <BrowserRouter>          
            <Navbar  />
            <Routes>
              <Route path="/" element={<ItemListContainer titulo="ItemList" />}/>
              <Route path="/category/:categoryid" element={<ItemListContainer titulo="Categoria de Productos" />} />
              <Route path="/colchon/:itemid" element={<ItemDetailContainer/>}/>
              <Route path="/cart" element={<CartView/>}/>
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
        
      </div>     
  
  );
}

export default App;
