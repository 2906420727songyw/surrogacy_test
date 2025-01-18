'use client';

import { useState } from 'react';
import styles from './BecomeSurrogate.module.css';
import BecomeSurrogatePart1 from './components/BecomeSurrogatePart1/BecomeSurrogatePart1';
import BecomeSurrogatePart2 from './components/BecomeSurrogatePart2/BecomeSurrogatePart2';
import BecomeSurrogatePart3 from './components/BecomeSurrogatePart3/BecomeSurrogatePart3';
import BecomeSurrogatePart4 from './components/BecomeSurrogatePart4/BecomeSurrogatePart4';

export default function BecomeSurrogate() {
  const [isExpandedA, setIsExpandedA] = useState(false);
  const [isExpandedB, setIsExpandedB] = useState(false);
  const [isExpandedC, setIsExpandedC] = useState(false);
  const [isExpandedD, setIsExpandedD] = useState(false);
  const [isExpandedE, setIsExpandedE] = useState(false);
  const [isExpandedF, setIsExpandedF] = useState(false);
  const [isExpandedG, setIsExpandedG] = useState(false);

  const handleToggleA = () => {
    setIsExpandedA(!isExpandedA);
  };

  const handleToggleB = () => {
    setIsExpandedB(!isExpandedB);
  };

  const handleToggleC = () => {
    setIsExpandedC(!isExpandedC);
  };

  const handleToggleD = () => {
    setIsExpandedD(!isExpandedD);
  };

  const handleToggleE = () => {
    setIsExpandedE(!isExpandedE);
  };

  const handleToggleF = () => {
    setIsExpandedF(!isExpandedF);
  };

  const handleToggleG = () => {
    setIsExpandedG(!isExpandedG);
  };

  return (
    <div className={styles.becomeSurrogate}>
      <BecomeSurrogatePart1
        isExpandedA={isExpandedA}
        onToggleA={handleToggleA}
        isExpandedB={isExpandedB}
        onToggleB={handleToggleB}
        isExpandedC={isExpandedC}
        onToggleC={handleToggleC}
        isExpandedD={isExpandedD}
        onToggleD={handleToggleD}
        isExpandedE={isExpandedE}
        onToggleE={handleToggleE}
        isExpandedF={isExpandedF}
        onToggleF={handleToggleF}
        isExpandedG={isExpandedG}
        onToggleG={handleToggleG}
      />
      <BecomeSurrogatePart2 />
      <BecomeSurrogatePart3 />
      <BecomeSurrogatePart4 />
    </div>
  );
} 