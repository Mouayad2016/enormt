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
import NavBar from "@/comp/Navbar";

function WebApp() {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";

	const services = [
		[
			t("web_app_development.what_is_a_web_app.title"),
			t("web_app_development.what_is_a_web_app.description"),
		],
		[
			t("web_app_development.when_should_i_choose_a_mobile_app.title"),
			t("web_app_development.when_should_i_choose_a_mobile_app.description"),
		],
		[
			t(
				"web_app_development.what_is_the_best_technology_for_developing_a_mobile_app.title"
			),
			t(
				"web_app_development.what_is_the_best_technology_for_developing_a_mobile_app.description"
			),
		],
		[
			t("web_app_development.ai_and_web_apps.title"),
			t("web_app_development.ai_and_web_apps.description"),
		],
		[
			t("web_app_development.what_does_a_web_app_cost.title"),
			t("web_app_development.what_does_a_web_app_cost.description"),
		],
		[
			t("web_app_development.how_does_it_work.title"),
			t("web_app_development.how_does_it_work.description"),
		],
	];

	return (
		<main className='flex min-h-screen flex-col '>
			<NavBar />
			<div className='relative overflow-hidden'>
				<TextHeader
					title={t("web_app_development.title")}
					description={t("web_app_development.description")}
					light_bg_opacity={false}
					shortHeight={true}
				/>
				<VerticalSlider />
				<div className='absolute inset-x-0 top-2/2 transform -translate-y-1/2 h-12 bg-gradient-to-b from-transparent via-white to-transparent z-20'></div>
				<InfoGrid info={services} title={t("web_app_development.info_title")} />
			</div>
			<Effect />
			<div className='flex flex-col-reverse lg:flex-row w-full  justify-around items-center'></div>
			<div className='relative overflow-hidden'>
				<ContatUs
					title={t("web_app_development.contact_us.title")}
					desc={t("web_app_development.contact_us.description")}
					video={true}
				/>
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
export default WebApp;
