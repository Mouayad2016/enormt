import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import PageHeader from "../../components/header/PageHeader";
import PageMeta from "../../components/meta/PageMeta";

import Layout from "../../components/layout/Layout";
import db from "../../data/db/data";
import Section from "../../components/section/section";

const FooterOne = dynamic(() => import("../../components/footer/FooterOne"), {
	loading: () => <p>Loading...</p>,
});

const Navbar = dynamic(() => import("../../components/header/Navbar"), {
	loading: () => <p>Loading...</p>,
});

const SingleService = () => {
	const [item, setitem] = useState({});
	const router = useRouter();
	const { title } = router.query;
	useEffect(() => {
		const selectedItem = db.find((item) => item.tjänst_sida.rubrik === title);
		setitem(selectedItem);
	}, [title]);

	let meta_title = "";
	let meta_dec = "";
	let meta_keywords = "";
	let dec = "";
	let sections = [];
	if (item && item.tjänst_sida) {
		meta_title = item.tjänst_sida.meta_title;
		meta_dec = item.tjänst_sida.meta_dec;
		meta_keywords = item.tjänst_sida.meta_keywords;
		dec = item.tjänst_sida.underRubrik;
		sections = item.tjänst_sida.sections;
	}

	return (
		<>
			<Layout>
				<PageMeta
					title={meta_title}
					description={meta_dec}
					keywords={meta_keywords}
				/>
				<Navbar />
				<PageHeader title={"title"} desc={"dec"} />
				<Section paddingTop={true} sections={sections} />
				<FooterOne footerGradient />
			</Layout>{" "}
		</>
	);
};

export default SingleService;
