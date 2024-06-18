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
	return (
		<div className='h-full bg-black flex flex-col'>
			<CenterLayout>
				<div className='pt-12 text-3xl mb-12'>Logo</div>

				<div className='flex font-mono'>
					<div className='flex flex-col justify-start flex-grow pr-4'>
						<div className='flex flex-col text-sm md:text-base '>
							<p className='flex pb-6 text-lg'>Länkar</p>
							<Link href={"/"} className='py-2 text-gray-300'>
								{t("links.home", "Default: Home")}
							</Link>
							<Link href='/about' className='py-2 text-gray-300'>
								{t("links.about_us", "Default: About Us")}
							</Link>

							<Link href='/career' className='py-2 text-gray-300'>
								{t("links.career", "Default: Career")}
							</Link>
							<Link href='/contact' className='py-2 text-gray-300'>
								{t("links.contact", "Default: Contact")}
							</Link>
						</div>
					</div>
					<div className='flex flex-col text-sm md:text-base flex-grow pr-4'>
						<p className=' text-lg pb-6 '>Tjänster</p>
						<p className='py-2  text-gray-300'>Mobilapputveckling</p>
						<p className='py-2  text-gray-300'>Webbapputveckling</p>
						<p className='py-2  text-gray-300'>Hemsidutveckling</p>
						<p className='py-2  text-gray-300'>UX & UI Design</p>
					</div>

					<div className='hidden lg:flex flex-col item flex-grow'>
						<p className='pb-6 text-lg font-mono'>Kontakt</p>
						<div className='flex items-center'>
							<Image
								className='w-32 h-32 rounded-lg object-cover mr-4'
								src='/team/mouayad_mouayad.png'
								height={300}
								width={300}
							></Image>
							<div className='h-5/6 w-[0.5px] mr-4'></div>

							<div className='flex h-full flex-col items-start justify-around text-gray-300 font-mono'>
								<p className='text-sm'>Grundare </p>
								<p className='text-sm pr-4'>Mouayad Mouayad</p>
								<div className='flex flex-col text-sm text-blue-300'>
									<Link href='mailto:mouayad@sveasoft.se' className='mr-2'>
										mouayad@sveasoft.se
									</Link>
									<Link href='tel:+46733524957'>+46733524957</Link>
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
				<div className='flex lg:hidden flex-col item'>
					<p className='pb-6 text-lg font-mono'>Kontakt</p>
					<div className='flex items-center'>
						<Image
							className='w-32 h-32 rounded-lg object-cover mr-4'
							src='/team/mouayad_mouayad.png'
							height={300}
							width={300}
						></Image>
						<div className='h-5/6 w-[0.5px] mr-4'></div>

						<div className='flex h-full flex-col items-start justify-around text-gray-300 font-mono'>
							<p className='text-sm'>Grundare </p>
							<p className='text-sm pr-4'>Mouayad Mouayad</p>
							<div className='flex flex-col text-sm text-blue-300'>
								<Link href='mailto:mouayad@sveasoft.se' className='mr-2'>
									mouayad@sveasoft.se
								</Link>
								<Link href='tel:+46733524957'>+46733524957</Link>
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
				<div className='h-20 py-8 flex '>
					<p>&copy; {currentYear} SveaSoft AB - 559473-4823</p>
				</div>
			</CenterLayout>
		</div>
	);
}

export default Footer;
