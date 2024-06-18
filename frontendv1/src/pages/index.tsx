import HomeInfo from "@/comp/Info";
import Header from "../comp/contact/Header";
import VideoHeader from "../comp/VideoHeader";
import ImageSlider from "../comp/ImageSlider";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Effect from "@/comp/effect";
import Services from "@/comp/services";
import Testimonies from "@/comp/testimonies";
import Footer from "@/comp/footer";
import ContatUs from "@/comp/components/ContactUs";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import VerticalSlider from "@/comp/VerticalSlider";
import DesginSlider from "@/comp/desgin/DesignSlider";
import NavBar from "@/comp/Navbar";

function Home() {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";
	return (
		<main className='flex min-h-screen flex-col '>
			<NavBar />
			<VideoHeader />
			<HomeInfo />

			<div className='relative overflow-hidden'>
				<Effect />
				<div className='absolute inset-x-0 top-2/2 transform -translate-y-1/2 h-12 bg-gradient-to-b from-transparent via-white to-transparent z-20'></div>
				<ImageSlider isHeader={false} />
				<div className='absolute inset-x-0 top-2/2 transform -translate-y-1/2 h-12 bg-gradient-to-b from-transparent via-white to-transparent z-20'></div>
				<Services />
			</div>
			<Testimonies />
			<div className='relative overflow-hidden'>
				<ContatUs
					title={t("contact_us_container.title")}
					desc={t("contact_us_container.description")}
				/>
				{/* <div className='absolute inset-x-0 top-2/2 transform -translate-y-1/2 h-12 bg-gradient-to-b from-transparent via-black to-transparent z-20'></div> */}
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
export default Home;
