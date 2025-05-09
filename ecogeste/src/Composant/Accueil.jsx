import React from 'react';
import Section from '../Composant/Section';   
import Section2 from '../Composant/Section2';

const Accueil = () => {
  return (
    <div className="w-full overflow-x-hidden">
      
      <Section />

      
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 space-y-12">
        <Section2 />
      </div>
    </div>
  );
};

export default Accueil;
