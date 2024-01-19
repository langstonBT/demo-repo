import logo from './logo.svg';
import './App.css';
import About from "./Pages/About"
import Vans from "./Pages/Vans"
import Index from "./Pages/Index"
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Navbar from "./Componants/Navbar"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element = {<Index />} />
        <Route path="/about" element = {<About />} />
        <Route path="/vans" element = {<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
