import React from 'react';
import PageMeta from '../components/meta/PageMeta';
import ContactFormThree from '../components/contact/ContactsForm';
import FeatureFour from '../components/features/FeatureFour';
import HeroFour from '../components/hero/HeroFour';
import FooterOne from '../components/footer/FooterOne';
import Navbar from '../components/header/Navbar';
import Layout from '../components/layout/Layout';

const HomeAppLanding = () => {
  return (
    <Layout>
      <PageMeta title="Advo - AI assistent för juridik" />
      <Navbar />
      <HeroFour />
      <FeatureFour />
      <FooterOne footerLight />
    </Layout>
  );
};

export default HomeAppLanding;
