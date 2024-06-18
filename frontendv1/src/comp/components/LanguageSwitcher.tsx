import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const LanguageDropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const { locale, locales, pathname, asPath, query } = router;

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const changeLanguage = (newLocale: any) => {
		router.push({ pathname, query }, asPath, { locale: newLocale });
		setIsOpen(false);
	};

	const flags = {
		SV: "sweden.png",
		AR: "syria.png",
		EN: "united_kingdom.png",
	};
	return (
		<div className='relative '>
			<button
				onClick={toggleDropdown}
				className='px-4 py-2 rounded flex items-center '
			>
				<p className='w-8'>
					{" "}
					{locale.toUpperCase() === "AR" ? "ض" : locale.toUpperCase()}
				</p>
				<div className='w-2'></div>
				<Image
					className='w-6'
					src={`/images/flags/${flags[locale.toUpperCase()]}`}
					width={20}
					height={20}
				></Image>
			</button>
			{isOpen && (
				<ul className='absolute right-0 mt-3 py-2 bg-black bg-opacity-50 border rounded-lg shadow-xl'>
					{locales.map((loc) => (
						<li key={loc}>
							<button
								onClick={() => changeLanguage(loc)}
								className={` px-4 py-2 text-sm text-white hover:bg-slate-700 flex items-center ${
									loc === locale ? "font-bold" : ""
								}`}
							>
								<p className='w-8'>
									{loc.toUpperCase() === "AR" ? "ض" : loc.toUpperCase()}{" "}
								</p>

								<div className='w-2'></div>

								<Image
									className='w-6'
									src={`/images/flags/${flags[loc.toUpperCase()]}`}
									width={20}
									height={20}
								></Image>
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default LanguageDropdown;
