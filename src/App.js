
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer';




function App() {
  return (
    
      
     

      <div className="App">
        
        <Navbar  />

        {/*<ItemLisContainer  />*/}

        <ItemDetailContainer id={4}  />
        <ItemDetailContainer id={6} />

      </div>
      
    
    
      
      
  
  );
}

export default App;
