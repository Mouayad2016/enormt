import Link from "next/link";
import CenterLayout from "./components/CenterLayout";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from "next/image";
import ServiesDropDown from "./components/ServicesDropDown";
import LanguageDropdown from "./components/LanguageSwitcher";
import MobileMenu from "./components/MobileMenu";
import { useState } from "react";

function NavBar() {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";
	const router = useRouter(); // Get the router object
	const { pathname } = router;
	const isActive = (route: string) => pathname === route;

	const [isMenuOpen, setMenuOppen] = useState(false);

	function toggleMenu({ current }: any) {
		setMenuOppen(!isMenuOpen);
	}
	return (
		<div className='fixed top-1 right-1 left-1 h-[60px] rounded-md bg-black bg-opacity-75 z-50 flex items-center'>
			<div className='w-full'>
				<CenterLayout>
					<div className='flex flex-row justify-between w-full'>
						<div className='text-white flex relative '>
							<p className='w-20 py-2 font-caveat '>logo</p>
							<div className='hidden lg:flex font-caveat font-bold text-md lg:gap-[32px]'>
								<Link
									href='/'
									className={` py-2 text-center hover:text-blue-300 ${
										isActive("/") ? "text-blue-300" : ""
									}`}
								>
									{t("links.home")}
								</Link>
								<Link
									href='/about'
									className={` py-2 text-center hover:text-blue-300 ${
										isActive("/about") ? "text-blue-300" : ""
									}`}
								>
									{t("links.about_us")}
								</Link>
								<ServiesDropDown />
								<Link
									href='/careers'
									className={` py-2 text-center hover:text-blue-300 ${
										isActive("/careers") ? "text-blue-300" : ""
									}`}
								>
									{t("links.career")}
								</Link>
								<Link
									href='/contact'
									className={` py-2 text-center hover:text-blue-300 ${
										isActive("/contact") ? "text-blue-300" : ""
									}`}
								>
									{t("links.contact")}
								</Link>
							</div>
						</div>
						<div className='flex items-center gap-4 '>
							<LanguageDropdown />
							<button onClick={toggleMenu} className='p-2 lg:hidden'>
								<Image
									src={"/icons/menu_icon.svg"}
									height={20}
									width={20}
									alt={""}
								></Image>
							</button>
						</div>
						<MobileMenu
							isMenuOpen={isMenuOpen}
							toggleMenu={toggleMenu}
							setMenuOpen={setMenuOppen}
						/>
					</div>
				</CenterLayout>
			</div>
		</div>
	);
}

export default NavBar;
