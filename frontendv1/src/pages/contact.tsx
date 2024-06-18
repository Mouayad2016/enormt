import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Footer from "@/comp/footer";

import BookMeeting from "@/comp/contact/BookMeeting";

import AboutSlider from "@/comp/about/AboutSlider";
import ContactForm from "@/comp/contact/ContactForm";
import ContactUsWith from "@/comp/contact/ContactUsWith";
import NoBGHeader from "../comp/contact/Header";
import NavBar from "@/comp/Navbar";

function About() {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";
	return (
		<main className='flex min-h-screen flex-col '>
			<NavBar />
			<NoBGHeader
				title={t("contact.title")}
				description={t("contact.description")}
			/>
			<BookMeeting />
			<ContactUsWith />
			<ContactForm />
			<div className='pb-12'>
				<AboutSlider noTitle={true} />
			</div>
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
