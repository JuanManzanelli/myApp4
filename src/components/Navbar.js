import './Navbar.css';
import Cartwidget from './CartWidget';
import  { Link }  from 'react-router-dom';
import imgLogo from '../assets/img/logo2.png';

import useCartContext from '../store/CartContext';


function Navbar(){
  const {contextFunction} = useCartContext();

  contextFunction();
  return (
  <header className='navbar'>
    <div>
    <Link to="/" >  
       <img className='logoNav' src={imgLogo} alt='logoNav' />
    </Link>  
    </div>
  
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