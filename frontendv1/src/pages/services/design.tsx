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
import DesginSlider from "../../comp/desgin/DesignSlider";
import NavBar from "@/comp/Navbar";

function Desgin() {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";

	const services = [
		[
			t("design.what_is_ui_design.title"),
			t("design.what_is_ui_design.description"),
		],
		[
			t("design.what_is_ux_design.title"),
			t("design.what_is_ux_design.description"),
		],
		[
			t(
				"design.What_is_important_to_consider_when_it_comes_to_UI_and_UX.title"
			),
			t(
				"design.What_is_important_to_consider_when_it_comes_to_UI_and_UX.description"
			),
		],
		[
			t("design.how_does_a_good_design_affect_my_app_or_platform.title"),
			t("design.how_does_a_good_design_affect_my_app_or_platform.description"),
		],
		[
			t("design.what_does_a_design_cost.title"),
			t("design.what_does_a_design_cost.description"),
		],
		[
			t("design.how_does_it_work.title"),
			t("design.how_does_it_work.description"),
		],
	];

	return (
		<main className='flex min-h-screen flex-col '>
			<NavBar />
			<div className='relative overflow-hidden'>
				<DesginSlider />
				<TextHeader
					title={t("design.title")}
					description={t("design.description")}
					light_bg_opacity={true}
					shortHeight={false}
				/>

				<InfoGrid info={services} title={t("design.info_title")} />
			</div>
			<Effect />
			<div className='flex flex-col-reverse lg:flex-row w-full  justify-around items-center'></div>
			<div className='relative overflow-hidden'>
				<ContatUs
					title={t("design.contact_us.title")}
					desc={t("design.contact_us.description")}
					video={false}
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
export default Desgin;
