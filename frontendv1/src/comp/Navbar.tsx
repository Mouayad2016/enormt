import Link from "next/link";
import CenterLayout from "./components/CenterLayout";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from "next/image";
import ServiesDropDown from "./components/ServicesDropDown";
import LanguageDropdown from "./components/LanguageSwitcher";

function NavBar() {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";
	const router = useRouter(); // Get the router object
	const { pathname } = router;
	const isActive = (route) => pathname === route;

	return (
		<div className='fixed top-1 right-1 left-1 h-[60px] rounded-md bg-black bg-opacity-75 z-50 flex items-center'>
			<div className='w-full'>
				<CenterLayout>
					<div className='flex flex-row justify-between w-full'>
						<div className='text-white flex relative font-caveat text-md gap-[32px]'>
							<p className='w-20 py-2 '>logo</p>
							<Link
								href='/'
								className={`min-w-[70px] py-2 text-center hover:text-blue-300 ${
									isActive("/") ? "text-blue-300" : ""
								}`}
							>
								{t("links.home")}
							</Link>
							<Link
								href='/about'
								className={`min-w-[70px] py-2 text-center hover:text-blue-300 ${
									isActive("/about") ? "text-blue-300" : ""
								}`}
							>
								{t("links.about_us")}
							</Link>
							<ServiesDropDown />
							<Link
								href='/careers'
								className={`min-w-[70px] py-2 text-center hover:text-blue-300 ${
									isActive("/careers") ? "text-blue-300" : ""
								}`}
							>
								{t("links.career")}
							</Link>
							<Link
								href='/contact'
								className={`min-w-[70px] py-2 text-center hover:text-blue-300 ${
									isActive("/contact") ? "text-blue-300" : ""
								}`}
							>
								{t("links.contact")}
							</Link>
						</div>

						<LanguageDropdown />
					</div>
				</CenterLayout>
			</div>
		</div>
	);
}

export default NavBar;
