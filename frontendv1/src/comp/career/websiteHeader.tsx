import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import CenterLayout from "../components/CenterLayout";
import Image from "next/image";

function CareerHeader() {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";
	return (
		<div className='relative h-screen lg:h-[900px] flex flex-col justify-between'>
			<Image
				alt='SveaSoft Desgin'
				width={2500}
				height={2500}
				src='/images/bg/career.jpg'
				className='absolute w-auto min-w-full h-full object-cover  '
			></Image>

			<div className='flex flex-col h-full sm:justify-center justify-center'>
				<CenterLayout>
					<div className='absolute inset-0 bg-black bg-opacity-25 z-20'></div>

					<div className='relative z-30 flex flex-col items-start justify-center md:justify-start mt-40 '>
						<div className='max-w-4xl xl:max-w-6xl'>
							<h1
								className={`text-white xl:text-7xl lg:text-6xl md:text-6xl sm:text-5xl text-4xl font-bold ${
									isRTL ? "font-notokufi" : "font-archivo"
								}`}
							>
								{t("career.title")}
							</h1>
						</div>
						<div className='h-6'></div>
						<div className='lg:max-w-3xl md:max-w-2xl sm:max-w-xl'>
							<p className='  text-white text-lg md:text-xl lg:text-2xl  font-medium '>
								{t("career.description")}
							</p>
						</div>
						<div className='h-6'></div>
					</div>
				</CenterLayout>
			</div>
		</div>
	);
}

export default CareerHeader;
