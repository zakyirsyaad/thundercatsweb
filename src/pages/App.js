import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './home';
import Shop from './shop';
import Layout from '../component/layout';

function App() {
  return (
    <Router className="custom-router">
      <Layout />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='shop' Component={Shop} />
      </Routes>
    </Router>
  );
}

export default App;
