import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import PageHero from '../components/PageHero.jsx';
import WaButton from '../components/WaButton.jsx';
import WaFloat from '../components/WaFloat.jsx';
import Reveal from '../components/Reveal.jsx';
import './Products.css';

const FILTERS = [
  { key: 'all', label: 'All Products' },
  { key: 'natkokoa', label: 'Natkokoa' },
  { key: 'kokoaskin', label: 'KokoaSkin' },
  { key: 'bulk', label: 'Bulk / B2B' },
];

const PRODUCTS = [
  {
    cat: 'natkokoa',
    brand: 'Natkokoa · Wellness Food',
    name: 'Pure Cocoa Powder — 250g',
    desc: '100% natural, single-origin cocoa powder. Rich, unsweetened and full of natural flavanols.',
    img: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=800&q=80',
    waKey: 'natkokoa',
    cta: 'Order on WhatsApp',
  },
  {
    cat: 'natkokoa',
    brand: 'Natkokoa · Wellness Food',
    name: 'Pure Cocoa Powder — 500g',
    desc: 'The family size. Same single-origin cocoa, more of it — for daily drinks and baking.',
    img: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=800&q=80',
    waKey: 'natkokoa',
    cta: 'Order on WhatsApp',
  },
  {
    cat: 'natkokoa',
    brand: 'Natkokoa · Wellness Food',
    name: 'Cocoa Husk Tea',
    desc: 'A naturally caffeine-light infusion brewed from cocoa husks — subtle chocolate notes, zero waste.',
    img: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80',
    waKey: 'natkokoa',
    cta: 'Order on WhatsApp',
  },
  {
    cat: 'kokoaskin',
    brand: 'KokoaSkin · Natural Beauty',
    name: 'Raw Cocoa Butter',
    desc: 'Unrefined, cosmetic-grade cocoa butter pressed in our own factory. Deep moisture for skin and hair.',
    img: 'https://images.unsplash.com/photo-1556228578-626d423f9c86?w=800&q=80',
    waKey: 'kokoaskin',
    cta: 'Order on WhatsApp',
  },
  {
    cat: 'kokoaskin',
    brand: 'KokoaSkin · Natural Beauty',
    name: 'Whipped Body Butter',
    desc: 'Cocoa butter whipped into an everyday body moisturiser — naturally rich in vitamin E.',
    img: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=800&q=80',
    waKey: 'kokoaskin',
    cta: 'Order on WhatsApp',
  },
  {
    cat: 'bulk',
    brand: 'Bulk · B2B',
    name: 'Cocoa Powder (Bulk)',
    desc: 'Natural and alkalized cocoa powder in bulk — various pH and fat contents for food manufacturing.',
    img: 'https://images.unsplash.com/photo-1610650157504-eb5a3fccd96d?w=800&q=80',
    waKey: 'trade',
    cta: 'Request Quote',
  },
  {
    cat: 'bulk',
    brand: 'Bulk · B2B',
    name: 'Cocoa Butter (Bulk)',
    desc: 'Natural and deodorized cocoa butter for chocolate and cosmetics manufacturing.',
    img: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=800&q=80',
    waKey: 'trade',
    cta: 'Request Quote',
  },
  {
    cat: 'bulk',
    brand: 'Bulk · B2B',
    name: 'Cocoa Nibs & Husk',
    desc: 'Roasted and raw nibs; husk for tea blends and nutraceutical applications.',
    img: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=800&q=80',
    waKey: 'trade',
    cta: 'Request Quote',
  },
  {
    cat: 'bulk',
    brand: 'Bulk · B2B',
    name: 'Cocoa Mass / Liquor',
    desc: 'Pure cocoa liquor from single-origin West African beans, supplied in bulk.',
    img: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&q=80',
    waKey: 'trade',
    cta: 'Request Quote',
  },
];

