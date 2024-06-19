import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Footer from "@/comp/footer";
import SliderNumber from "@/comp/components/LogoSlider";

import BookMeeting from "@/comp/contact/BookMeeting";

import AboutSlider from "@/comp/about/AboutSlider";
import ContactForm from "@/comp/contact/ContactForm";
import ContactUsWith from "@/comp/contact/ContactUsWith";
import NoBGHeader from "../comp/contact/Header";
import NavBar from "@/comp/Navbar";
import CenterLayout from "@/comp/components/CenterLayout";

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
			<div className='pb-12'>
				<AboutSlider noTitle={true} />
			</div>
			<ContactUsWith />
			<CenterLayout>
				<div className='bg-black mb-12 py-6'>
					<SliderNumber />
				</div>{" "}
			</CenterLayout>
			<ContactForm />
			{/* <CenterLayout>
				<div className='flex items-center justify-start w-full mb-16 mt-4'>
					<video
						autoPlay
						loop
						muted
						className='object-cover w-full h-full rounded-xl shadow-xl border-4 border-gray-300'
					>
						<source src='/videos/sveasoft_ab.mp4' type='video/mp4' />
					</video>
				</div>
			</CenterLayout> */}
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
