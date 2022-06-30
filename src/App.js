import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import ItemListContainer from './components/ItemListContainer';
import Contenedor from './components/Contenedor';
import Contador from './components/Contador';


function App() {
  return (
    
      <div>
      <Navbar  />
      <ItemListContainer titulo="HolaMundo" />
      
      </div>
  
  );
}

export default App;
