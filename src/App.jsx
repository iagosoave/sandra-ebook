import React from 'react';
import HeroSection from './components/HeroSection';
 import BenefitsSection  from './components/BenefitsSection';
 import Formsection   from './components/Formsection';
 import AuthoritySection   from './components/AuthoritySection';


const App = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <BenefitsSection  />
      <AuthoritySection  />
      <Formsection   />
      
  
    </div>
  );
};

export default App;