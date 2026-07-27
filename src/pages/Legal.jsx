import Navbar from '../components/Navbar.jsx';
// import Footer from '../components/Footer.jsx';
import WaFloat from '../components/WaFloat.jsx';
import './Legal.css';


export default function Legal() {
  return (
    <>
      <Navbar opaque />

      <header className="page-hero" style={{ paddingBottom: 60 }}>
        <div className="container">
          <p className="overline">Legal</p>
          <h1 className="h-display" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)' }}>Terms &amp; Privacy</h1>
        </div>
      </header>

      <section className="section">
        <div className="container prose">
          <div className="legal-toc">
            <a href="#terms" className="btn-outline" style={{ padding: '10px 24px', fontSize: '0.8rem' }}>Terms &amp; Conditions</a>
            <a href="#privacy" className="btn-outline" style={{ padding: '10px 24px', fontSize: '0.8rem' }}>Privacy Policy</a>
          </div>

          {/* ⚠️ TEMPLATE LEGAL TEXT — have this reviewed by a qualified lawyer before launch. */}

          <section className="legal-block" id="terms">
            <h2>Terms &amp; Conditions</h2>
            <p>Last updated: [DATE]</p>
            <p>
              These Terms &amp; Conditions ("Terms") govern your use of thfcocoa.com (the "Site"),
              operated by Temple Health and Farms Ltd ("THF Cocoa", "we", "us"), a company registered
              in Nigeria [RC NUMBER].
            </p>

            <h3>1. Use of the Site</h3>
            <p>
              By accessing the Site you agree to these Terms. The Site provides information about our
              products and facilitates enquiries via WhatsApp, email and our contact form. You agree
              not to misuse the Site or use it for any unlawful purpose.
            </p>

            <h3>2. Products &amp; Orders</h3>
            <p>
              Product information on the Site is provided for general guidance. Orders and trade
              agreements are concluded through direct communication (WhatsApp, email) and, where
              applicable, written contracts. Prices, availability and specifications are confirmed at
              the point of quotation and may change without notice before then.
            </p>

            <h3>3. Distributor &amp; Trade Relationships</h3>
            <p>
              Distributor and B2B supply relationships are subject to separate written agreements.
              Nothing on this Site constitutes an offer to appoint any party as a distributor or
              supplier.
            </p>

            <h3>4. Intellectual Property</h3>
            <p>
              All content on the Site — including the THF Cocoa, Natkokoa and KokoaSkin names, logos,
              images and text — is owned by or licensed to Temple Health and Farms Ltd and may not be
              reproduced without written permission.
            </p>

            <h3>5. Health Information</h3>
            <p>
              Any wellness or skincare information on the Site is general in nature and is not medical
              advice. Consult a qualified professional for medical concerns.
            </p>

            <h3>6. Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by law, THF Cocoa is not liable for indirect or
              consequential loss arising from use of the Site. Nothing in these Terms excludes
              liability that cannot be excluded by law.
            </p>

            <h3>7. Governing Law</h3>
            <p>
              These Terms are governed by the laws of the Federal Republic of Nigeria, and disputes are
              subject to the jurisdiction of Nigerian courts.
            </p>

            <h3>8. Contact</h3>
            <p>Questions about these Terms: <a href="mailto:hello@thfcocoa.com">hello@thfcocoa.com</a>.</p>
          </section>

          <section className="legal-block" id="privacy">
            <h2>Privacy Policy</h2>
            <p>Last updated: [DATE]</p>
            <p>
              This Privacy Policy explains how Temple Health and Farms Ltd collects and uses personal
              data through thfcocoa.com, in line with the Nigeria Data Protection Act 2023 (NDPA) and
              other applicable laws.
            </p>

            <h3>1. What We Collect</h3>
            <ul>
              <li>Contact details you provide via our contact form or WhatsApp (name, email, phone number, message content).</li>
              <li>Trade and distributor enquiry details (company name, location, order requirements).</li>
              <li>Basic technical data (browser type, pages visited) if analytics tools are enabled.</li>
            </ul>

            <h3>2. How We Use It</h3>
            <ul>
              <li>To respond to enquiries and process orders and quotes.</li>
              <li>To manage distributor and trade relationships (including via our CRM).</li>
              <li>To send information you have requested, such as our distributor package.</li>
            </ul>

            <h3>3. WhatsApp Communications</h3>
            <p>
              Enquiries made via WhatsApp are subject to WhatsApp's own terms and privacy policy
              (operated by Meta). Our contact form does not store your message on this Site — it opens
              WhatsApp with your message pre-filled.
            </p>

            <h3>4. Sharing</h3>
            <p>
              We do not sell personal data. We share it only with service providers who help us operate
              (e.g., email, CRM and invoicing services such as Zoho), or where required by law.
            </p>

            <h3>5. Retention &amp; Security</h3>
            <p>
              We keep personal data only as long as needed for the purposes above and protect it with
              reasonable technical and organisational measures.
            </p>

            <h3>6. Your Rights</h3>
            <p>
              Under the NDPA you may request access to, correction of, or deletion of your personal
              data, and may withdraw consent at any time. Contact{' '}
              <a href="mailto:hello@thfcocoa.com">hello@thfcocoa.com</a> to exercise these rights.
            </p>

            <h3>7. Changes</h3>
            <p>We may update this policy from time to time. The latest version will always be posted on this page.</p>
          </section>
        </div>
      </section>

      {/* <Footer /> */}
      <WaFloat waKey="general" />
    </>
  );
}
