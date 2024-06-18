import Link from "next/link";
import CenterLayout from "./components/CenterLayout";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function Effect() {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";
	return (
		<div className='flex flex-col justify-between pb-12 bg-white'>
			<CenterLayout>
				<div className='relative flex flex-col items-start justify-center md:justify-start mt-4 mb-8 md:mt-8 lg:mt-16 md:mb-8 '>
					<div className='max-w-2xl lg:max-w-3xl'>
						<h1
							className={`text-black lg:text-6xl md:text-4xl text-3xl font-bold ${
								isRTL ? "font-notokufi" : "font-archivo"
							}`}
						>
							{t("we_stand_out_with")}
						</h1>
					</div>
				</div>

				<div className='flex flex-wrap lg:flex-nowrap w-full rounded-lg'>
					<div className='p-2 w-2/4 lg:w-1/4'>
						<div className='h-full text-black bg-gray-300 bg-opacity-75 rounded-lg'>
							<div
								className={`p-4 h-full w-full glass-effect rounded-lg items-start flex flex-col justify-between min-h-44 lg:min-h-64 lg:p-4 ${
									isRTL ? "font-notokufi" : "font-mono"
								} text-md md:text-lg lg:text-xl xl:text-2xl`}
							>
								<p className='text-md font-bold uppercase'>
									{t("out_effects.customer_satisfaction.title")}
								</p>
								<p className=' text-4xl font-mono font-bold'>4.5/5</p>
								<p className=' text-sm md:text-md lg:text-lg font-archivo h-[40px] flex items-end'>
									{t("out_effects.customer_satisfaction.description")}
								</p>
							</div>{" "}
						</div>
					</div>
					<div className='p-2 w-2/4 lg:w-1/4'>
						<div className='h-full  text-black bg-gray-300 bg-opacity-75 rounded-lg '>
							<div
								className={`p-4 h-full w-full glass-effect rounded-lg items-start flex flex-col justify-between min-h-44 lg:min-h-64 lg:p-4 ${
									isRTL ? "font-notokufi" : "font-mono"
								} text-md md:text-lg lg:text-xl xl:text-2xl`}
							>
								<p className='text-md font-bold uppercase'>
									{t("out_effects.simplicity.title")}
								</p>
								<p className=' text-4xl font-mono font-bold'>90%</p>
								<p className=' text-sm md:text-md lg:text-lg font-archivo h-[40px] flex items-end'>
									{t("out_effects.simplicity.description")}
								</p>
							</div>
						</div>
					</div>
					<div className='p-2 w-2/4 lg:w-1/4'>
						<div className='h-full text-black bg-gray-300 bg-opacity-75 rounded-lg '>
							<div
								className={`p-4 h-full w-full glass-effect rounded-lg items-start flex flex-col justify-between min-h-44 lg:min-h-64 lg:p-4 ${
									isRTL ? "font-notokufi" : "font-mono"
								} text-md md:text-lg lg:text-xl xl:text-2xl`}
							>
								<p className=' text-md font-bold uppercase'>
									{t("out_effects.efficiency.title")}
								</p>
								<p className=' text-4xl font-mono font-bold'>100%</p>

								<p className=' text-sm md:text-md lg:text-lg font-archivo h-[40px] flex items-end'>
									{t("out_effects.efficiency.description")}
								</p>
							</div>
						</div>
					</div>
					<div className='p-2 w-2/4 lg:w-1/4'>
						<div className='h-full  text-black bg-gray-300 bg-opacity-75 rounded-lg '>
							<div
								className={`p-4 h-full w-full glass-effect rounded-lg items-start flex flex-col justify-between min-h-44 lg:min-h-64 lg:p-4 ${
									isRTL ? "font-notokufi" : "font-mono"
								} text-md md:text-lg lg:text-xl xl:text-2xl`}
							>
								<p className=' text-md font-bold uppercase'>
									{t("out_effects.profitability.title")}
								</p>
								<p className=' text-4xl font-mono font-bold'>80%</p>
								<p className=' text-sm md:text-md lg:text-lg font-archivo h-[40px] flex items-end'>
									{t("out_effects.profitability.description")}
								</p>
							</div>
						</div>
					</div>
				</div>
			</CenterLayout>
		</div>
	);
}

export default Effect;
