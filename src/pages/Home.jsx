import "./Home.css";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import WaButton from '../components/WaButton.jsx';
import WaFloat from '../components/WaFloat.jsx';
import Reveal from '../components/Reveal.jsx';


export default function Home() {
  return (
    <>
      <Navbar opaque={false} />

      {/* Hero section */}
      <header className="hero">
        <div className="hero-photo"></div>

        <div className="hero-content container">
          <div className="hero-text">
            <h1 className="hero-h1">
              <span style={{ '--delay': '0.15s' }}>West African Cocoa.</span>
              <span style={{ '--delay': '0.3s' }}>Pure. Traceable.</span>
              <span style={{ '--delay': '0.45s' }}>Real Hands.</span>
            </h1>

            <p className="hero-sub">
              We own the farm, the factory and the packaging line, delivering
              premium cocoa to homes and businesses worldwide.
            </p>

            <div className="btn-row hero-buttons">
              <WaButton waKey="general" className="btn-gold">
                Chat With Us
              </WaButton>

              <Link to="/products" className="btn-cocoa">
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Story section */}
      <section className="story-section">
        <div className="story-bean story-bean-one"></div>
        <div className="story-bean story-bean-two"></div>

        <Reveal as="div" className="container story-content">
          <div className="story-line"></div>

          <p className="overline story-overline">Who We Are</p>

          <h2 className="story-title">
            The Next Generation of West African Cocoa
          </h2>

          <p className="story-description">
            Temple Health and Farms owns the entire cocoa chain, from our farm
            in West Africa to our processing factory and packaging facility.
            We grow, process and deliver premium cocoa as consumer products
            and bulk ingredients for businesses worldwide.
          </p>

          <Link to="/about" className="story-button">
            <span>Read Our Story</span>
            <span className="story-button-arrow">→</span>
          </Link>
        </Reveal>
      </section>

      {/* Brands section */}
      <section className="brands-section">
        <div className="brands-glow brands-glow-one"></div>
        <div className="brands-glow brands-glow-two"></div>

        <div className="container">
          <Reveal as="div" className="brands-heading">
            <p className="brands-overline">Our Brands</p>

            <h2 className="brands-title">
              Two brands. One honest source.
            </h2>

            <p className="brands-intro">
              From everyday cocoa wellness to naturally rich skincare, both
              brands begin with cocoa grown, processed and handled by us.
            </p>
          </Reveal>

          <div className="brands-grid">
            <Reveal
              as={Link}
              to="/brands#natkokoa"
              className="brand-card"
            >
              <img
                src="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=1200&q=85"
                alt="Natkokoa natural cocoa products"
                className="brand-card-image"
              />

              <div className="brand-card-overlay"></div>
              <div className="brand-card-shine"></div>
              <div className="brand-card-number">01</div>

              <div className="brand-card-content">
                <p className="brand-card-label">Wellness Food</p>

                <h3 className="brand-card-name">Natkokoa</h3>

                <p className="brand-card-description">
                  Pure, natural cocoa for everyday wellness, from rich cocoa
                  powder to nourishing drinks and other carefully made products.
                </p>

                <span className="brand-card-button">
                  <span>Discover</span>
                  <span className="brand-card-arrow">→</span>
                </span>
              </div>
            </Reveal>

            <Reveal
              as={Link}
              to="/brands#kokoaskin"
              className="brand-card"
            >
              <img
                src="https://images.unsplash.com/photo-1556228578-626d423f9c86?w=1200&q=85"
                alt="KokoaSkin natural cocoa butter skincare"
                className="brand-card-image"
              />

              <div className="brand-card-overlay"></div>
              <div className="brand-card-shine"></div>
              <div className="brand-card-number">02</div>

              <div className="brand-card-content">
                <p className="brand-card-label">Natural Beauty</p>

                <h3 className="brand-card-name">KokoaSkin</h3>

                <p className="brand-card-description">
                  Naturally rich cocoa-butter skincare crafted from the same
                  cocoa beans we grow, process and carefully preserve.
                </p>

                <span className="brand-card-button">
                  <span>Discover</span>
                  <span className="brand-card-arrow">→</span>
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Farm section */}
      <section className="home-infrastructure">
  <div className="home-infrastructure-media">
    <img
      src="https://images.unsplash.com/photo-1575377427642-087cf684f29d?w=1800&q=90"
      alt="Premium cocoa products produced by Temple Health and Farms"
    />

    <div className="home-infrastructure-shade"></div>
  </div>

  <Reveal as="div" className="home-infrastructure-card">
    <div className="home-infrastructure-top">
      <span className="home-infrastructure-number">01</span>

      <div className="home-infrastructure-label">
        <span></span>
        Our Cocoa Chain
      </div>
    </div>

    <h2>
      From the farm,
      <span>to the finished product.</span>
    </h2>

    <p>
      We manage cultivation, processing and packaging under one system,
      allowing us to protect quality, maintain traceability and deliver
      consistency at every stage.
    </p>

    <div className="home-infrastructure-stages">
      <div className="home-infrastructure-stage">
        <strong>01</strong>
        <span>Grown</span>
      </div>

      <div className="home-infrastructure-stage">
        <strong>02</strong>
        <span>Processed</span>
      </div>

      <div className="home-infrastructure-stage">
        <strong>03</strong>
        <span>Packaged</span>
      </div>
    </div>

    <Link to="/infrastructure" className="home-infrastructure-link">
      <span>Explore our infrastructure</span>

      <svg viewBox="0 0 46 18" aria-hidden="true">
        <path d="M2 9h39" />
        <path d="m35 3 6 6-6 6" />
      </svg>
    </Link>
  </Reveal>

  <div className="home-infrastructure-caption">
    <span></span>
    Vertically integrated cocoa production
  </div>
