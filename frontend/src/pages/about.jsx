import React from "react";
import AboutPageHero from "../components/about/AboutPageHero";
import PageMeta from "../components/meta/PageMeta";
import FeatureImgThree from "../components/features/FeatureImgThree";
import Team from "../components/team/team";

import FooterOne from "../components/footer/FooterOne";
import Navbar from "../components/header/Navbar";
import Layout from "../components/layout/Layout";
import {PopupWidget} from "react-calendly";
// import TeamMember from './teamMember';

const About = () => {
  return (
    <Layout>
      <PageMeta title="Om oss" />
      <Navbar />
      <AboutPageHero />  
      <FeatureImgThree />
      <Team />{" "}
      <FooterOne footerGradient />{" "}
    </Layout>
  );
};

export default About;
