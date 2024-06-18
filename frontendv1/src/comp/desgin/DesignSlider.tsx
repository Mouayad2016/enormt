"use client";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import ResponsiveIcons from "./DesginLogo";

function DesginSlider() {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";

	return (
		<div className='overflow-hidden h-screen max-h-[1024px] sm:h-[800px]'>
			<div
				className={` flex flex-col ${
					isRTL
						? "rotate-[-50deg] translate-x-[280px]  sm:translate-x-[120px]  md:translate-x-[150px] lg:translate-x-[200px] xl:translate-x-[150px]"
						: "rotate-[50deg] -translate-x-[280px]  sm:-translate-x-[120px]  md:-translate-x-[150px] lg:-translate-x-[200px] xl:-translate-x-[150px]"
				} justify-center  -translate-y-[450px] sm:-translate-y-[350px]    md:-translate-y-[500px]  lg:-translate-y-[900px]  xl:-translate-y-[1100px]`}
			>
				<ResponsiveIcons />
			</div>
		</div>
	);
}

export default DesginSlider;
