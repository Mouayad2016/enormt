import React from 'react';
import AboutPageHero from '../components/about/AboutPageHero';
import PageMeta from '../components/meta/PageMeta';
import FeatureImgThree from '../components/features/FeatureImgThree';

import FooterOne from '../components/footer/FooterOne';
import Navbar from '../components/header/Navbar';
import Layout from '../components/layout/Layout';
import ChatBubbleComponent from '../components/assistent/ChatBubbleComponenet';

const About = () => {
  return (
    <>
      <div className="App">
        <ChatBubbleComponent />
      </div>{' '}
      <Layout>
        <PageMeta
          title="Enormt - IT-lösningar på högsta nivå | IT-leverantör | Stockholm"
          description="Enormt är din pålitliga IT-leverantör i Sverige. Vi erbjuder skräddarsydda IT-lösningar av högsta kvalitet. Kontakta oss idag!"
          keywords="IT-lösningar, IT-leverantör, skräddarsydda IT-tjänster, Solna, Sverige, grön teknologi, kvalitet, transparens"
        />
        <Navbar />
        <AboutPageHero />
        <FeatureImgThree />
        <FooterOne footerGradient />
      </Layout>
    </>
  );
};

export default About;
