import './Navbar.css';
import Cartwidget from './CartWidget';


function Navbar() {
  return (

  <header className='navbar'>
    <button>My Sleep</button>
    <p>Catalogo</p>
    <p>Contacto</p>
    <a src="#">Tienda</a>

    <div>
     <Cartwidget  />
    </div>

  </header>
  );
}

export default Navbar;