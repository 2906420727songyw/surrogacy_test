import BecomingParents from './components/BecomingParents/BecomingParents';
import BecomingSurrogate from './components/BecomingSurrogate/BecomingSurrogate';
import SaplingSurrogacy from './components/SaplingSurrogacy/SaplingSurrogacy';
import AboutUs from './components/AboutUs/AboutUs';

import DataDisplay from './components/DataDisplay/DataDisplay';
import Foundation from './components/Foundation/Foundation';
import ParentsSection from './components/ParentsSection/ParentsSection';
import BecomeSurrogate from './components/BecomeSurrogate/BecomeSurrogate';

export default function HomePage() {
  return (
    <div>
      <main>
        <BecomingParents />
        
        <BecomingSurrogate />
        <SaplingSurrogacy />
        <AboutUs />
        <DataDisplay />
        <Foundation />
        <ParentsSection />
        <BecomeSurrogate />
      </main>
    </div>
  );
} 