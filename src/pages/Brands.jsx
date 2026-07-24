import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import PageHero from '../components/PageHero.jsx';
import WaButton from '../components/WaButton.jsx';
import WaFloat from '../components/WaFloat.jsx';
import Reveal from '../components/Reveal.jsx';
import { Link } from 'react-router-dom';
import './Brands.css';


export default function Brands() {
  return (
    <>
      <Navbar opaque />

      <PageHero
  photo="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=1600&q=80"
  overline="Our Brands"
  title={
    <>
      <span className="brands-title-top">
        Two <em>brands.</em>
      </span>

      <span className="brands-title-bottom">
        One honest source.
      </span>
    </>
  }
  lead="Everything we sell starts on our own farm — wellness food under Natkokoa, natural beauty under KokoaSkin."
/>

      {/* NATKOKOA */}
      <section className="natkokoa-section" id="natkokoa">
  <div className="container">
    <div className="natkokoa-grid">

      <Reveal as="div" className="natkokoa-copy">
        <div className="natkokoa-overline">
          <span>01</span>
          <p>Wellness Food</p>
          <i></i>
        </div>

        <h2 className="natkokoa-title">
          Nat
          <span>kokoa</span>
        </h2>

        <div className="natkokoa-divider">
          <span></span>
          <i>✦</i>
          <span></span>
        </div>

        <p className="natkokoa-lead">
          Pure, natural cocoa for everyday wellness. No additives, no shortcuts —
          just single-origin West African cocoa, processed and packaged in our
          own facilities.
        </p>

        <ul className="natkokoa-benefits">
          <li>
            <span className="natkokoa-benefit-number">01</span>

            <div>
              <strong>100% natural cocoa powder</strong>
              <p>Rich in antioxidants and flavanols</p>
            </div>
          </li>

          <li>
            <span className="natkokoa-benefit-number">02</span>

            <div>
              <strong>Available in 250g and 500g consumer packs</strong>
              <p>Designed for everyday use</p>
            </div>
          </li>

          <li>
            <span className="natkokoa-benefit-number">03</span>

            <div>
              <strong>Traceable from our farm to your cup</strong>
              <p>Complete transparency at every stage</p>
            </div>
          </li>

          <li>
            <span className="natkokoa-benefit-number">04</span>

            <div>
              <strong>Perfect for drinks, baking and smoothies</strong>
              <p>Natural, versatile and easy to enjoy</p>
            </div>
          </li>
        </ul>

        <div className="natkokoa-actions">
          <WaButton waKey="natkokoa">
            Order via WhatsApp
          </WaButton>

          <Link to="/products" className="natkokoa-products-link">
            <span>View Products</span>
            <i>→</i>
          </Link>
        </div>
      </Reveal>

      <Reveal as="div" className="natkokoa-image">
        <img
          src="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=1000&q=80"
          alt="Natkokoa natural cocoa powder products"
        />
      </Reveal>

    </div>
  </div>
</section>

      {/* KOKOASKIN */}
      <section className="kokoaskin-section" id="kokoaskin">
  <div className="container">
    <div className="kokoaskin-layout">

      <Reveal as="div" className="kokoaskin-visual">
        <span className="kokoaskin-vertical-text">
          Natural Beauty
        </span>

        <div className="kokoaskin-photo-frame">
          <img
            src="https://images.unsplash.com/photo-1556228578-626d423f9c86?w=1000&q=80"
            alt="KokoaSkin natural cocoa butter skincare"
          />

          <span className="kokoaskin-photo-number">
            02
          </span>
        </div>
      </Reveal>

      <Reveal as="div" className="kokoaskin-content">
        <p className="kokoaskin-overline">
          Cocoa-powered skincare
        </p>

        <h2 className="kokoaskin-title">
          Kokoa
          <span>Skin</span>
        </h2>

        <p className="kokoaskin-intro">
          Skincare powered by real cocoa butter, pressed from the same beans
          we grow. Deep moisture and natural nourishment for your everyday
          beauty ritual.
        </p>

        <div className="kokoaskin-ingredients">
          <p className="kokoaskin-list-title">
            Naturally made for
          </p>

          <ul>
            <li>
              <span>01</span>
              <p>Pure cosmetic-grade cocoa butter</p>
            </li>

            <li>
              <span>02</span>
              <p>Natural fatty acids and vitamin E</p>
            </li>

            <li>
              <span>03</span>
              <p>Face, body and hair care</p>
            </li>

            <li>
              <span>04</span>
              <p>No harsh or unnecessary additives</p>
            </li>
          </ul>
        </div>

        <div className="kokoaskin-actions">
          <WaButton waKey="kokoaskin">
            Order via WhatsApp
          </WaButton>

          <Link to="/products" className="kokoaskin-view-link">
            View Products
            <span>↗</span>
          </Link>
        </div>
      </Reveal>

    </div>
  </div>
</section>

      {/* CROSS-SELL / DIASPORA */}
      <section className="amazon-section">
  <div className="container">
    <Reveal as="div" className="amazon-content">
      <div className="amazon-overline">
        <span></span>
        <p>Shop Anywhere</p>
        <span></span>
      </div>

      <h2 className="amazon-title">
        From our farm
        <span>to your doorstep.</span>
      </h2>

      <p className="amazon-lead">
        Order directly on WhatsApp in Nigeria. For customers abroad, Natkokoa
        and KokoaSkin will soon be available on Amazon.
      </p>

      <div className="amazon-status">
        <span className="amazon-status-dot"></span>
        Amazon store launching soon
      </div>

      <div className="amazon-actions">
        <WaButton waKey="general">
          Order on WhatsApp
        </WaButton>

        <a href="#" className="amazon-link">
          <span>Shop on Amazon</span>
          <i>↗</i>
        </a>
      </div>
    </Reveal>
  </div>
</section>

      <Footer />
      <WaFloat waKey="general" />
    </>
  );
}
