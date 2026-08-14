// ⚠️ PLACEHOLDER — replace with THF Cocoa's real WhatsApp Business number
// Format: country code + number, digits only, no "+" (e.g. 2348012345678)
export const WA_NUMBER = '2348187213821';

// Pre-filled messages per enquiry type. These keywords trigger the
// matching auto-reply flow described in THFCocoa-WhatsApp-Automation-Spec.md
export const WA_MESSAGES = {
  general: "Hello THF Cocoa 👋 I'd like to make an enquiry.",
  distributor:
    "DISTRIBUTOR — Hello THF Cocoa, I'd like to become a distributor. Please send me the distributor package.",
  trade: "TRADE — Hello THF Cocoa, I'd like a quote for bulk cocoa ingredients.",
  natkokoa: 'NATKOKOA — Hello, I\'d like to order Natkokoa products.',
  kokoaskin: 'KOKOASKIN — Hello, I\'d like to order KokoaSkin products.',
  contact: 'CONTACT — Hello THF Cocoa, I have a question.',
};

export function waLink(key = 'general', customMessage) {
  const msg = encodeURIComponent(customMessage || WA_MESSAGES[key] || WA_MESSAGES.general);
  return `https://wa.me/${WA_NUMBER}?text=${msg}`;
}
