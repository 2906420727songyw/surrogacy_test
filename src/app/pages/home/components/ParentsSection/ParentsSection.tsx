'use client';

import styles from './ParentsSection.module.css';
import ParentsSectionPart1 from './ParentsSectionPart1/ParentsSectionPart1';
import ParentsSectionPart2 from './ParentsSectionPart2/ParentsSectionPart2';

export default function ParentsSection() {
  return (
    <section id="parents-section" className={styles.parentsSection}>
      <ParentsSectionPart1 />
      <ParentsSectionPart2 />
    </section>
  );
} 