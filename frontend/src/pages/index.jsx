import React from 'react';
import PageMeta from '../components/meta/PageMeta';
import CryptoCustomerCounter from '../components/hem/CryptoCustomerCounter';
import TechTab from '../components/tabs/TechTab';
import FooterOne from '../components/footer/FooterOne';
import Navbar from '../components/header/Navbar';
import Layout from '../components/layout/Layout';
import HeroNine from '../components/hem/HeroNine';
import HomeSection from '../components/hem/HomeSection';
import HemsidorFastaPriser from '../components/hem/fastaPriser';
import SeoCard from '../components/hem/design_card';
import UXUIDesign from '../components/hem/designCard';
import SupportCard from '../components/hem/support_card';
import Team from '../components/hem/team';

// import "../styles/HomeNine.css"

const Home = () => {
  return (
    <>
      <Layout>
        <PageMeta
          title="Enormt - Hem"
          description="Funderar du på att investera i en hemsida, mobilapputveckling, ett IT-system eller behöver IT-konsultation? Vi är Nordens bästa utvecklare. Kontakta oss idag!."
          keywords="Webbutveckling, IT system, webbdesign, bygga en hemsida, skapa en hemsida, utveckla en app, automatisering, IT konsulter, molntjänster, ai"
        />
        <Navbar />
        <HeroNine />
        <CryptoCustomerCounter />
        <HomeSection></HomeSection>
        <HemsidorFastaPriser></HemsidorFastaPriser>
        <UXUIDesign></UXUIDesign>
        {/* <SupportCard></SupportCard> */}
        <TechTab />
        <FooterOne footerGradient />
      </Layout>
    </>
  );
};

export default Home;
