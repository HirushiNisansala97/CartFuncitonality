import logo from './logo.svg';
import './App.css';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';
import PrescriptionUpload from './pages/shoppingCart/PrescriptionUpload';
import PharmacistDahsBoard from './pages/shoppingCart/PharmacistDashBoard';
import Checkout from './pages/shoppingCart/Checkout';
//import { Link } from 'react-router-dom';

const App =()=>{
  return (
      <>
      
        <div className="App">
        {/* <Link to='/proceedToCheckout'>Proceed To Checkout</Link>
        <Link to="/userProfile">User Account</Link>  */}
          {/* <ShoppingCart/> 
          <PrescriptionUpload/> */}
          {/* <PharmacistDahsBoard/> */}
          <Checkout/>
        </div>
      </>
    );
}

export default App;
