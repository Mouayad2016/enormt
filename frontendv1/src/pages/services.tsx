import HomeInfo from "@/comp/Info";
import Header from "../comp/Header";
import Navbar from "../comp/Navbar";
import ImageSlider from "../comp/ImageSlider";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Effect from "@/comp/effect";
import Services from "@/comp/services";
import Testimonies from "@/comp/testimonies";
import Footer from "@/comp/footer";

function About() {
	return (
		<main className='flex min-h-screen flex-col '>
			<Header />

			<Footer />
		</main>
	);
}
export const getStaticProps = async ({ locale }: any) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});
export default About;
