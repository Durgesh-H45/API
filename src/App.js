import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spacecrafts from './pages/Spacecrafts';
import Launchers from './pages/Launchers';
import Navbar from './Components/Navbar';
import CustomerSatellite from './pages/CustomerSatellite';
import Centers from './pages/Centers';

function App() {
  return (
    
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Spacecrafts />} />
        <Route path="/Launchers" element={<Launchers />} />
        <Route path="/CustomerSatellite" element={<CustomerSatellite />} />
        <Route path="/Centers" element={<Centers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
