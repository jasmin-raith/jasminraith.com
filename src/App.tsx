import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Impressum from './Impressum'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Impressum" element={<Impressum />} />
      </Routes>
    </Router>
  );
}

export default App
