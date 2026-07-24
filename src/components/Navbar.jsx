import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import WaLink from './WaLink.jsx';
import "./Navbar.css";

const links = [
  { to: '/about', label: 'Our Story' },
  { to: '/brands', label: 'Our Brands' },
  { to: '/products', label: 'Products' },
  { to: '/infrastructure', label: 'Infrastructure' },
  { to: '/trade', label: 'Trade & B2B' },
];

/**
 * @param {boolean} opaque - true for interior pages (always solid nav).
 *                            false for the home page (transparent -> solid on scroll).
 * @param {string} ctaKey - WhatsApp message key for the top-right CTA button.
 * @param {string} ctaLabel - label for the top-right CTA button.
 */
export default function Navbar({ opaque = false, ctaKey = 'general', ctaLabel = 'Chat With Us' }) {
  const [solid, setSolid] = useState(opaque);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (opaque) return;
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [opaque]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
  }, [drawerOpen]);

  const navClass = ['site-nav', opaque ? 'opaque' : '', solid ? 'solid' : ''].filter(Boolean).join(' ');

  return (
    <>
      <nav className={navClass}>
        <Link to="/" className="nav-logo">
          THF<span>Cocoa</span>
        </Link>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <WaLink waKey={ctaKey} className="nav-cta">
            {ctaLabel}
          </WaLink>
          <button
            className={`nav-burger${drawerOpen ? ' open' : ''}`}
            aria-label="Menu"
            onClick={() => setDrawerOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`nav-drawer${drawerOpen ? ' open' : ''}`}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={() => setDrawerOpen(false)}>
          Home
        </NavLink>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            onClick={() => setDrawerOpen(false)}
          >
            {l.label === 'Our Brands' ? l.label : l.label === 'Products' ? 'Our Products' : l.label}
          </NavLink>
        ))}
        <Link to="/about#contact" className="drawer-small" onClick={() => setDrawerOpen(false)}>
          Contact Us
        </Link>
        <Link to="/legal" className="drawer-small" onClick={() => setDrawerOpen(false)}>
          Terms &amp; Privacy
        </Link>
      </div>
    </>
  );
}
