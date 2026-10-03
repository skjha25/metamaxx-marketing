import React, { useEffect, useRef, useState } from 'react';
import { Rocket, Users, TrendUp, Star } from './icons';

const stats = [
  { icon: Rocket, value: 100, suffix: '+', label: 'Projects Completed' },
  { icon: Users, value: 50, suffix: '+', label: 'Happy Clients' },
  { icon: TrendUp, value: 300, suffix: '%', label: 'Average Traffic Growth' },
  { icon: Star, value: 4.9, decimals: 1, suffix: '/5', label: 'Client Satisfaction' },
];

// Counts from 0 to `to` once the element scrolls into view.
const useCountUp = (to, decimals = 0, duration = 1600) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let raf;
    let started = false;

    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(to * eased);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    if (!('IntersectionObserver' in window)) {
      setValue(to);
      return undefined;
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        started = true;
        run();
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return [ref, value.toFixed(decimals)];
};

const StatItem = ({ icon: Icon, value, decimals, suffix, label }) => {
  const [ref, display] = useCountUp(value, decimals);
  return (
    <div className="stat" ref={ref}>
      <Icon className="stat__icon" width={28} height={28} />
      <p className="stat__value">
        {display}
        <span>{suffix}</span>
      </p>
      <p className="stat__label">{label}</p>
    </div>
  );
};

const Stats = () => (
  <section className="stats" aria-label="Key figures">
    <div className="container stats__grid">
      {stats.map((s) => (
        <StatItem key={s.label} {...s} />
      ))}
    </div>
  </section>
);

export default Stats;