export default function Products() {
  const [filter, setFilter] = useState('all');

  const visible =
    filter === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.cat === filter);

  return (
    <>
      <Navbar opaque />

      <PageHero
        photo="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=1600&q=80"
        overline="Our Cocoa Collection"
        title={
          <span className="products-hero-copy">
            <span className="products-hero-line products-hero-line-one">
              From cocoa,
            </span>

            <span className="products-hero-line products-hero-line-two">
              comes something
            </span>

            <span className="products-hero-line products-hero-line-three">
              extraordinary.
            </span>
          </span>
        }
        lead={
          <span className="products-hero-lead">
            Thoughtfully crafted wellness foods, natural skincare and premium
            bulk ingredients, all rooted in authentic West African cocoa.
          </span>
        }
      />

      <section className="products-section">
        <div className="container">
          <Reveal as="div" className="products-heading">
            <div>
              <span className="products-overline">
                Explore the collection
              </span>

              <h2 className="products-title">
                Cocoa products for
                <span>everyday life and industry.</span>
              </h2>
            </div>

            <p className="products-heading-text">
              Browse our full range of wellness foods, natural skincare and
              bulk cocoa ingredients. Use the filters to find exactly what you
              need.
            </p>
          </Reveal>

          <Reveal as="div" className="filter-bar">
            {FILTERS.map((item) => {
              const count =
                item.key === 'all'
                  ? PRODUCTS.length
                  : PRODUCTS.filter(
                      (product) => product.cat === item.key
                    ).length;

              return (
                <button
                  type="button"
                  key={item.key}
                  className={`filter-btn${
                    filter === item.key ? ' active' : ''
                  }`}
                  onClick={() => setFilter(item.key)}
                  aria-pressed={filter === item.key}
                >
                  <span>{item.label}</span>
                  <small>{count}</small>
                </button>
              );
            })}
          </Reveal>

          <div className="products-grid" key={filter}>
            {visible.map((product, index) => (
              <Reveal
                as="article"
                className={`product-tile product-tile-${product.cat}`}
                key={product.name}
              >
                <div className="product-tile-img">
                  <img src={product.img} alt={product.name} loading="lazy" />

                  <span className="product-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="product-category">
                    {product.cat === 'natkokoa' && 'Wellness'}
                    {product.cat === 'kokoaskin' && 'Beauty'}
                    {product.cat === 'bulk' && 'Bulk'}
                  </span>
                </div>

                <div className="product-tile-body">
                  <div className="product-tile-brand">
                    {product.brand}
                  </div>

                  <h3 className="product-tile-name">
                    {product.name}
                  </h3>

                  <p className="product-tile-desc">
                    {product.desc}
                  </p>

                  <div className="product-tile-cta">
                    <WaButton waKey={product.waKey}>
                      {product.cta}
                    </WaButton>

                    <span className="product-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="product-help-section">
  <div className="container">
    <Reveal as="div" className="product-help-card">
      <div className="product-help-decoration" aria-hidden="true">
        <span className="product-help-ring product-help-ring-one"></span>
        <span className="product-help-ring product-help-ring-two"></span>
        <span className="product-help-bean">✦</span>
      </div>

      <div className="product-help-copy">
        <span className="product-help-overline">
          Personal assistance
        </span>

        <h2 className="product-help-title">
          Let us help you find
          <span>the right cocoa product.</span>
        </h2>

        <p className="product-help-text">
          Whether you are shopping for your home, developing a beauty product
          or sourcing cocoa ingredients for large-scale production, our team
          will guide you towards the right product, pack size and specification.
        </p>

        <WaButton waKey="general">
          Start a WhatsApp Conversation
        </WaButton>
      </div>

      <div className="product-help-options">
        <div className="product-help-option">
          <span className="product-help-icon">01</span>

          <div>
            <h3>Wellness products</h3>
            <p>
              Find the right cocoa powder, tea or everyday product for your
              household.
            </p>
          </div>
        </div>

        <div className="product-help-option">
          <span className="product-help-icon">02</span>

          <div>
            <h3>Natural skincare</h3>
            <p>
              Explore cocoa butter and body care products for skin and hair.
            </p>
          </div>
        </div>

        <div className="product-help-option">
          <span className="product-help-icon">03</span>

          <div>
            <h3>Bulk and B2B supply</h3>
            <p>
              Discuss grades, quantities and ingredient specifications for
              production.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  </div>
</section>

      <Footer />
      <WaFloat waKey="general" />
    </>
  );
}