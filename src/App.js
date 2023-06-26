import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './styles/style.css';



const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<> <Home /> <Footer /> </>}/> 
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
    </BrowserRouter>
  )
}

export default App