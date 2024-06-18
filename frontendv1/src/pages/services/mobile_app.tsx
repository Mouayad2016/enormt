import HomeInfo from "@/comp/Info";
import Header from "../../comp/Header";
import Navbar from "../../comp/HomeHeader";
import ImageSlider from "../../comp/ImageSlider";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Effect from "@/comp/effect";
import Services from "@/comp/services";
import Testimonies from "@/comp/testimonies";
import Footer from "@/comp/footer";
import AboutSlider from "@/comp/about/AboutSlider";
import ContatUs from "@/comp/components/ContactUs";
import InfoGrid from "@/comp/services/InfoGrid";
import TextHeader from "@/comp/TextHeader";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import ContatUsVideo from "@/comp/components/ContactUsVideo";

function MobileApp() {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";

	const services = [
		[
			t("mobile_app_development.what_is_a_mobile_app.title"),
			t("mobile_app_development.what_is_a_mobile_app.description"),
		],
		[
			t("mobile_app_development.when_should_i_choose_a_mobile_app.title"),
			t("mobile_app_development.when_should_i_choose_a_mobile_app.description"),
		],
		[
			t(
				"mobile_app_development.what_is_the_best_technology_for_developing_a_mobile_app.title"
			),
			t(
				"mobile_app_development.what_is_the_best_technology_for_developing_a_mobile_app.description"
			),
		],
		[
			t("mobile_app_development.ai_and_mobile_apps.title"),
			t("mobile_app_development.ai_and_mobile_apps.description"),
		],
		[
			t("mobile_app_development.what_does_a_mobile_app_cost.title"),
			t("mobile_app_development.what_does_a_mobile_app_cost.description"),
		],
		[
			t("mobile_app_development.how_does_it_work.title"),
			t("mobile_app_development.how_does_it_work.description"),
		],
	];
	return (
		<main className='flex min-h-screen flex-col '>
			<Header />
			<div className='relative overflow-hidden'>
				<TextHeader
					title={t("mobile_app_development.title")}
					description={t("mobile_app_development.description")}
					light_bg_opacity={false}
					shortHeight={true}
				/>

				<ImageSlider isHeader={true} />
				<div className='absolute inset-x-0 top-2/2 transform -translate-y-1/2 h-12 bg-gradient-to-b from-transparent via-white to-transparent z-20'></div>
				<InfoGrid
					info={services}
					title={t("mobile_app_development.info_title")}
				/>
			</div>
			<Effect />
			<div className='flex flex-col-reverse lg:flex-row w-full  justify-around items-center'></div>
			<div className='relative overflow-hidden'>
				<ContatUs
					title={t("mobile_app_development.contact_us.title")}
					desc={t("mobile_app_development.contact_us.description")}
					video={true}
				/>{" "}
				{/* <ContatUsVideo
					title={t("mobile_app_development.contact_us.title")}
					desc={t("mobile_app_development.contact_us.description")}
				/> */}
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
export default MobileApp;
