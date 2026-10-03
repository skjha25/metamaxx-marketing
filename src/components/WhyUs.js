import React from 'react';
import { ArrowRight, TrendUp } from './icons';

const results = [
  { value: '250%', label: 'Increase in Website Traffic' },
  { value: '180%', label: 'Growth in Social Media Followers' },
  { value: '3x', label: 'ROI on Paid Campaigns' },
];

const WhyUs = () => (
  <section className="section why" id="results">
    <div className="container why__grid">
      <div className="why__intro reveal">
        <p className="eyebrow">Why Choose Us</p>
        <h2>We Don't Just Market,<br />We Make an Impact</h2>
        <p>
          From startups to established brands, we've helped businesses achieve real growth through
          creative campaigns, smart strategy and dependable support.
        </p>
        <a href="#contact" className="btn btn--primary">
          Let's Grow Together <ArrowRight width={16} height={16} />
        </a>
      </div>

      <figure className="glass-card testimonial reveal">
        <svg className="testimonial__quote" viewBox="0 0 48 36" aria-hidden="true">
          <path d="M0 36V22C0 9.5 6.5 2 18 0l2 4c-6 2-9 6-9 11h9v21H0Zm26 0V22C26 9.5 32.5 2 44 0l2 4c-6 2-9 6-9 11h9v21H26Z" fill="#6a5cff" opacity=".85" />
        </svg>
        <blockquote>
          “Metamaxx Marketing gave our brand the visibility it needed. Their team is creative,
          responsive and truly understands our goals.”
        </blockquote>
        <figcaption>
          <strong>Priya Sharma</strong>
          <span>Founder, Happy Homes</span>
        </figcaption>
      </figure>

      <aside className="glass-card results reveal" id="featured" aria-label="Featured results">
        <p className="results__title">Featured Results</p>
        <ul>
          {results.map((r) => (
            <li key={r.value} className="result">
              <span className="result__icon">
                <TrendUp width={20} height={20} />
              </span>
              <strong>{r.value}</strong>
              <span className="result__label">{r.label}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  </section>
);

export default WhyUs;
