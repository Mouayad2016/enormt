import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import SliderNumber from "./components/LogoSlider";
import CenterLayout from "./components/CenterLayout";

function VideoHeader() {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";
	return (
		<div className='relative lg:h-[850px] h-screen flex flex-col justify-between'>
			<video
				autoPlay
				loop
				muted
				className='absolute w-auto min-w-full h-full object-cover'
			>
				<source src='/stockholm.mp4' type='video/mp4' />
			</video>

			<div className=' flex flex-col h-full sm:justify-center justify-center'>
				<CenterLayout>
					<div className='absolute inset-0 bg-black opacity-50 z-20'></div>

					<div className='relative z-30 flex flex-col items-start justify-center md:justify-start mt-40 '>
						<div className='max-w-5xl'>
							<h1
								className={`text-white lg:text-7xl md:text-5xl text-4xl font-bold ${
									isRTL ? "font-notokufi" : "font-archivo"
								}`}
							>
								{t("welcome")}
							</h1>
						</div>
						<div className='h-6'></div>
						<div className='lg:max-w-3xl md:max-w-2xl sm:max-w-xl'>
							<p className='  text-white text-xl font-medium '>
								{t("description")}
							</p>
						</div>
						<div className='h-6'></div>

						<div className='flex py-4 flex-col sm:flex-row'>
							<div className='rounded-full shadow-2xl  text-white px-12 py-2 flex items-center text-lg font-bold font-caveat glass-effect'>
								<p>{t("contact_btn")}</p>
							</div>
							<div className='h-4'></div>
							<div className='w-4'></div>
							<div className='rounded-full shadow-2xl text-white opacity-75 px-12 py-2 flex items-center text-lg font-bold font-caveat glass-effect '>
								<p>{t("join_us_btn")}</p>
							</div>
						</div>
					</div>
				</CenterLayout>
			</div>

			<div className='pb-8'>
				<SliderNumber />
			</div>
		</div>
	);
}

export default VideoHeader;
