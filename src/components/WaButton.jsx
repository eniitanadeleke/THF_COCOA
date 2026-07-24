import WaIcon from './WaIcon.jsx';
import { waLink } from '../config/whatsapp.js';
import "./WaFloat.css";

/** Green "btn-wa" pill button — icon + label, opens WhatsApp. */
export default function WaButton({ waKey = 'general', message, className = '', children, ...rest }) {
  return (
    <a
      href={waLink(waKey, message)}
      target="_blank"
      rel="noopener"
      className={`btn-wa ${className}`.trim()}
      {...rest}
    >
      <WaIcon />
      {children}
    </a>
  );
}
