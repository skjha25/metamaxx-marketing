import React from 'react';
import { Bulb, Target, Chat, Handshake } from './icons';

const values = [
  { icon: Target, label: 'Data-Driven\nStrategies' },
  { icon: Bulb, label: 'Creative\nThinking' },
  { icon: Chat, label: 'Transparent\nCommunication' },
  { icon: Handshake, label: 'Long-Term\nPartnership' },
];

const About = () => (
  <section className="section about" id="about">
    <div className="container about__grid">
      <div className="about__visual reveal">
        <div className="notebook">
          <div className="notebook__laptop" aria-hidden="true" />
          <div className="notebook__pad">
            <span className="notebook__spiral" />
            <ul>
              <li>Ideas</li>
              <li>Strategy</li>
              <li>Content</li>
              <li className="notebook__result">Results</li>
            </ul>
            <svg className="notebook__underline" viewBox="0 0 120 20" aria-hidden="true">
              <path d="M4 12 C 30 4, 70 18, 116 8" fill="none" stroke="#3d2fe0" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
          <div className="notebook__phone" aria-hidden="true" />
          <div className="notebook__cup" aria-hidden="true" />
        </div>
      </div>

      <div className="about__copy">
        <div className="reveal">
          <p className="eyebrow">About Metamaxx Marketing</p>
          <h2>Your Growth, Our Mission</h2>
          <p className="about__text">
            At Metamaxx Marketing, we believe in the power of digital to transform businesses. We
            combine creativity with data-driven strategies to deliver measurable results. Our team
            of experts is passionate about helping brands grow, connect and lead in their industry.
          </p>
        </div>

        <ul className="values reveal">
          {values.map(({ icon: Icon, label }) => (
            <li key={label} className="value">
              <span className="value__icon">
                <Icon width={22} height={22} />
              </span>
              <span className="value__label">
                {label.split('\n').map((line) => (
                  <React.Fragment key={line}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;
