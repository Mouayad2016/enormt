import Header from "../comp/Header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "@/comp/footer";
import AboutNavbar from "@/comp/about/Navbar";
import ImagesGallery from "@/comp/about/Gallery";
import AboutSlider from "@/comp/about/AboutSlider";
import ContatUs from "@/comp/components/ContactUs";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function About() {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";
	return (
		<main className='flex min-h-screen flex-col '>
			<Header />
			<div className='relative overflow-hidden'>
				<AboutNavbar />
				<div className='absolute inset-x-0 top-2/2 transform -translate-y-1/2 h-12 bg-gradient-to-b from-transparent via-white to-transparent z-20'></div>
				<AboutSlider noTitle={false} />
			</div>
			<div className='z-30'>
				<p>Vi jobbar</p>
				<ImagesGallery />
			</div>
			<div className='relative overflow-hidden'>
				<ContatUs
					title={t("contact_us_container.title")}
					desc={t("contact_us_container.description")}
				/>{" "}
				<div className='absolute inset-x-0 top-2/2 transform -translate-y-1/2 h-12 bg-gradient-to-b from-transparent via-black to-transparent z-20'></div>
				<Footer />
			</div>
		</main>
	);
}
export const getStaticProps = async ({ locale }: any) => ({
	props: {
		...(await serverSideTranslations(locale, ["common"])),
	},
});
export default About;
