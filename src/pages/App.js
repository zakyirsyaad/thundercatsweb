import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './home';
import Layout from '../component/layout';
import Layoutfooter from '../component/layoutfooter';
import About from './about/about';
import Contact from './contact/contact';
import Product from './product/product';
import DetailProduct from './product/detailproduct';
import { useState } from 'react';
import Cart from './cart/cart';
import { ToastContainer } from 'react-toastify';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router className="custom-router">
      <ToastContainer />
      <Layout />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<DetailProduct addToCart={addToCart} />} />
        <Route path='/cart' element={<Cart cart={cart} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Layoutfooter />
    </Router>
  );
}

export default App;

