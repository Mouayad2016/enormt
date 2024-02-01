import React from 'react';
import PageHeader from '../components/header/PageHeader';
import PageMeta from '../components/meta/PageMeta';
import FeatureTwo from '../components/features/FeatureTwo';
import FooterOne from '../components/footer/FooterOne';
import Navbar from '../components/header/Navbar';
import Layout from '../components/layout/Layout';
import ChatBubbleComponent from '../components/assistent/ChatBubbleComponenet';

const Services = () => {
  return (
    <Layout>
      {/* <div className="App">
        <ChatBubbleComponent />
      </div>{' '} */}
      <PageMeta
        title="Enormt IT-lösningar | Omfattande IT-tjänster och support - Stockholm"
        description="Upptäck vårt utbud av IT-lösningar. Från skräddarsydda webbplatser till IT-system och mobilappar. Kontakta oss idag för att förbättra din affärs IT-behov."
        keywords="IT-lösningar, webbutveckling, mobilappar, IT-supports, SEO, databashantering, IT-partners, skräddarsydda IT-lösningar, användarvänlig design, molntjänster"
      ></PageMeta>
      <Navbar />
      <PageHeader
        title="Växande utbud av IT-lösningar"
        desc="Vi har ett ständigt växande utbud av tjänster och arbetar enbart med noga utvalda och kvalitetssäkrade leverantörer. Klicka runt och läs mer om vilka tjänster som för tillfället finns att tillgå. Om du inte hittar vad du söker så tveka inte att höra av dig till oss. Vi arbetar ständigt med att utöka vårt utbud av tjänster och vill gärna höra om vilka tjänster våra kunder eftersöker."
      />
      <FeatureTwo />
      <FooterOne footerGradient />
    </Layout>
  );
};

export default Services;
