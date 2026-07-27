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
        title={<>Supplying the world<br />with traceable cocoa</>}
        lead="Premium West African cocoa ingredients, direct from our farm and factory — no middlemen, full traceability, export ready."
      >
        <Reveal as="div" className="btn-row" style={{ marginTop: 32 }} delay={180}>
          <WaButton waKey="trade">Request a Quote on WhatsApp</WaButton>
          <a href="mailto:trade@thfcocoa.com" className="btn-outline btn-outline-light">Email Trade Team</a>
        </Reveal>
      </PageHero>

      {/* WHO WE SUPPLY */}
      <section className="section">
        <Reveal as="div" className="container">
          <p className="overline">Who We Supply</p>
          <h2 className="h-section" style={{ marginBottom: 28 }}>Built for businesses like yours</h2>
          <div className="tags">
            <span className="tag-outline">Chocolate Manufacturers</span>
            <span className="tag-outline">Food &amp; Beverage Companies</span>
            <span className="tag-outline">Cosmetic Brands</span>
            <span className="tag-outline">Nutraceutical Companies</span>
            <span className="tag-outline">Exporters &amp; Traders</span>
            <span className="tag-outline">Distributors &amp; Retailers</span>
          </div>
        </Reveal>
      </section>

      {/* BULK INGREDIENTS */}
      <section className="section section-cream" id="ingredients">
        <div className="container">
          <Reveal as="div" className="section-head">
            <p className="overline">Bulk Ingredients</p>
            <h2 className="h-section">What we supply</h2>
          </Reveal>
          <Reveal as="div" className="b2b-cards">
            {ingredients.map((ing) => (
              <WaLink waKey="trade" className="b2b-card" key={ing.title}>
                <div>
                  <div className="b2b-card-title">{ing.title}</div>
                  <div className="b2b-card-desc">{ing.desc}</div>
                  <div className="tags">
                    {ing.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
                <div className="b2b-card-arrow">›</div>
              </WaLink>
            ))}
          </Reveal>
          <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: 18, fontWeight: 300 }}>
            Tap any ingredient to start a quote conversation on WhatsApp. Spec sheets available on request.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <div className="split" style={{ alignItems: 'flex-start' }}>
            <Reveal as="div">
              <p className="overline">How It Works</p>
              <h2 className="h-section" style={{ marginBottom: 36 }}>From enquiry to delivery</h2>
              {steps.map((s) => (
                <div className="step" style={s.n === 4 ? { marginBottom: 0 } : undefined} key={s.n}>
                  <div className="step-num">{s.n}</div>
                  <div><h3>{s.title}</h3><p>{s.desc}</p></div>
                </div>
              ))}
            </Reveal>
            <Reveal as="div">
              <div className="info-card" style={{ background: 'var(--dark)', padding: '44px 36px', position: 'sticky', top: 100 }}>
                <p className="overline" style={{ color: 'var(--gold)' }}>Become a Distributor</p>
                <h3 className="h-card" style={{ color: 'var(--white)', fontSize: '1.6rem', marginBottom: 14 }}>
                  Distribution open across Africa &amp; beyond
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.75, fontWeight: 300, marginBottom: 26 }}>
                  We're building distribution across Nigeria, West Africa, East Africa, South Africa and
                  internationally. Chat with us and receive the distributor package instantly — read it,
                  and if it fits, we sign and go.
                </p>
                <WaButton waKey="distributor">Become a Distributor</WaButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      
      <WaFloat waKey="trade" />
    </>
  );
}
