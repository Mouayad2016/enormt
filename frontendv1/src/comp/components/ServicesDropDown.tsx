import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const ServiesDropDown = () => {
	const { t } = useTranslation("common");
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const { locale, locales, pathname, asPath, query } = router;
	const isRTL = locale === "ar";

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const changeLanguage = (newLocale: any) => {
		router.push({ pathname, query }, asPath, { locale: newLocale });
		setIsOpen(false);
	};

	const services = {
		mobile_app: t("services.mobile_app_development.title"),
		web_app: t("services.web_app_development.title"),
		website: t("services.website_development.title"),
		design: t("services.design_for_apps_and_websites.title"),
	};
	return (
		<div
			className={`relative duration-300 transition-width ease-in-out ${
				isOpen ? "w-[200px]" : "w-[70px]"
			}`}
		>
			<button
				onClick={toggleDropdown}
				className='p-2 rounded flex items-center '
			>
				{t("links.services", "Default: Services")}
			</button>
			{isOpen && (
				<ul
					className={`absolute w-[200px] ${
						isRTL ? "right-2" : "left-2 "
					} mt-3 py-2 bg-black bg-opacity-50 border rounded-lg shadow-xl font-mono`}
				>
					{Object.entries(services).map(([key, values]) => (
						<Link
							href={`/services/${key}`}
							className={` px-4 py-2 text-sm text-white hover:bg-slate-700 flex items-center `}
						>
							{values}
						</Link>
					))}
				</ul>
			)}
		</div>
	);
};

export default ServiesDropDown;
