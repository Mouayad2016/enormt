import React from "react";
import dynamic from "next/dynamic";

import PageMeta from "../components/meta/PageMeta";
import Layout from "../components/layout/Layout";
import HeroNine from "../components/hem/HeroNine";
import HomeSection from "../components/hem/HomeSection";

const FooterOne = dynamic(() => import("../components/footer/FooterOne"), {
	loading: () => <p>Loading...</p>,
});
const Navbar = dynamic(() => import("../components/header/Navbar"), {
	loading: () => <p>Loading...</p>,
});
const CryptoCustomerCounter = dynamic(
	() => import("../components/hem/CryptoCustomerCounter"),
	{
		loading: () => <p>Loading...</p>,
	}
);
const UXUIDesign = dynamic(() => import("../components/hem/designCard"), {
	loading: () => <p>Loading...</p>,
});
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
