import React from 'react';

// Stylised "M" mark with the Metamaxx wordmark.
const Logo = ({ variant = 'dark' }) => (
  <a href="#top" className={`logo logo--${variant}`} aria-label="Metamaxx Marketing home">
    <svg className="logo__mark" viewBox="0 0 48 32" aria-hidden="true">
      <defs>
        <linearGradient id={`logoGrad-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6a5cff" />
          <stop offset="100%" stopColor="#3d2fe0" />
        </linearGradient>
      </defs>
      <path
        d="M2 30V4h8l14 17L38 4h8v26h-7V15.5L24 27 9 15.5V30H2Z"
        fill={`url(#logoGrad-${variant})`}
      />
    </svg>
    <span className="logo__text">
      <strong>METAMAXX</strong>
      <span>MARKETING</span>
    </span>
  </a>
);

export default Logo;