</section>

      {/* Trade section */}

<section className="trade-section" id="trade">
  <div className="trade-leaves" aria-hidden="true">
    <svg viewBox="0 0 520 260">
      <path d="M510 18C410 22 319 75 250 160" />
      <path d="M427 43C390 14 350 4 313 9C330 45 357 66 394 72" />
      <path d="M368 77C329 48 288 42 251 53C272 86 301 104 339 104" />
      <path d="M308 119C268 95 225 95 190 111C215 142 247 156 284 151" />
      <path d="M460 29C463 68 480 98 510 119C520 82 515 51 492 20" />
      <path d="M399 60C400 99 416 130 445 151C456 115 451 82 429 51" />
      <path d="M339 96C337 136 352 168 379 191C392 156 389 123 368 91" />
    </svg>
  </div>

  <div className="trade-shell">
    <div className="trade-content">
      <p className="trade-overline">Trade &amp; B2B</p>

      <span className="trade-line" />

      <h2 className="trade-title">
        Supplying the world with traceable cocoa
      </h2>

      <p className="trade-text">
        Cocoa powder, butter, nibs, husk and mass — supplied in bulk
        directly from our farm and factory to manufacturers, exporters
        and brands globally.
      </p>

      <div className="trade-actions">
        <a className="trade-button" href="/trade">
          Trade &amp; B2B
          <span aria-hidden="true">→</span>
        </a>

        <a
          className="trade-quote-button"
          href="https://wa.me/2340000000000"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="trade-whatsapp-icon"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M16 3.2A12.7 12.7 0 0 0 5.2 22.6L3.5 28.8l6.4-1.7A12.8 12.8 0 1 0 16 3.2Zm0 22.9c-2 0-3.9-.6-5.6-1.6l-.4-.2-3.8 1 1-3.7-.2-.4A10.2 10.2 0 1 1 16 26.1Zm5.6-7.6c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.7.1-1.9-.9-3.1-1.7-4.3-3.8-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.5 3.9 6.1 5.4.9.4 1.5.6 2.1.7.9.3 1.7.2 2.3.1.7-.1 1.8-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.2-.2-.4-.3-.7-.5Z" />
          </svg>

          Request a Quote
        </a>
      </div>
    </div>

    <div className="trade-visual">
      <div className="trade-stats">
        <article className="trade-stat">
          <strong className="trade-value">3</strong>
          <p className="trade-label">
            Owned facilities — farm, factory, packaging
          </p>
        </article>

        <article className="trade-stat">
          <strong className="trade-value">5+</strong>
          <p className="trade-label">
            Bulk cocoa ingredient lines
          </p>
        </article>

        <article className="trade-stat">
          <strong className="trade-value">100%</strong>
          <p className="trade-label">
            Traceable, single-origin West African beans
          </p>
        </article>

        <article className="trade-stat">
          <strong className="trade-value">B2B</strong>
          <p className="trade-label">
            Manufacturers, exporters and brands supplied
          </p>
        </article>
      </div>

      <div className="trade-cocoa-art" aria-hidden="true">
        <span className="trade-cocoa-glow" />

        <img
          className="trade-cocoa-image"
          src="/images/trade-cocoa.png"
          alt=""
        />
      </div>
    </div>
  </div>
</section>

      {/* Partner cards section */}

<section className="partner-section">
  <div className="container partner-grid">

    <article className="partner-card partner-card-light">
      <p className="partner-overline">Become a Partner</p>

      <span className="partner-line" />

      <h2 className="partner-title">
        Distributor network open across Africa &amp; beyond
      </h2>

      <p className="partner-text">
        Retailers, health stores, exporters and individuals — chat with us on
        WhatsApp and get our distributor package instantly.
      </p>

      <a
        className="partner-btn partner-btn-whatsapp"
        href="https://wa.me/2340000000000"
        target="_blank"
        rel="noreferrer"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 3.2A12.7 12.7 0 0 0 5.2 22.6L3.5 28.8l6.4-1.7A12.8 12.8 0 1 0 16 3.2Zm0 22.9c-2 0-3.9-.6-5.6-1.6l-.4-.2-3.8 1 1-3.7-.2-.4A10.2 10.2 0 1 1 16 26.1Zm5.6-7.6c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.7.1-1.9-.9-3.1-1.7-4.3-3.8-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.5 3.9 6.1 5.4.9.4 1.5.6 2.1.7.9.3 1.7.2 2.3.1.7-.1 1.8-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.2-.2-.4-.3-.7-.5Z" />
        </svg>

        Become a Distributor
      </a>
    </article>

    <article className="partner-card partner-card-dark">
      <p className="partner-overline">In the Diaspora?</p>

      <span className="partner-line" />

      <h2 className="partner-title">
        Shop West African cocoa from anywhere in the world
      </h2>

      <p className="partner-text">
        Based in the UK, US, Canada or elsewhere? Natkokoa and KokoaSkin will be
        available on Amazon — delivered to your door.
      </p>

      <a
        className="partner-btn partner-btn-amazon"
        href="https://www.amazon.com/"
        target="_blank"
        rel="noreferrer"
      >
        Shop on Amazon
        <span aria-hidden="true">→</span>
      </a>
    </article>

  </div>
</section>

      <Footer />
      <WaFloat waKey="general" />
    </>
  );
}