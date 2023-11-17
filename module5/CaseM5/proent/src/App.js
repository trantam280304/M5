import { Route, Routes ,BrowserRouter} from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Detail from './pages/Detail';
import Home from './pages/Home';  
import Products from './components/Products';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;
