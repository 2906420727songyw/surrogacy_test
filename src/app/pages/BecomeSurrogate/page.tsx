'use client';

import { useState, useEffect } from 'react';
import styles from './BecomeSurrogate.module.css';
import BecomeSurrogatePart1 from './components/BecomeSurrogatePart1/BecomeSurrogatePart1';
import BecomeSurrogatePart2 from './components/BecomeSurrogatePart2/BecomeSurrogatePart2';
import BecomeSurrogatePart3 from './components/BecomeSurrogatePart3/BecomeSurrogatePart3';
import BecomeSurrogatePart4 from './components/BecomeSurrogatePart4/BecomeSurrogatePart4';

export default function BecomeSurrogate() {
  const [visibleSections, setVisibleSections] = useState(new Set<string>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section');
            if (id) {
              setVisibleSections(prev => new Set([...prev, id]));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-section]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <div data-section="part1">
        <BecomeSurrogatePart1 isVisible={visibleSections.has('part1')} />
      </div>
      <div data-section="part2">
        <BecomeSurrogatePart2 isVisible={visibleSections.has('part2')} />
      </div>
      <div data-section="part3">
        <BecomeSurrogatePart3 isVisible={visibleSections.has('part3')} />
      </div>
      <div data-section="part4">
        <BecomeSurrogatePart4 isVisible={visibleSections.has('part4')} />
      </div>
    </main>
  );
} 