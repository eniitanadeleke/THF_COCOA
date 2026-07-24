import Reveal from './Reveal.jsx';

/**
 * The dark banner used at the top of every interior page.
 * children can include extra content below the lead paragraph (e.g. buttons, chips).
 */
export default function PageHero({ photo, overline, title, lead, children, style }) {
  return (
    <header className="page-hero" style={style}>
      <div className="page-hero-photo" style={{ backgroundImage: `url('${photo}')` }}></div>
      <div className="container">
        <Reveal as="p" className="overline">{overline}</Reveal>
        <Reveal as="h1" className="h-display" delay={60}>{title}</Reveal>
        {lead && <Reveal as="p" className="lead" delay={120}>{lead}</Reveal>}
        {children}
      </div>
    </header>
  );
}
