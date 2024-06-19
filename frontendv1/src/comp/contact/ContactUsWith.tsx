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
							{t("contact.contact_with.title")}
						</h1>
					</div>
				</div>

				<div className='flex flex-wrap xl:flex-nowrap w-full rounded-lg'>
					<div className='p-2 w-2/4 xl:w-1/4'>
						<div className='h-full text-black bg-gray-300 bg-opacity-75 rounded-lg'>
							<div
								className={`p-2 md:p-4 h-full w-full glass-effect rounded-lg items-start flex flex-col justify-between min-h-44 lg:min-h-64 lg:p-4 ${
									isRTL ? "font-notokufi" : "font-mono"
								} text-md md:text-lg lg:text-xl xl:text-2xl`}
							>
								<p className='text-md font-bold uppercase'>
									{t("contact.contact_with.phone.header")}
								</p>
								<a
									href='tel:+46733524957'
									className=' text-sm md:text-base lg:text-xl font-mono font-bold'
								>
									{t("contact.contact_with.phone.main")}
								</a>
								<p className='text-xs md:text-sm font-archivo h-[60px] flex items-end'>
									{t("contact.contact_with.phone.footer")}
								</p>
							</div>
						</div>
					</div>
					<div className='p-2 w-2/4 xl:w-1/4'>
						<div className='h-full  text-black bg-gray-300 bg-opacity-75 rounded-lg '>
							<div
								className={`p-2 md:p-4 h-full w-full glass-effect rounded-lg items-start flex flex-col justify-between min-h-44 lg:min-h-64 lg:p-4 ${
									isRTL ? "font-notokufi" : "font-mono"
								} text-md md:text-lg lg:text-xl xl:text-2xl`}
							>
								<p className='font-bold uppercase'>
									{t("contact.contact_with.mail.header")}
								</p>
								<a
									href='mailto:hej@sveasoftab.se'
									className='text-sm md:text-lg lg:text-xl font-mono font-bold'
								>
									{t("contact.contact_with.mail.main")}
								</a>
								<p className='text-xs md:text-sm font-archivo h-[60px] flex items-end'>
									{t("contact.contact_with.mail.footer")}
								</p>
							</div>
						</div>
					</div>
					<div className='p-2 w-2/4 xl:w-1/4'>
						<div className='h-full text-black bg-gray-300 bg-opacity-75 rounded-lg '>
							<div
								className={`p-2 md:p-4 h-full w-full glass-effect rounded-lg items-start flex flex-col justify-between min-h-44 lg:min-h-64 lg:p-4 ${
									isRTL ? "font-notokufi" : "font-mono"
								} text-md md:text-lg lg:text-xl xl:text-2xl`}
							>
								<p className=' text-md font-bold uppercase'>
									{t("contact.contact_with.visit.header")}
								</p>
								<p className=' text-sm md:text-lg lg:text-xl font-mono font-bold'>
									{t("contact.contact_with.visit.main")}
								</p>

								<p className='text-xs md:text-sm font-archivo h-[60px] flex items-end'>
									{t("contact.contact_with.visit.footer")}
								</p>
							</div>
						</div>
					</div>
					<div className='p-2 w-2/4 xl:w-1/4'>
						<div className='h-full  text-black bg-gray-300 bg-opacity-75 rounded-lg '>
							<div
								className={`p-4 h-full w-full glass-effect rounded-lg items-start flex flex-col justify-between min-h-44 lg:min-h-64 lg:p-4 ${
									isRTL ? "font-notokufi" : "font-mono"
								} text-md md:text-lg lg:text-xl xl:text-2xl`}
							>
								<p className=' text-md font-bold uppercase'>
									{t("contact.contact_with.send_a_message.header")}
								</p>
								<p className=' text-lg md:text-2xl lg:text-4xl font-mono font-bold'>
									{t("contact.contact_with.send_a_message.main")}
								</p>
								<p className='text-xs md:text-sm font-archivo h-[60px] flex items-end'>
									{t("contact.contact_with.send_a_message.footer")}
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
