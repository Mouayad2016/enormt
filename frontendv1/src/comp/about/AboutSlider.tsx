"use client";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import CenterLayout from "../components/CenterLayout";

import ResponsiveIcons from "./SliderLogos";

function AboutSlider({ noTitle }: any) {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";

	return (
		<CenterLayout>
			{noTitle ? (
				<></>
			) : (
				<div>
					<p
						className={`${
							isRTL ? "font-notokufi" : "font-mono uppercase"
						} text-2xl lg:text-3xl xl:text-4x text-black pt-12 font-bold text-center`}
					>
						{t("stack_title")}
					</p>
				</div>
			)}

			<div className='overflow-hidden mt-8 md:my-12 h-[160px] md:h-[200px] lg:h-[250px] rounded-3xl border-2'>
				<div
					className={` pt-12 flex flex-col ${
						isRTL
							? "rotate-[-50deg] -translate-x-[150px]  sm:-translate-x-[200px]  md:-translate-x-[360px] lg:-translate-x-[380px] xl:-translate-x-[500px]"
							: "rotate-[50deg] translate-x-[100px] sm:translate-x-[250px] md:translate-x-[350px] lg:translate-x-[380px] xl:translate-x-[480px]"
					} justify-center  -translate-y-[300px]  sm:-translate-y-[300px]  md:-translate-y-[250px]  lg:-translate-y-[250px]  xl:-translate-y-[280px]`}
				>
					<ResponsiveIcons />
				</div>
			</div>
		</CenterLayout>
	);
}

export default AboutSlider;
