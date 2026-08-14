import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import WaLink from './WaLink.jsx';
import thfLogo from '../assets/images/thf_logo.png';
import './Navbar.css';

const links = [
  { to: '/about', label: 'Our Story' },
  { to: '/brands', label: 'Our Brands' },
  { to: '/products', label: 'Products' },
  { to: '/infrastructure', label: 'Infrastructure' },
  { to: '/trade', label: 'Trade & B2B' },
];

export default function Navbar({
  opaque = false,
  ctaKey = 'general',
  ctaLabel = 'Chat With Us',
}) {
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

    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const navClass = [
    'site-nav',
    opaque ? 'opaque' : '',
    solid ? 'solid' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <nav className={navClass}>
        <Link to="/" className="nav-logo">
          <img
            src={thfLogo}
            alt="THF Cocoa logo"
            className="nav-logo-icon"
          />

          <span className="nav-logo-name">
            THF<span>Cocoa</span>
          </span>
        </Link>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  isActive ? 'active' : undefined
                }
              >
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
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((o) => !o)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`nav-drawer${drawerOpen ? ' open' : ''}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'active' : undefined
          }
          onClick={() => setDrawerOpen(false)}
        >
          Home
        </NavLink>

        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) =>
              isActive ? 'active' : undefined
            }
            onClick={() => setDrawerOpen(false)}
          >
            {l.label === 'Products' ? 'Our Products' : l.label}
          </NavLink>
        ))}

        <Link
          to="/about#contact"
          className="drawer-small"
          onClick={() => setDrawerOpen(false)}
        >
          Contact Us
        </Link>

        <Link
          to="/legal"
          className="drawer-small"
          onClick={() => setDrawerOpen(false)}
        >
          Terms &amp; Privacy
        </Link>
      </div>
    </>
  );
}