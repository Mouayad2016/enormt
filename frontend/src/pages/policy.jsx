import React from "react";
import PageHeader from "../components/header/PageHeader";
import PageMeta from "../components/meta/PageMeta";
import PolicyBody from "../components/policy/policy";
import FooterOne from "../components/footer/FooterOne";
import Navbar from "../components/header/Navbar";
import Layout from "../components/layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <PageMeta title="Enormt - Policy" />
      <Navbar />
      {/* <PageHeadesr /> */}
      <PolicyBody bgWhite />
      <FooterOne footerGradient />
    </Layout>
  );
};

export default Policy;
