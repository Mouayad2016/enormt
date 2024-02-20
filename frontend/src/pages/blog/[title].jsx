import React from "react";
import dynamic from "next/dynamic";

import BlogDetails from "../../components/blog/BlogDetails";
import PageMeta from "../../components/meta/PageMeta";
import PageHeader from "../../components/header/PageHeader";

import Layout from "../../components/layout/Layout";
import db from "../../data/db/blogsData";

const FooterOne = dynamic(() => import("../../components/footer/FooterOne"), {
	loading: () => <p>Loading...</p>,
});
const Navbar = dynamic(() => import("../../components/header/Navbar"), {
	loading: () => <p>Loading...</p>,
});
export async function getStaticPaths() {
	const paths = db.map((item) => ({
		params: { title: item.title },
	}));
	return { paths, fallback: false };
}
export function getStaticProps(context) {
	const title = context.params.title;
	const selectedItem = db.find((item) => item.title === title);
	return {
		props: {
			item: selectedItem,
		},
	};
}
const SingleBlog = (item) => {
	item = item.item;

	let meta_title = "";
	let title = "";
	let meta_dec = "";
	let meta_keywords = "";
	let dec = "";
	let key = "";
	if (item) {
		title = item.page?.title || "";
		dec = item.page?.desc || "";
		key = item.page?.keywords || "";
	}

	return (
		<Layout>
			<PageMeta title={title} description={dec} keywords={key} />
			<Navbar />
			<PageHeader title={title} />
			<BlogDetails item={item} />
			<FooterOne />
		</Layout>
	);
};

export default SingleBlog;
