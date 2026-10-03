import React from 'react';
import { ArrowRight, Megaphone, Target, Mail, AdBadge, BarChart } from './icons';

const channels = [
  { label: 'Social Media', icon: Megaphone, className: 'hero__chip--social' },
  { label: 'SEO', icon: Target, className: 'hero__chip--seo' },
  { label: 'Email Marketing', icon: Mail, className: 'hero__chip--email' },
  { label: 'Paid Ads', icon: AdBadge, className: 'hero__chip--ads' },
  { label: 'Analytics', icon: BarChart, className: 'hero__chip--analytics' },
];

const Hero = () => (
  <section className="hero" id="top">
    <div className="hero__glow" aria-hidden="true" />
    <div className="container hero__grid">
      <div className="hero__copy">
        <p className="eyebrow reveal">Strategy <span>/</span> Creativity <span>/</span> Growth</p>
        <h1 className="hero__title reveal">
          Digital Marketing
          <br />
          That <span className="text-gradient">Grows Your Business</span>
        </h1>
        <p className="hero__text reveal">
          We help brands build a strong online presence, attract the right audience and turn
          clicks into customers. From strategy to execution, we're your growth partner in the
          digital world.
        </p>
        <div className="hero__actions reveal">
          <a href="#contact" className="btn btn--primary btn--lg">
            Get Free Consultation <ArrowRight width={18} height={18} />
          </a>
          <a href="#services" className="btn btn--outline btn--lg">
            Explore Our Services
          </a>
        </div>
        <ul className="hero__proof reveal">
          <li><strong>100+</strong> projects delivered</li>
          <li><strong>4.9/5</strong> client rating</li>
        </ul>
      </div>

      <div className="hero__visual reveal" aria-hidden="true">
        <div className="hero__rays">
          <span /><span /><span /><span />
        </div>

        <div className="laptop">
          <div className="laptop__lid">
            <div className="laptop__screen">
              <p className="laptop__handwriting">
                More<br />Traffic<br />More Sales<br />More Growth
              </p>
              <svg className="laptop__chart" viewBox="0 0 320 200">
                <defs>
                  <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6a5cff" />
                    <stop offset="100%" stopColor="#3d2fe0" />
                  </linearGradient>
                </defs>
                <rect x="150" y="128" width="26" height="42" rx="4" fill="url(#barGrad)" />
                <rect x="186" y="106" width="26" height="64" rx="4" fill="url(#barGrad)" />
                <rect x="222" y="86" width="26" height="84" rx="4" fill="url(#barGrad)" />
                <rect x="258" y="58" width="26" height="112" rx="4" fill="url(#barGrad)" />
                <path
                  d="M140 150 L200 110 L232 118 L290 38"
                  fill="none"
                  stroke="#3d2fe0"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M270 36 L292 36 L290 58 Z" fill="#3d2fe0" />
              </svg>
            </div>
          </div>
          <div className="laptop__base" />
        </div>

        <div className="hero__mug" />
        <div className="hero__plant">
          <span /><span /><span /><span /><span />
          <div className="hero__pot" />
        </div>

        {channels.map(({ label, icon: Icon, className }) => (
          <div key={label} className={`hero__chip ${className}`}>
            <Icon width={22} height={22} />
            <span>{label}</span>
          </div>
        ))}

        <div className="hero__stat-card">
          <span className="hero__stat-label">Avg. traffic growth</span>
          <strong>+300%</strong>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
