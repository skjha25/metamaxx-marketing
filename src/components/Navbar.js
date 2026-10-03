import React, { useEffect, useState } from 'react';
import Logo from './Logo';

const links = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#results' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Logo />

        <nav className={`navbar__nav ${open ? 'is-open' : ''}`} aria-label="Primary">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className={`navbar__link ${i === 0 ? 'is-active' : ''}`}
              onClick={close}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--primary btn--sm navbar__cta-mobile" onClick={close}>
            Get Started
          </a>
        </nav>

        <a href="#contact" className="btn btn--primary btn--sm navbar__cta">
          Get Started
          <span className="btn__arrow" aria-hidden="true">→</span>
        </a>

        <button
          type="button"
          className={`navbar__toggle ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
