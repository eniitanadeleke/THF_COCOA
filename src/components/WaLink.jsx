import { waLink } from '../config/whatsapp.js';

/** Plain link (no icon) that opens WhatsApp — for nav CTAs, footer links, card links. */
export default function WaLink({ waKey = 'general', message, className, children, ...rest }) {
  return (
    <a href={waLink(waKey, message)} target="_blank" rel="noopener" className={className} {...rest}>
      {children}
    </a>
  );
}
