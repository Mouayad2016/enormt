import React from "react";
import dynamic from "next/dynamic";

import BlogGrid from "../components/blog/BlogGrid";
import PageMeta from "../components/meta/PageMeta";
import Layout from "../components/layout/Layout";

const FooterOne = dynamic(() => import("../components/footer/FooterOne"), {
	loading: () => <p>Loading...</p>,
});
const Navbar = dynamic(() => import("../components/header/Navbar"), {
	loading: () => <p>Loading...</p>,
});
const Blogs = () => {
	return (
		<>
			<Layout>
				<PageMeta
					title='Senaste nyheter och bloggar från Enormt | IT-tips och insikter'
					description='Utforska våra senaste nyheter och blogginlägg. Få insikter och tips från våra experter. Håll dig uppdaterad med Enormt.'
					keywords='Nyheter, bloggar, IT-tips, insikter, Enormt'
				/>
				<Navbar />
				<BlogGrid />
				<FooterOne footerGradient></FooterOne>
			</Layout>
		</>
	);
};

export default Blogs;
