'use client';
import React from 'react';
import { useLanguage } from '@/app/language';

const MyComponent: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <div>
      <h1>{translations.language}</h1>
    </div>
  );
};

export default MyComponent;