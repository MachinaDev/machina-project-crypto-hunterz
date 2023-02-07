import React from 'react';

import Hero from './Hero/Hero';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import Features from './Features/Features';
import Roadmap from './Roadmap/Roadmap';
import Team from './Team/Team';
import SocialNetworks from './SocialNetworks/SocialNetworks';
import Footer from './Footer/Footer';

// import useStyles from './styles';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Features />
      <Roadmap />
      <Team />
      <SocialNetworks />
      <Footer />
    </>
  );
};
export default LandingPage;
