import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './home';
import Layout from '../component/layout';
import Layoutfooter from '../component/layoutfooter';
import About from './about/about';
import Contact from './contact/contact';
import Product from './product/product';

function App() {
  return (
    <Router className="custom-router">
      <Layout />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='product' Component={Product} />
        <Route path='about' Component={About} />
        <Route path='contact' Component={Contact} />
      </Routes>
      <Layoutfooter />
    </Router>
  );
}

export default App;
