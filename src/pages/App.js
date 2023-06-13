import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
