import React from 'react';
import Logo from './Logo';
import { Phone, MailSmall, Pin, LinkedIn, Instagram, Facebook, Youtube } from './icons';

const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#results' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { label: 'LinkedIn', icon: LinkedIn, href: '#' },
  { label: 'Instagram', icon: Instagram, href: '#' },
  { label: 'Facebook', icon: Facebook, href: '#' },
  { label: 'YouTube', icon: Youtube, href: '#' },
];

const Footer = () => (
  <footer className="footer" id="contact">
    <div className="container footer__top">
      <div className="footer__brand">
        <Logo variant="light" />
        <p className="footer__tagline">Let's Build Something Great.</p>
      </div>

      <nav className="footer__nav" aria-label="Footer">
        {navLinks.map((l) => (
          <a key={l.label} href={l.href}>{l.label}</a>
        ))}
      </nav>

      <div className="footer__social">
        {socials.map(({ label, icon: Icon, href }) => (
          <a key={label} href={href} aria-label={label} className="footer__social-link">
            <Icon width={18} height={18} />
          </a>
        ))}
      </div>

      <ul className="footer__contact">
        <li><Phone width={16} height={16} /><a href="tel:+919876543210">+91 98765 43210</a></li>
        <li><MailSmall width={16} height={16} /><a href="mailto:info@metamaxx.in">info@metamaxx.in</a></li>
        <li><Pin width={16} height={16} /><span>Mumbai, India</span></li>
      </ul>
    </div>

    <div className="footer__bottom">
      <div className="container footer__bottom-inner">
        <p>© {new Date().getFullYear()} Metamaxx Marketing. All rights reserved.</p>
        <nav aria-label="Legal">
          <a href="#contact">Privacy Policy</a>
          <span aria-hidden="true">|</span>
          <a href="#contact">Terms &amp; Conditions</a>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
