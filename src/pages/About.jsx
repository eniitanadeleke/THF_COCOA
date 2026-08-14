import { useState } from 'react';
import ourStoryHeroImage from "../assets/images/ourstoryheropics.jpg";
import Navbar from '../components/Navbar.jsx';
// import Footer from '../components/Footer.jsx';
import PageHero from '../components/PageHero.jsx';
import WaLink from '../components/WaLink.jsx';
import WaButton from '../components/WaButton.jsx';
import WaFloat from '../components/WaFloat.jsx';
import Reveal from '../components/Reveal.jsx';
import { WA_NUMBER } from '../config/whatsapp.js';
import './About.css';


export default function About() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'General enquiry', message: '' });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `CONTACT — Website enquiry\nName: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\n${form.message}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <>
      <Navbar opaque />

      <PageHero
  photo={ourStoryHeroImage}
  overline="Our Story"
  title={
    <>
      From one farm,
      <br />
      to the world.
    </>
  }
  lead="Temple Health & Farms is a West African cocoa company that refused to stop at growing beans."
/>

      {/* STORY */}
      <section className="about-section">
  <div className="container">

    {/* Who we are */}

    <div className="about-intro">

      <Reveal as="div" className="about-intro-copy">

        <p className="about-overline">Who We Are</p>

        <h2 className="about-title">
          Cocoa the way it
          <span>should be done</span>
        </h2>

        <div className="about-divider">
          <span></span>
          <i>✦</i>
          <span></span>
        </div>

        <div className="about-copy">

          <p>
            For generations, West Africa has grown the world&apos;s cocoa while
            the value was added elsewhere. Temple Health &amp; Farms was founded
            to change that — to grow, process, package and brand premium cocoa
            right here at home.
          </p>

          <p>
            Today we own our farm in West Africa, our processing factory and our
            packaging facility in Nigeria. That means every jar of Natkokoa,
            every tub of KokoaSkin and every tonne of bulk ingredient is
            traceable back to trees we planted and hands we know.
          </p>

        </div>

        <a href="#journey" className="about-link">
          <span>Discover our journey</span>
          <i>→</i>
        </a>

      </Reveal>


      <Reveal as="div" className="about-intro-visual">

        <div className="about-image-frame">

          <img
            src="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=1200&q=85"
            alt="Premium cocoa products from Temple Health and Farms"
          />

          <div className="about-image-shade"></div>

          <div className="about-image-badge">
            <small>✦</small>
            <strong>100%</strong>
            <span>West African Cocoa</span>
          </div>

        </div>

      </Reveal>

    </div>


    {/* Journey */}

    <div className="about-journey" id="journey">

      <Reveal as="div" className="journey-heading">

        <p className="about-overline">The Journey</p>

        <h2 className="journey-title">How we got here</h2>

        <p className="journey-intro">
          From a single farm to an integrated cocoa company, every stage of our
          growth has been shaped by ownership, quality and purpose.
        </p>

      </Reveal>


      <div className="journey-track">

        <div className="journey-line"></div>

        <Reveal as="article" className="journey-card">

          <div className="journey-number">01</div>

          <div className="journey-icon">◈</div>

          <p className="timeline-label">The Beginning</p>

          <h3>The farm</h3>

          <span className="journey-accent"></span>

          <p>
            It started with land and a conviction: West African cocoa deserves
            West African ownership. We planted, nurtured and harvested our own
            single-origin beans.
          </p>

        </Reveal>


        <Reveal as="article" className="journey-card">

          <div className="journey-number">02</div>

          <div className="journey-icon">⌘</div>

          <p className="timeline-label">Adding Value</p>

          <h3>The factory</h3>

          <span className="journey-accent"></span>

          <p>
            We built our own processing capacity, turning beans into powder,
            butter, nibs and mass without ever leaving our hands.
          </p>

        </Reveal>


        <Reveal as="article" className="journey-card">

          <div className="journey-number">03</div>

          <div className="journey-icon">◫</div>

          <p className="timeline-label">Going To Market</p>

          <h3>Our brands</h3>

          <span className="journey-accent"></span>

          <p>
            Natkokoa brought pure cocoa wellness to homes while KokoaSkin turned
            our cocoa butter into natural skincare, both packaged in our own
            facility.
          </p>

        </Reveal>


        <Reveal as="article" className="journey-card">

          <div className="journey-number">04</div>

          <div className="journey-icon">◎</div>

          <p className="timeline-label">Today</p>

          <h3>Supplying the world</h3>

          <span className="journey-accent"></span>

          <p>
            From consumer shelves to bulk B2B trade, we deliver traceable West
            African cocoa to customers and partners across the globe.
          </p>

        </Reveal>

      </div>

    </div>

  </div>
</section>

      {/* CONTACT */}
<section className="contact-section" id="contact">
  <div className="container">

    <Reveal as="div" className="contact-head">
      <p className="contact-overline">Contact Us</p>

      <div className="contact-head-grid">
        <h2>Let&apos;s talk cocoa</h2>

        <p>
          The fastest way to reach us is WhatsApp, or send an enquiry using the
          form and our team will get back to you.
        </p>
      </div>
    </Reveal>

    <div className="contact-grid">

      {/* Contact information */}

      <Reveal as="div" className="contact-card contact-info-card">
        <div className="contact-card-head">
          <span className="contact-card-number">01</span>

          <p>
            Whether you are interested in our products, bulk cocoa supply or
            becoming a distributor, we would love to hear from you.
          </p>
        </div>

        <div className="contact-list">

          <div className="contact-detail">
            <div className="contact-count">01</div>

            <div className="contact-icon">⌖</div>

            <div className="contact-detail-copy">
              <h4>Address</h4>
              <p>[Street address], [City], Nigeria</p>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-count">02</div>

            <div className="contact-icon">◌</div>

            <div className="contact-detail-copy">
              <h4>WhatsApp</h4>

              <WaLink waKey="contact">
  +234 818 721 3821 — chat with us
</WaLink>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-count">03</div>

            <div className="contact-icon">✉</div>

            <div className="contact-detail-copy">
              <h4>Email</h4>

              <a href="mailto:hello@thfcocoa.com">
                hello@thfcocoa.com
              </a>

              <a href="mailto:trade@thfcocoa.com">
                trade@thfcocoa.com
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <div className="contact-count">04</div>

            <div className="contact-icon">◎</div>

            <div className="contact-detail-copy">
              <h4>Instagram</h4>

              <a
  href="https://www.instagram.com/thfcocoa?igsh=aDByNTZiaXM5N2F0"
  target="_blank"
  rel="noopener noreferrer"
>
  @thfcocoa
</a>
            </div>
          </div>

        </div>

        <div className="contact-whatsapp-row">
          <WaButton waKey="contact">
            Chat on WhatsApp
          </WaButton>

          <span className="contact-reply">
            <i></i>
            Usually replies within a few hours
          </span>
        </div>
      </Reveal>


      {/* Contact form */}

      <Reveal as="form" onSubmit={onSubmit} className="contact-card contact-form-card">
        <div className="contact-form-head">
          <div className="contact-form-title">
            <span className="contact-card-number">02</span>
            <h3>Send an enquiry</h3>
          </div>

          <span className="contact-status">
            <i></i>
            Available
          </span>
        </div>

        <div className="contact-form-grid">

          <div className="contact-field">
            <label htmlFor="cf-name">Name</label>

            <input
              id="cf-name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={onChange}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="cf-email">Email</label>

            <input
              id="cf-email"
              name="email"
              type="email"
              required
              placeholder="you@email.com"
              value={form.email}
              onChange={onChange}
            />
          </div>

          <div className="contact-field contact-field-full">
            <label htmlFor="cf-subject">Subject</label>

            <select
              id="cf-subject"
              name="subject"
              value={form.subject}
              onChange={onChange}
            >
              <option>General enquiry</option>
              <option>Order Natkokoa</option>
              <option>Order KokoaSkin</option>
              <option>Trade / bulk quote</option>
              <option>Become a distributor</option>
              <option>Other</option>
            </select>
          </div>

          <div className="contact-field contact-field-full">
            <label htmlFor="cf-message">Message</label>

            <textarea
              id="cf-message"
              name="message"
              required
              placeholder="Tell us how we can help"
              value={form.message}
              onChange={onChange}
            ></textarea>
          </div>

          <div className="contact-field-full">
            <button type="submit" className="contact-submit">
              <span>Send via WhatsApp</span>
              <i>→</i>
            </button>
          </div>

          <p className="contact-note contact-field-full">
            Submitting opens WhatsApp with your message pre-filled. Your
            information is not stored on this website.
          </p>

        </div>
      </Reveal>

    </div>


    {/* Map */}

    <Reveal as="div" className="contact-map-card">
      <div className="contact-map-copy">
        <span className="contact-card-number">03</span>

        <div>
          <p className="contact-map-label">Our Location</p>

          <h3>
            Visit Temple
            <span>Health &amp; Farms</span>
          </h3>
        </div>

        <p className="contact-map-text">
          Proudly based in Nigeria, serving customers and partners around the
          world.
        </p>
      </div>

      <div className="contact-map-placeholder">
        <span>Google Maps Embed</span>
        <p>Temple Health &amp; Farms, Nigeria</p>
      </div>
    </Reveal>

  </div>
</section>
      
      <WaFloat waKey="general" />
    </>
  );
}
