import './Navbar.css';
import Cartwidget from './CartWidget';
import  { Link }  from 'react-router-dom';


import useCartContext from '../store/CartContext';


function Navbar(){
  const {contextFunction} = useCartContext();

  contextFunction();
  return (
  <header className='navbar'>
  <Link to="/" className='width=120'> 
  <img src='./logo2' alt=''></img>
  </Link>
   <Link to="/category/Low">Low</Link>
   <Link to="/category/Medium">Medium</Link>
   <Link to="/category/High">High</Link>

    <div>
     <Cartwidget  />
    </div>

  </header>
  );
}

export default Navbar;