import React from "react";
import PageHeader from "../components/header/PageHeader";
import dynamic from "next/dynamic";
import PageMeta from "../components/meta/PageMeta";
import Layout from "../components/layout/Layout";

const FeatureTwo = dynamic(() => import("../components/features/FeatureTwo"));
const FooterOne = dynamic(() => import("../components/footer/FooterOne"), {
	loading: () => <p>Loading...</p>,
});
const Navbar = dynamic(() => import("../components/header/Navbar"), {
	loading: () => <p>Loading...</p>,
});

const Services = () => {
	return (
		<Layout>
			<PageMeta
				title='Enormt IT-lösningar | Omfattande IT-tjänster och support - Stockholm'
				description='Upptäck vårt utbud av IT-lösningar. Från skräddarsydda webbplatser till IT-system och mobilappar. Kontakta oss idag för att förbättra din affärs IT-behov.'
				keywords='IT-lösningar, webbutveckling, mobilappar, IT-supports, SEO, databashantering, IT-partners, skräddarsydda IT-lösningar, användarvänlig design, molntjänster'
			></PageMeta>
			<Navbar />
			<PageHeader
				title='Växande utbud av IT-lösningar'
				desc='Vi erbjuder en omfattande portfölj av IT-tjänster, skräddarsydda för att möta just ert företags unika behov. Vårt team av experter specialiserar sig på att utveckla innovativa och skräddarsydda IT-lösningar som moderniserar & driver era affärsresultat framåt.'
			/>
			{/* <FeatureTwo /> */}
			<FooterOne footerGradient />
		</Layout>
	);
};

export default Services;
