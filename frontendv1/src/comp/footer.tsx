import Image from "next/image";
import CenterLayout from "./components/CenterLayout";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function Footer() {
	const currentYear = new Date().getFullYear();
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";

	const router = useRouter(); // Get the router object
	const { pathname } = router;
	const isActive = (route: any) => pathname === route;
	return (
		<div className='h-full bg-black flex flex-col'>
			<CenterLayout>
				<div className='pt-12 text-3xl mb-12'>Logo</div>

				<div
					className={`flex font-mono ${
						isRTL ? "font-notokufi" : "font-mono font-bold"
					} `}
				>
					<div className='flex flex-col justify-start flex-grow  '>
						<div className='flex flex-col text-sm md:text-base gap-4'>
							<p className='flex pb-6 text-md md:text-lg font-bold'>
								{t("footer.links")}
							</p>
							<Link
								href={"/"}
								className={`font-bold hover:text-blue-300 text-sm md:text-md '${
									isActive("/") ? "text-blue-300" : "text-gray-300"
								} `}
							>
								{t("links.home", "Default: Home")}
							</Link>
							<Link
								href='/about'
								className={`font-bold hover:text-blue-300 text-sm md:text-md '${
									isActive("/about") ? "text-blue-300" : "text-gray-300"
								} `}
							>
								{t("links.about_us", "Default: About Us")}
							</Link>

							<Link
								href='/careers'
								className={`font-bold hover:text-blue-300 text-sm md:text-md '${
									isActive("/careers") ? "text-blue-300" : "text-gray-300"
								}  `}
							>
								{t("links.career", "Default: Career")}
							</Link>
							<Link
								href='/contact'
								className={`font-bold hover:text-blue-300 text-sm md:text-md '${
									isActive("/contact") ? "text-blue-300" : "text-gray-300"
								} `}
							>
								{t("links.contact", "Default: Contact")}
							</Link>
						</div>
					</div>
					<div
						className={`flex flex-col text-sm md:text-base flex-grow pr-4 gap-4 ${
							isRTL ? "font-notokufi" : "font-mono font-bold"
						} `}
					>
						<p className='flex pb-6 text-md md:text-lg font-bold'>
							{t("links.services")}
						</p>
						<Link
							href='/services/mobile_app'
							className={`font-bold hover:text-blue-300 text-sm md:text-md '${
								isActive("/services/mobile_app")
									? "text-blue-300"
									: "text-gray-300"
							}  `}
						>
							{t("services.mobile_app_development.title")}
						</Link>
						<Link
							href='/services/web_app'
							className={`font-bold hover:text-blue-300 text-sm md:text-md '${
								isActive("/services/web_app")
									? "text-blue-300"
									: "text-gray-300"
							}`}
						>
							{t("services.web_app_development.title")}
						</Link>
						<Link
							href='/services/website'
							className={`font-bold hover:text-blue-300 text-sm md:text-md '${
								isActive("/services/website")
									? "text-blue-300"
									: "text-gray-300"
							} `}
						>
							{t("services.website_development.title")}
						</Link>
						<Link
							href='/services/design'
							className={`font-bold hover:text-blue-300 text-sm md:text-md '${
								isActive("/services/design") ? "text-blue-300" : "text-gray-300"
							}`}
						>
							{t("services.design_for_apps_and_websites.title")}
						</Link>
					</div>

					<div
						className={`hidden lg:flex flex-col item flex-grow ${
							isRTL ? "font-notokufi" : "font-mono font-bold"
						}`}
					>
						<p className='pb-6 text-lg'>{t("footer.contact")}</p>
						<div className='flex items-center '>
							<Image
								className='w-32 h-32 rounded-lg object-cover mr-4'
								src='/team/mouayad_mouayad.png'
								height={300}
								width={300}
							></Image>
							<div className='h-5/6 w-[0.5px] mr-4'></div>

							<div
								className={`flex h-full flex-col items-start justify-around text-gray-300 ${
									isRTL ? "font-notokufi" : "font-mono font-bold"
								}`}
							>
								<p className='text-sm'>{t("people.mouayad.title")} </p>
								<p className='text-sm pr-4'>{t("people.mouayad.name")}</p>
								<div className='flex flex-col text-sm text-blue-300'>
									<Link href='mailto:mouayad@sveasoft.se' className='mr-2'>
										{t("people.mouayad.mail")}
									</Link>
									<Link href='tel:+46733524957'>
										{" "}
										{t("people.mouayad.phone")}
									</Link>
								</div>
								<div className='flex items-center py-2'>
									<Link
										href={
											"https://www.linkedin.com/in/mouayad-mouayad-291220168/"
										}
										className='mr-2'
									>
										<FaLinkedin size='24' color='white' />
									</Link>
									<Link
										href={"https://github.com/Mouayad2016"}
										className='mr-2'
									>
										<FaGithub size='24' color='white' />
									</Link>
									<Link href={"https://wa.me/46733524957"} className='mr-2'>
										<IoLogoWhatsapp size='24' color='white' />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</CenterLayout>
			<div className='w-full h-[0.5px] bg-gray-700 my-12 lg:hidden'></div>
			<CenterLayout>
				<div className='flex lg:hidden flex-col item gap-4'>
					<p className='pb-6 text-md md:text-lg fontbold'>
						{t("footer.contact")}
					</p>
					<div className='flex items-center'>
						<Image
							className={`w-32 h-32 rounded-lg object-cover ${
								isRTL ? "ml-4" : "mr-4"
							} `}
							src='/team/mouayad_mouayad.png'
							height={300}
							width={300}
						></Image>
						<div className='h-5/6 w-[0.5px] mr-4'></div>

						<div className='flex h-full flex-col items-start justify-around text-gray-300 font-mono gap-2'>
							<p className='text-sm md:text-md'>{t("people.mouayad.title")} </p>
							<p className='text-sm md:text-md'>{t("people.mouayad.name")}</p>
							<Link
								href='mailto:mouayad@sveasoft.se'
								className='text-blue-300 text-sm md:text-md'
							>
								{t("people.mouayad.mail")}
							</Link>
							<Link
								href='tel:+46733524957'
								className='text-blue-300 text-sm md:text-md'
							>
								{t("people.mouayad.phone")}
							</Link>
							<div className='flex items-center gap-1'>
								<Link
									href={
										"https://www.linkedin.com/in/mouayad-mouayad-291220168/"
									}
									className='mr-2'
								>
									<FaLinkedin size='24' color='white' />
								</Link>
								<Link href={"https://github.com/Mouayad2016"} className='mr-2'>
									<FaGithub size='24' color='white' />
								</Link>
								<Link href={"https://wa.me/46733524957"} className='mr-2'>
									<IoLogoWhatsapp size='24' color='white' />
								</Link>
							</div>{" "}
						</div>
					</div>
				</div>
			</CenterLayout>

			<div className='w-full h-[0.5px] bg-gray-700 mt-12 '></div>
			<CenterLayout>
				<div className='h-20 py-8 flex text-sm md:text-md'>
					<p>&copy; {currentYear} SveaSoft AB - 559473-4823</p>
				</div>
			</CenterLayout>
		</div>
	);
}

export default Footer;
