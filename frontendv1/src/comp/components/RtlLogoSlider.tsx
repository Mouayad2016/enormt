import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { useResponsiveSize } from "../../utils/functions";

const RtlLogoSlider = ({ slides }: any) => {
	const { locale } = useRouter();
	const isRTL = locale === "ar";
	return (
		<div className={`slider-container flex ${isRTL ? "rtl" : ""}`}>
			<div className='slider-animate group-left'>
				{slides.map((icon, index) => (
					<div
						key={index}
						className={`slide flex-shrink-0 w-[80px] lg:w-[120px] h-[50px] md:h-[60px] lg:h-[80px] xl:h-[90px] flex justify-center ${
							isRTL ? "scale-y-[1]" : ""
						}`}
					>
						{icon.icon}
					</div>
				))}
			</div>
			<div className='slider-animate group-left'>
				{slides.map((icon, index) => (
					<div
						key={`duplicate-${index}`}
						className={`slide flex-shrink-0 w-[80px] lg:w-[120px] h-[50px] md:h-[60px] lg:h-[80px] xl:h-[90px] flex justify-center ${
							isRTL ? "scale-y-[1]" : ""
						}`}
					>
						{icon.icon}
					</div>
				))}
			</div>
		</div>
	);
};

export default RtlLogoSlider;
