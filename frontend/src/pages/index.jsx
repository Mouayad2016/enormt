import React from "react";
import PageMeta from "../components/meta/PageMeta";
import CryptoCustomerCounter from "../components/hem/CryptoCustomerCounter";
import FooterOne from "../components/footer/FooterOne";
import Navbar from "../components/header/Navbar";
import Layout from "../components/layout/Layout";
import HeroNine from "../components/hem/HeroNine";
import HomeSection from "../components/hem/HomeSection";
import UXUIDesign from "../components/hem/designCard";

const Home = () => {
	return (
		<>
			<Layout>
				<PageMeta
					title='Enormt - Anpassad IT-Systemutveckling | Ledande IT-leverantör'
					description='Vi är din partner för IT-lösningar. Från webbutveckling till mobilappar och grafisk design, hjälper vi dig att ta ditt företag till nästa nivå. Kontakta oss idag!'
					keywords='IT-lösningar, webbutveckling, mobilappar, grafisk design, IT-system, IT-leverantör, Solna, Sverige'
				/>
				<Navbar />
				<HeroNine />
				<CryptoCustomerCounter />
				<HomeSection></HomeSection>
				<UXUIDesign></UXUIDesign>
				<FooterOne footerGradient />
			</Layout>
		</>
	);
};

export default Home;
