import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import PageHero from '../components/PageHero.jsx';
import WaButton from '../components/WaButton.jsx';
import WaFloat from '../components/WaFloat.jsx';
import Reveal from '../components/Reveal.jsx';
import { Link } from 'react-router-dom';
import './Infrastructure.css';

function ChainIcon({ type }) {
  const icons = {
    grown: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21v-9" />
        <path d="M12 13c-4.6 0-7-2.8-7-7 4.6 0 7 2.8 7 7Z" />
        <path d="M12 10c0-4.6 2.8-7 7-7 0 4.6-2.8 7-7 7Z" />
      </svg>
    ),

    processed: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 21V10l6 3V9l6 3V5h4v16H3Z" />
        <path d="M7 17h2" />
        <path d="M12 17h2" />
        <path d="M17 17h2" />
      </svg>
    ),

    packaged: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m4 7 8-4 8 4-8 4-8-4Z" />
        <path d="M4 7v10l8 4 8-4V7" />
        <path d="M12 11v10" />
        <path d="m8 5 8 4" />
      </svg>
    ),

    delivered: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21" />
        <path d="M12 3c-2.4 2.5-3.6 5.5-3.6 9S9.6 18.5 12 21" />
      </svg>
    ),
  };

  return (
    <span className="chain-icon">
      {icons[type]}
    </span>
  );
}

function ChainArrow() {
  return (
    <span className="chain-arrow" aria-hidden="true">
      <svg viewBox="0 0 54 18">
        <path d="M2 9h47" />
        <path d="m43 3 6 6-6 6" />
      </svg>
    </span>
  );
}

export default function Infrastructure() {
  return (
    <>
      <Navbar opaque />

      <PageHero
        photo="https://images.unsplash.com/photo-1588515724527-074a7a56616c?w=1600&q=80"
        overline="Our Infrastructure"
        title={
          <span className="infrastructure-hero-title">
            <span className="infrastructure-hero-line infrastructure-hero-line-one">
              From the soil,
            </span>

            <span className="infrastructure-hero-line infrastructure-hero-line-two">
              through every process,
            </span>

            <span className="infrastructure-hero-line infrastructure-hero-line-three">
              into the world.
            </span>
          </span>
        }
        lead={
          <span className="infrastructure-hero-lead">
            We cultivate, process, package and deliver cocoa through facilities
            managed under one standard, giving us greater control over quality,
            traceability and consistency.
          </span>
        }
      >
        <Reveal as="div" className="chain" delay={180}>
          <div className="chain-item">
            <div className="chain-step">
              <ChainIcon type="grown" />

              <span className="chain-step-copy">
                <small>Stage 01</small>
                <strong>Grown</strong>
              </span>
            </div>

            <ChainArrow />
          </div>

          <div className="chain-item">
            <div className="chain-step">
              <ChainIcon type="processed" />

              <span className="chain-step-copy">
                <small>Stage 02</small>
                <strong>Processed</strong>
              </span>
            </div>

            <ChainArrow />
          </div>

          <div className="chain-item">
            <div className="chain-step">
              <ChainIcon type="packaged" />

              <span className="chain-step-copy">
                <small>Stage 03</small>
                <strong>Packaged</strong>
              </span>
            </div>

            <ChainArrow />
          </div>

          <div className="chain-item chain-item-last">
            <div className="chain-step">
              <ChainIcon type="delivered" />

              <span className="chain-step-copy">
                <small>Stage 04</small>
                <strong>Delivered</strong>
              </span>
            </div>
          </div>
        </Reveal>
      </PageHero>

      

      <section
        className="section section-cream facility"
        id="factory"
      >
        <div className="container">
          <div className="split rev">
            <Reveal as="div">
              <p className="overline">Facility 02 · Nigeria</p>

              <h2
                className="h-section"
                style={{
                  color: 'var(--green)',
                  marginBottom: 20,
                }}
              >
                The Factory
              </h2>

              <p className="lead" style={{ marginBottom: 18 }}>
                Full cocoa processing under one roof, including powder, butter,
                nibs, husk and mass. Our factory transforms raw beans into
                finished ingredients without leaving our control.
              </p>

              <div className="tags">
                <span className="tag-outline">Cocoa Powder</span>
                <span className="tag-outline">Cocoa Butter</span>
                <span className="tag-outline">Nibs &amp; Husk</span>
                <span className="tag-outline">Cocoa Mass</span>
              </div>
            </Reveal>

            <Reveal as="div" className="split-photo">
              <img
                src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?w=1000&q=80"
                alt="THF cocoa processing factory in Nigeria"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section facility" id="packaging">
        <div className="container">
          <div className="split">
            <Reveal as="div">
              <p className="overline">Facility 03 · Nigeria</p>

              <h2
                className="h-section"
                style={{
                  color: 'var(--green)',
                  marginBottom: 20,
                }}
              >
                The Packaging Facility
              </h2>

              <p className="lead" style={{ marginBottom: 18 }}>
                Consumer and wholesale packaging, including 250g and 500g
                retail packs for Natkokoa and KokoaSkin, plus bulk formats for
                trade customers. Every order is sealed, labelled and shipped
                by us.
              </p>

              <div className="tags">
                <span className="tag-outline">250g &amp; 500g Retail</span>
                <span className="tag-outline">Bulk Formats</span>
                <span className="tag-outline">Export Ready</span>
              </div>
            </Reveal>

            <Reveal as="div" className="split-photo">
              <img
                src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=1000&q=80"
                alt="THF cocoa packaging facility in Nigeria"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <Reveal
          as="div"
          className="container"
          style={{ textAlign: 'center' }}
        >
          <h2
            className="h-section"
            style={{ marginBottom: 18 }}
          >
            Want to see the chain for yourself?
          </h2>

          <p
            className="lead"
            style={{ margin: '0 auto 32px' }}
          >
            Trade partners and distributors are welcome to request facility
            documentation or arrange a visit.
          </p>

          <div
            className="btn-row"
            style={{ justifyContent: 'center' }}
          >
            <WaButton waKey="trade">
              Talk to Our Trade Team
            </WaButton>

            <Link
              to="/trade"
              className="btn-outline btn-outline-light"
            >
              Trade &amp; B2B →
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
      <WaFloat waKey="general" />
    </>
  );
}