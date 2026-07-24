import { Link } from 'react-router-dom';
import WaLink from './WaLink.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-logo">
          THF<span>Cocoa</span>
        </div>
        <p className="footer-tagline">
          Temple Health &amp; Farms · West African cocoa — grown, processed, packaged and delivered to the world.
        </p>
        <div className="footer-cols">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/brands">Our Brands</Link></li>
              <li><Link to="/infrastructure">Infrastructure</Link></li>
              <li><Link to="/trade">Trade &amp; B2B</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Products</h4>
            <ul>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/brands#natkokoa">Natkokoa</Link></li>
              <li><Link to="/brands#kokoaskin">KokoaSkin</Link></li>
              <li><Link to="/trade">Bulk Ingredients</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get In Touch</h4>
            <ul>
              <li><WaLink waKey="contact">WhatsApp</WaLink></li>
              <li><Link to="/about#contact">Contact Us</Link></li>
              <li><WaLink waKey="distributor">Become a Distributor</WaLink></li>
              <li><WaLink waKey="trade">Trade Enquiries</WaLink></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Shop &amp; Social</h4>
            <ul>
              {/* REPLACE hrefs with live links */}
              <li><a href="#">Shop on Amazon</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Temple Health and Farms Ltd. All rights reserved.</span>
          <span>
            <Link to="/legal#terms">Terms &amp; Conditions</Link> · <Link to="/legal#privacy">Privacy Policy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
