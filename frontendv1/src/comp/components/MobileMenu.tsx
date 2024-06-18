import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const MobileMenu = ({ isMenuOpen, toggleMenu, setMenuOpen }: any) => {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";

	const router = useRouter(); // Get the router object
	const { pathname } = router;
	const isActive = (route: any) => pathname === route;
	return (
		<div
			className={`fixed top-0 ${
				isMenuOpen
					? isRTL
						? "left-0"
						: "right-0"
					: isRTL
					? "-left-full"
					: "-right-full"
			} h-full w-[80vw] sm:w-1/2 text-white bg-black bg-opacity-70 shadow-md transition-all duration-300 ease-in-out transform p-2 ${
				isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
			} z-40`}
		>
			<div className='flex  items-center justify-between'>
				<div
					className={`flex p-4 text-lg items-center ${
						isRTL ? "pl-12" : "pr-12"
					}`}
				>
					logo
				</div>
				<button
					className={`h-full ${isRTL ? "pl-4" : "pr-4"}`}
					onClick={toggleMenu}
				>
					<Image
						src={"/icons/close.svg"}
						className='w-6 '
						height={20}
						width={20}
					></Image>
				</button>
			</div>
			<div className='w-full h-screen flex flex-col items-start pt-8 gap-6'>
				<Link
					href='/'
					className={`px-4 text-center text-lg font-bold hover:text-blue-300 ${
						isActive("/") ? "text-blue-300" : ""
					} ${isRTL ? "font-notokufi" : "font-mono font-bold"}`}
					onClick={() => setMenuOpen(false)}
				>
					{t("links.home")}
				</Link>
				<Link
					href='/about'
					className={`px-4 text-center text-lg font-bold hover:text-blue-300 ${
						isActive("/about") ? "text-blue-300" : ""
					} ${isRTL ? "font-notokufi" : "font-mono font-bold"}`}
					onClick={() => setMenuOpen(false)}
				>
					{t("links.about_us")}
				</Link>
				<p
					className={`px-4 text-center text-lg font-bold  ${
						isRTL ? "font-notokufi" : "font-mono font-bold"
					}`}
				>
					{" "}
					{t("links.services")}
				</p>
				<ul className='gap-4 flex flex-col'>
					<li className='px-6'>
						-
						<Link
							href='/services/mobile_app'
							className={`px-4 text-center text-lg font-bold hover:text-blue-300 ${
								isActive("/services/mobile_app") ? "text-blue-300" : ""
							} ${isRTL ? "font-notokufi" : "font-mono font-bold"}`}
							onClick={() => setMenuOpen(false)}
						>
							{t("services.mobile_app_development.title")}
						</Link>
					</li>
					<li className='px-6'>
						-
						<Link
							href='/services/web_app'
							className={`px-4 text-center text-lg font-bold hover:text-blue-300 ${
								isActive("/services/web_app") ? "text-blue-300" : ""
							} ${isRTL ? "font-notokufi" : "font-mono font-bold"}`}
							onClick={() => setMenuOpen(false)}
						>
							{t("services.web_app_development.title")}
						</Link>
					</li>
					<li className='px-6'>
						-{" "}
						<Link
							href='/services/website'
							className={`px-4 text-center text-lg font-bold hover:text-blue-300 ${
								isActive("/services/website") ? "text-blue-300" : ""
							} ${isRTL ? "font-notokufi" : "font-mono font-bold"}`}
							onClick={() => setMenuOpen(false)}
						>
							{t("services.website_development.title")}
						</Link>
					</li>
					<li className='px-6'>
						-{" "}
						<Link
							href='/services/design'
							className={`px-4 text-center text-lg font-bold hover:text-blue-300 ${
								isActive("/services/design") ? "text-blue-300" : ""
							} ${isRTL ? "font-notokufi" : "font-mono font-bold"}`}
							onClick={() => setMenuOpen(false)}
						>
							{t("services.design_for_apps_and_websites.title")}
						</Link>
					</li>
				</ul>

				<Link
					href='/careers'
					className={`px-4 text-center text-lg font-bold hover:text-blue-300 ${
						isActive("/careers") ? "text-blue-300" : ""
					} ${isRTL ? "font-notokufi" : "font-mono font-bold"}`}
					onClick={() => setMenuOpen(false)}
				>
					{t("links.career")}
				</Link>

				<Link
					href='/contact'
					className={`px-4 text-center text-lg font-bold hover:text-blue-300 ${
						isActive("/contact") ? "text-blue-300" : ""
					} ${isRTL ? "font-notokufi" : "font-mono font-bold"}`}
					onClick={() => setMenuOpen(false)}
				>
					{t("links.contact")}
				</Link>
			</div>
		</div>
	);
};

export default MobileMenu;
