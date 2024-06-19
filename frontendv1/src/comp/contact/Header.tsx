import Link from "next/link";
import CenterLayout from "../components/CenterLayout";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function NoBGHeader({ title, description }: any) {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";
	return (
		<div
			className={`relative top-0 left-0 w-full max-h-[1024px] 
					h-[480px] sm:h-[450px]
				 flex flex-col justify-end bg-black 
						
							bg-opacity-0 text-black`}
		>
			<div className='flex flex-col sm:justify-center justify-center'>
				<CenterLayout>
					<div
						className={`relative z-30  flex flex-col items-start justify-center md:justify-start mt-20 mb-20 ${
							isRTL ? "font-notokufi" : "font-archivo"
						}`}
					>
						<div className='max-w-4xl xl:max-w-6xl'>
							<h1
								className={` xl:text-7xl lg:text-6xl md:text-6xl sm:text-5xl text-4xl font-bold`}
							>
								{title}
							</h1>
						</div>
						<div className='h-6'></div>
						<div className='lg:max-w-3xl md:max-w-2xl sm:max-w-xl'>
							<p className=' text-lg md:text-xl lg:text-2xl '>{description}</p>
						</div>
					</div>
				</CenterLayout>
			</div>
		</div>
	);
}

export default NoBGHeader;
