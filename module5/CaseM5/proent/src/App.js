import { Route, Routes ,BrowserRouter} from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Detail from './pages/Detail';
import Home from './pages/Home';  
import Products from './components/Products';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/register" element={<Register />} />

      </Routes>
      <ToastContainer />
    
    </div>
  );
}

export default App;
