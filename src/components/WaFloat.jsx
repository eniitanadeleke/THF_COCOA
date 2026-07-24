import WaIcon from './WaIcon.jsx';
import { waLink } from '../config/whatsapp.js';

export default function WaFloat({ waKey = 'general' }) {
  return (
    <a
      href={waLink(waKey)}
      target="_blank"
      rel="noopener"
      className="wa-float"
      aria-label="Chat on WhatsApp"
    >
      <WaIcon />
    </a>
  );
}
