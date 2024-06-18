import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const MobileMenu = ({ isMenuOpen, toggleMenu, setMenuOpen }: any) => {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";
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
			} h-full w-64 bg-black bg-opacity-70 shadow-md transition-all duration-300 ease-in-out transform p-2 ${
				isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
			} z-40`}
		>
			<div className='flex items-center justify-between'>
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

			<Link
				href=''
				className='block p-4 text-lg font-bold'
				onClick={() => setMenuOpen(false)}
			>
				{t("links.home")}
			</Link>
			<Link
				href=''
				className='block p-4 text-lg font-bold'
				onClick={() => setMenuOpen(false)}
			>
				{t("links.about_us")}
			</Link>
			<Link
				href=''
				className='block p-4 text-lg font-bold'
				onClick={() => setMenuOpen(false)}
			>
				{t("links.services")}
			</Link>
			<Link
				href=''
				className='block p-4 text-lg font-bold'
				onClick={() => setMenuOpen(false)}
			>
				{t("links.career")}
			</Link>
			<Link
				href=''
				className='block p-4 text-lg font-bold'
				onClick={() => setMenuOpen(false)}
			>
				{t("links.contact")}
			</Link>
		</div>
	);
};

export default MobileMenu;
