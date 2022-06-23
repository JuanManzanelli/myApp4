import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar  />
      <ItemListContainer titulo="HolaMundo" />
      <ItemListContainer titulo="Plaza" />
      <ItemListContainer titulo="Sommier" />
      <ItemListContainer titulo="Queen" />
    </div>
  );
}

export default App;
