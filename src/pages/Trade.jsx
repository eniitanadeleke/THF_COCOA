import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import PageHero from '../components/PageHero.jsx';
import WaButton from '../components/WaButton.jsx';
import WaLink from '../components/WaLink.jsx';
import WaFloat from '../components/WaFloat.jsx';
import Reveal from '../components/Reveal.jsx';
import './Trade.css';


const ingredients = [
  { title: 'Cocoa Powder', desc: 'Natural and alkalized — various pH, fat content and applications.', tags: ['Natural', 'Dutch Process', 'Bulk'] },
  { title: 'Cocoa Butter', desc: 'Natural and deodorized for chocolate and cosmetic manufacturing.', tags: ['Natural', 'Deodorized', 'Cosmetic Grade'] },
  { title: 'Cocoa Nibs & Husk', desc: 'Roasted and raw cocoa nibs. Husk for tea blends and nutraceuticals.', tags: ['Roasted', 'Raw', 'Tea Grade'] },
  { title: 'Cocoa Mass / Liquor', desc: 'Pure cocoa liquor from single-origin West African beans.', tags: ['Single Origin', 'West Africa', 'Bulk'] },
];

const steps = [
  { n: 1, title: 'Chat with us', desc: 'Message our trade team on WhatsApp with the ingredient, grade and volume you need.' },
  { n: 2, title: 'Get specs & quote', desc: 'We send spec sheets, samples where applicable, and a formal quotation.' },
  { n: 3, title: 'Agree terms', desc: 'Pricing, packaging format, delivery terms and timelines confirmed in writing.' },
  { n: 4, title: 'We deliver', desc: 'Processed, packaged and dispatched from our own facilities — fully traceable.' },
];

export default function Trade() {
  return (
    <>
      <Navbar opaque ctaKey="trade" ctaLabel="Request a Quote" />

     <PageHero
  photo="https://images.unsplash.com/photo-1610650157504-eb5a3fccd96d?w=1600&q=80"
  overline="Trade & B2B"
  title={
    <span className="trade-hero-title">
      <span>Supplying the world</span>
      <span>with traceable cocoa</span>
    </span>
  }
  lead={
    <span className="trade-hero-lead">
      Premium West African cocoa ingredients, direct from our farm and factory —
      no middlemen, full traceability, export ready.
    </span>
  }
>
  <Reveal as="div" className="btn-row trade-hero-actions" style={{ marginTop: 32 }} delay={180}>
    <WaButton waKey="trade">
      Request a Quote on WhatsApp
    </WaButton>

    <a
      href="mailto:trade@thfcocoa.com"
      className="btn-outline btn-outline-light trade-email-btn"
    >
      Email Trade Team
    </a>
  </Reveal>
</PageHero>

      {/* WHO WE SUPPLY */}
      <section className="section trade-supply">
  <Reveal as="div" className="container">
    <p className="overline trade-supply-overline">Who We Supply</p>

    <h2 className="h-section trade-supply-title">
      Built for businesses like yours
    </h2>

    <div className="trade-supply-tags">
      <span className="trade-supply-tag">Chocolate Manufacturers</span>
      <span className="trade-supply-tag">Food &amp; Beverage Companies</span>
      <span className="trade-supply-tag">Cosmetic Brands</span>
      <span className="trade-supply-tag">Nutraceutical Companies</span>
      <span className="trade-supply-tag">Exporters &amp; Traders</span>
      <span className="trade-supply-tag">Distributors &amp; Retailers</span>
    </div>
  </Reveal>
</section>

      {/* HOW IT WORKS */}
      <section className="section trade-process">
  <div className="container">
    <div className="split trade-process-grid" style={{ alignItems: 'flex-start' }}>
      <Reveal as="div" className="trade-process-left">
        <p className="overline trade-process-overline">How It Works</p>

        <h2 className="h-section trade-process-title">
          From enquiry to delivery
        </h2>

        <div className="trade-steps">
          {steps.map((s) => (
            <div className="trade-step-card" key={s.n}>
              <div className="step-num">{s.n}</div>

              <div className="trade-step-copy">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="div" className="trade-distributor-wrap">
        <div className="trade-distributor-card">
          <span className="trade-distributor-badge">
            Partner With THF
          </span>

          <p className="overline trade-distributor-overline">
            Become a Distributor
          </p>

          <h3 className="h-card trade-distributor-title">
            Distribution open across Africa &amp; beyond
          </h3>

          <p className="trade-distributor-text">
            We're building distribution across Nigeria, West Africa, East Africa,
            South Africa and internationally. Chat with us and receive the distributor
            package instantly. Read it, and if it fits, we sign and go.
          </p>

          <div className="trade-distributor-line"></div>

          <WaButton waKey="distributor">
            Become a Distributor
          </WaButton>
        </div>
      </Reveal>
    </div>
  </div>
</section>

      
      <WaFloat waKey="trade" />
    </>
  );
}
