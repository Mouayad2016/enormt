import Link from "next/link";
import CenterLayout from "../components/CenterLayout";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function ContactUsWith() {
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
							Kontakta oss nu
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
								<p className='text-md font-bold uppercase'>Ring oss</p>
								<a
									href='tel:+46733524957'
									className=' text-lg lg:text-2xl font-mono font-bold'
								>
									+46733524957
								</a>
								<p className=' text-sm md:text-md lg:text-lg font-archivo h-[60px] flex items-end'>
									Våra öppen tider är alla vardagar medllan 10 och 17
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
								<p className='text-md font-bold uppercase'>Mejla oss</p>
								<a
									href='mailto:hej@sveasoftab.se'
									className=' text-lg lg:text-2xl font-mono font-bold'
								>
									hej@sveasoftab.se
								</a>
								<p className=' text-sm md:text-md lg:text-lg font-archivo h-[60px] flex items-end'>
									Mejla när som vi svara direkt!
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
								<p className=' text-md font-bold uppercase'>Besök oss</p>
								<p className=' text-lg lg:text-2xl font-mono font-bold'>
									Visättravägen 12
								</p>

								<p className=' text-sm md:text-md lg:text-lg font-archivo h-[60px] flex items-end'>
									Kom på besök när du känner för även utan bokning
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
									Skicka direkt medlande
								</p>
								<p className=' text-4xl lg:text-5xl  font-mono font-bold'>👇🏻</p>
								<p className=' text-sm md:text-md lg:text-lg font-archivo h-[60px] flex items-end'>
									Skriv till oss på linkedin om du tjänner för det
								</p>
							</div>
						</div>
					</div>
				</div>
			</CenterLayout>
		</div>
	);
}

export default ContactUsWith;
