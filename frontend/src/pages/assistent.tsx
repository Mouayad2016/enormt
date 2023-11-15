import React from 'react';
import PageMeta from '../components/meta/PageMeta';
import ContactsForm from '../components/contact/ContactsForm';
import ReviewTwo from '../components/tabs/ReviewTabTwo';
import Navbar from '../components/header/Navbar';
import Layout from '../components/layout/Layout';
import FooterOne from '../components/footer/FooterOne';
import AboutPageHero from '../components/about/AboutPageHero';
import FeatureAssistent from '../components/features/FeatureAssistents';
import ChatBubbleComponent from '../components/assistent/ChatBubbleComponenet';
import PageHeader from '../components/header/PageHeader';

const RequestDemo = () => {
  return (
    <>
      <div className="App">
        <ChatBubbleComponent />
      </div>
      <Layout>
        <PageMeta
          title="Anpassad AI-Assistent | AI-Chatbot | Förbättra Kundservice med AI"
          description="Upptäck hur vår anpassade AI-assistent, tränad specifikt på ert företags unika behov, kan revolutionera er kundservice. Vår AI-chatbot erbjuder skräddarsydda lösningar för att effektivisera kundinteraktioner och ge exakta svar på kundförfrågningar."
          keywords="AI-chatbot, Anpassad AI-assistent, AI för kundservice, Skräddarsydd AI, Företagsspecifik AI, Kundserviceautomation"
        />
        <Navbar />
        <PageHeader
          title="AI-Assistenter"
          desc="Utforska vår avancerade, skräddarsydda AI-chatbot, drivet av ChatGPT 4 och 3.5-teknologi, designad exklusivt för att hantera och leverera information unik för just ert företag. Vår AI-assistent specialiserar sig på att förstå och navigera i era specifika företagsdata, produkter och tjänster, och erbjuder en personanpassad kundserviceupplevelse. Utrustad för att effektivt bemöta kundförfrågningar med precision och insikt, garanterar vår lösning att era kunder får korrekt och relevant information specifikt om ert företag, utan inblandning av externa datakällor."
        />

        <FeatureAssistent />
        <FooterOne footerGradient />
      </Layout>
    </>
  );
};

export default RequestDemo;
