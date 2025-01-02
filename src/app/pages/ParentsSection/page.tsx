'use client';

import styles from './ParentsSection.module.css';
import ParentsSectionPart1 from './components/ParentsSectionPart1/ParentsSectionPart1';
import ParentsSectionPart2 from './components/ParentsSectionPart2/ParentsSectionPart2';
import ParentsSectionPart3 from './components/ParentsSectionPart3/ParentsSectionPart3';
import ParentsSectionPart4 from './components/ParentsSectionPart4/ParentsSectionPart4';

export default function ParentsSection() {
  return (
    <section id="parents-section" className={styles.parentsSection}>
      <ParentsSectionPart1 />
      <ParentsSectionPart2 />
      <ParentsSectionPart3 />
      <ParentsSectionPart4 />
    </section>
  );
} 