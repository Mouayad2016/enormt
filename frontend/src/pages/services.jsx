import React from "react";
import PageHeader from "../components/header/PageHeader";
import PageMeta from "../components/meta/PageMeta";
import FeatureTwo from "../components/features/FeatureTwo";
import FooterOne from "../components/footer/FooterOne";
import Navbar from "../components/header/Navbar";
import Layout from "../components/layout/Layout";
// import {PopupWidget} from "react-caledly";
// import ChatBubbleComponent from "../../components/omaina/home/ChatBubbleComponenet";

const Services = () => {
  return (
    <Layout>
      <div className="App">
      </div>
      <PageMeta title="Tjänster" />
      <Navbar />
      <PageHeader
        title="Växande utbud av IT-lösningar"
        desc="Vi har ett ständigt växande utbud av tjänster och arbetar enbart med noga utvalda och kvalitetssäkrade leverantörer. Klicka runt och läs mer om vilka tjänster som för tillfället finns att tillgå. Om du inte hittar vad du söker så tveka inte att höra av dig till oss. Vi arbetar ständigt med att utöka vårt utbud av tjänster och vill gärna höra om vilka tjänster våra kunder eftersöker. 
        "
      />
      <FeatureTwo /> 
      <FooterOne footerGradient /> 
    </Layout>
  );
};

export default Services;
