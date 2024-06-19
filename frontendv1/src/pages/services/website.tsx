import Header from "../../comp/contact/Header";
import ImageSlider from "../../comp/ImageSlider";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Effect from "@/comp/effect";
import Footer from "@/comp/footer";
import TextHeader from "@/comp/TextHeader";
import InfoGrid from "@/comp/services/InfoGrid";
import ContatUs from "@/comp/components/ContactUs";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import VerticalSlider from "@/comp/VerticalSlider";
import WebSiteHeader from "@/comp/website/websiteHeader";
import NavBar from "@/comp/Navbar";

function Website() {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";

	const services = [
		[
			t("website.what_is_a_website.title"),
			t("website.what_is_a_website.description"),
		],
		[
			t("website.when_should_i_choose_a_website.title"),
			t("website.when_should_i_choose_a_website.description"),
		],
		[
			t("website.what_is_the_best_technology_for_developing_a_website.title"),
			t(
				"website.what_is_the_best_technology_for_developing_a_website.description"
			),
		],
		[
			t("website.what_does_a_website_cost.title"),
			t("website.what_does_a_website_cost.description"),
		],
		[
			t("website.how_does_it_work.title"),
			t("website.how_does_it_work.description"),
		],
	];

	return (
		<main className='flex min-h-screen flex-col '>
			<NavBar />
			<div className='relative overflow-hidden'>
				<WebSiteHeader />
				{/* <div className='absolute inset-x-0 top-2/2 transform -translate-y-1/2 h-12 bg-gradient-to-b from-transparent via-white to-transparent z-20'></div> */}
				<InfoGrid info={services} title={t("website.info_title")} />
			</div>
			<Effect />
			<div className='flex flex-col-reverse lg:flex-row w-full  justify-around items-center'></div>
			<div className='relative overflow-hidden'>
				<ContatUs
					title={t("website.contact_us.title")}
					desc={t("website.contact_us.description")}
					video={true}
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
export default Website;
