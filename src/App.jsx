import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Brands from "./pages/Brands";
import Products from "./pages/Products";
import Infrastructure from "./pages/Infrastructure";
import Trade from "./pages/Trade";
import Legal from "./pages/Legal";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/products" element={<Products />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;