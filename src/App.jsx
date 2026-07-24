import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Brands from './pages/Brands.jsx';
import Products from './pages/Products.jsx';
import Infrastructure from './pages/Infrastructure.jsx';
import Trade from './pages/Trade.jsx';
import Legal from './pages/Legal.jsx';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Wait a tick for the new page's DOM to render before scrolling to the anchor
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/products" element={<Products />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </>
  );
}
