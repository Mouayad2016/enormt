import React from 'react';
import AboutPageHero from '../components/about/AboutPageHero';
import PageMeta from '../components/meta/PageMeta';
import FeatureImgThree from '../components/features/FeatureImgThree';
import Team from '../components/team/team';

import FooterOne from '../components/footer/FooterOne';
import Navbar from '../components/header/Navbar';
import Layout from '../components/layout/Layout';
import { PopupWidget } from 'react-calendly';
// import TeamMember from './teamMember';

const About = () => {
  return (
    <Layout>
      <PageMeta
        title="Enormt - IT-lösningar på högsta nivå | IT-leverantör i Solna, Sverige"
        description="Enormt är din pålitliga IT-leverantör Sverige. Vi erbjuder skräddarsydda IT-lösningar av högsta kvalitet. Kontakta oss idag!"
        keywords="IT-lösningar, IT-leverantör, skräddarsydda IT-tjänster, Solna, Sverige, grön teknologi, kvalitet, transparens"
      />
      <Navbar />
      <AboutPageHero />
      <FeatureImgThree />
      {/* <Team />{" "} */}
      <FooterOne footerGradient />{' '}
    </Layout>
  );
};

export default About;
