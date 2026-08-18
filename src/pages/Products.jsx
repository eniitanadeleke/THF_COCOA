import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import PageHero from '../components/PageHero.jsx';
import WaButton from '../components/WaButton.jsx';
import WaFloat from '../components/WaFloat.jsx';
import Reveal from '../components/Reveal.jsx';
import cocoaPowderImage from "../assets/images/cocoapowder.jpeg";
import cocoaImage from "../assets/images/cocoa.jpeg";
import cocoaButterImage from "../assets/images/cocoabutter.jpeg";
import kokoaSkinImage from "../assets/images/kokoaskin.jpeg";
import natkokoaImage from "../assets/images/Nathcocoaimage.jpeg";
import './Products.css';

const FILTERS = [
  { key: 'all', label: 'All Products' },
  { key: 'natkokoa', label: 'Natkokoa' },
  { key: 'kokoaskin', label: 'KokoaSkin' },
  { key: 'bulk', label: 'Bulk / B2B' },
];

const PRODUCTS = [
  {
    name: "Natkokoa Cocoa",
    brand: "Natkokoa",
    cat: "natkokoa",
    desc: "Pure West African cocoa crafted for everyday wellness and nourishment.",
    img: natkokoaImage,
    waKey: "natkokoa",
    cta: "Enquire Now",
  },

  {
    name: "Natkokoa Cocoa Drink",
    brand: "Natkokoa",
    cat: "natkokoa",
    desc: "Naturally rich cocoa for drinks, wellness routines and everyday enjoyment.",
    img: natkokoaImage,
    waKey: "natkokoa",
    cta: "Enquire Now",
  },

  {
    name: "KokoaSkin Cocoa Butter",
    brand: "KokoaSkin",
    cat: "kokoaskin",
    desc: "Naturally rich cocoa-butter skincare for soft, nourished and hydrated skin.",
    img: kokoaSkinImage,
    waKey: "kokoaskin",
    cta: "Enquire Now",
  },

  {
    name: "KokoaSkin Natural Beauty",
    brand: "KokoaSkin",
    cat: "kokoaskin",
    desc: "Natural cocoa-based skincare crafted from cocoa grown and processed by us.",
    img: kokoaSkinImage,
    waKey: "kokoaskin",
    cta: "Enquire Now",
  },

  {
    name: "Cocoa Powder",
    brand: "THF Cocoa",
    cat: "bulk",
    desc: "Premium West African cocoa powder supplied for food, beverage and industrial applications.",
    img: cocoaPowderImage,
    waKey: "trade",
    cta: "Request a Quote",
  },

  {
    name: "Cocoa Butter",
    brand: "THF Cocoa",
    cat: "bulk",
    desc: "Natural cocoa butter for chocolate, cosmetic and personal-care manufacturing.",
    img: cocoaButterImage,
    waKey: "trade",
    cta: "Request a Quote",
  },

  {
    name: "Bulk Cocoa Ingredients",
    brand: "THF Cocoa",
    cat: "bulk",
    desc: "Traceable cocoa ingredients processed and supplied directly from our cocoa chain.",
    img: cocoaImage,
    waKey: "trade",
    cta: "Request a Quote",
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
        photo={cocoaPowderImage}
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

     
      <WaFloat waKey="general" />
    </>
  );
}