import React from 'react';

// Minimal stroke icons (24x24 grid) that inherit currentColor.
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const Icon = ({ children, ...props }) => (
  <svg {...base} {...props}>
    {children}
  </svg>
);

export const ArrowRight = (p) => (
  <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>
);
export const Search = (p) => (
  <Icon {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></Icon>
);
export const Megaphone = (p) => (
  <Icon {...p}><path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Z" /><path d="M15 9a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12" /></Icon>
);
export const AdBadge = (p) => (
  <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M7.5 15v-6l2.5 6V9M13 9v6h2a1.5 1.5 0 0 0 0-3h-2" /></Icon>
);
export const Pen = (p) => (
  <Icon {...p}><path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4Z" /><path d="m13.5 6.5 4 4" /></Icon>
);
export const Mail = (p) => (
  <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6.5 8.5 6.5 8.5-6.5" /></Icon>
);
export const BarChart = (p) => (
  <Icon {...p}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></Icon>
);
export const Target = (p) => (
  <Icon {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" /></Icon>
);
export const Rocket = (p) => (
  <Icon {...p}><path d="M5 15c-1.5 1.3-2 4-2 4s2.7-.5 4-2a2 2 0 0 0 0-2.8A2 2 0 0 0 5 15Z" /><path d="M14 4c3.5 0 6 1.5 6 6-2.3 3.2-5.5 5-9 5l-3-3c0-3.5 1.8-6.7 6-8Z" /><circle cx="15" cy="9" r="1.2" /></Icon>
);
export const Users = (p) => (
  <Icon {...p}><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6" /></Icon>
);
export const TrendUp = (p) => (
  <Icon {...p}><path d="M3 17l6-6 4 4 8-8" /><path d="M15 7h6v6" /></Icon>
);
export const Star = (p) => (
  <Icon {...p}><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" /></Icon>
);
export const Bulb = (p) => (
  <Icon {...p}><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" /></Icon>
);
export const Handshake = (p) => (
  <Icon {...p}><path d="m11 17 2 2a2.1 2.1 0 0 0 3-3l-2-2" /><path d="m14 14 2.5-2.5a2.1 2.1 0 0 0-3-3L11 11" /><path d="M2 12l5-5 4 1 3 3" /><path d="m22 12-5-5-4 1" /><path d="m3 13 4 4 1.5-1.5" /></Icon>
);
export const Chat = (p) => (
  <Icon {...p}><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.4A8 8 0 1 1 21 12Z" /></Icon>
);
export const Layers = (p) => (
  <Icon {...p}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></Icon>
);
export const Phone = (p) => (
  <Icon {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></Icon>
);
export const MailSmall = (p) => (
  <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6.5 8.5 6.5 8.5-6.5" /></Icon>
);
export const Pin = (p) => (
  <Icon {...p}><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></Icon>
);
export const LinkedIn = (p) => (
  <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" /></Icon>
);
export const Instagram = (p) => (
  <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5v.01" /></Icon>
);
export const Facebook = (p) => (
  <Icon {...p}><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8Z" /></Icon>
);
export const Youtube = (p) => (
  <Icon {...p}><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3V9Z" /></Icon>
);
