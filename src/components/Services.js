import React from 'react';
import { Search, Megaphone, AdBadge, Pen, Mail, BarChart } from './icons';

const services = [
  {
    title: 'Search Engine Optimization',
    text: 'Rank higher. Get found. Drive organic traffic.',
    icon: Search,
  },
  {
    title: 'Social Media Marketing',
    text: 'Build your brand. Engage your audience.',
    icon: Megaphone,
  },
  {
    title: 'Paid Advertising',
    text: 'Target the right people. Maximize your ROI.',
    icon: AdBadge,
  },
  {
    title: 'Content Marketing',
    text: 'Powerful content. Real connections.',
    icon: Pen,
  },
  {
    title: 'Email Marketing',
    text: 'Nurture leads. Boost conversions.',
    icon: Mail,
  },
  {
    title: 'Website Development',
    text: 'Modern websites. Better experiences.',
    icon: BarChart,
  },
];

const Services = () => (
  <section className="section services" id="services">
    <div className="container">
      <header className="section-head reveal">
        <p className="eyebrow eyebrow--center">Our Services</p>
        <h2>Complete Digital Marketing Solutions</h2>
        <p>We offer result-driven marketing services to help your brand grow, engage and succeed online.</p>
      </header>

      <div className="services__grid">
        {services.map(({ title, text, icon: Icon }, i) => (
          <article
            key={title}
            className="service-card reveal"
            style={{ '--d': `${i * 80}ms` }}
          >
            <div className="service-card__icon">
              <Icon width={24} height={24} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <span className="service-card__more" aria-hidden="true">Learn more →</span>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
