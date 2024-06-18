import HomeInfo from "@/comp/Info";
import Header from "../comp/Header";
import Navbar from "../comp/Navbar";
import ImageSlider from "../comp/ImageSlider";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Effect from "@/comp/effect";
import Services from "@/comp/services";
import Testimonies from "@/comp/testimonies";
import Footer from "@/comp/footer";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import CareerHeader from "@/comp/career/websiteHeader";
import CenterLayout from "@/comp/components/CenterLayout";
import Link from "next/link";
import AboutSlider from "@/comp/about/AboutSlider";

function About() {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";
	return (
		<main className='flex min-h-screen flex-col '>
			<Header />
			<CareerHeader />
			<div className='flex flex-col justify-between pb-16 bg-white text-black'>
				<CenterLayout>
					<div className='relative flex flex-col items-start justify-center md:justify-start my-10 md:mt-8 lg:mt-16'>
						<div className='max-w-2xl lg:max-w-3xl'>
							<h1
								className={` lg:text-6xl md:text-4xl text-3xl font-bold ${
									isRTL ? "font-notokufi" : "font-archivo"
								}`}
							>
								{t("career.info_title")}
							</h1>
						</div>
					</div>

					<div
						className={`flex justify-center items-center min-h-[200px] bg-gray-50 rounded-md ${
							isRTL ? " font-notokufi" : "font-mono"
						}`}
					>
						<p> {t("career.no_data_message")}</p>
					</div>

					<div>
						<h1
							className={` lg:text-4xl md:text-2xl text-xl font-bold pt-8 ${
								isRTL ? "font-notokufi" : "font-archivo"
							}`}
						>
							{t("career.spontaneous_application.title")}
						</h1>
						<p
							className={`justify-center pt-4 ${
								isRTL ? " font-notokufi" : "font-mono"
							}`}
						>
							{t("career.spontaneous_application.description")}{" "}
							<Link
								className='text-blue-500'
								href='mailto:career@sveasoftab.se'
							>
								career@sveasoftab.se
							</Link>
							.
						</p>
					</div>
				</CenterLayout>
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
