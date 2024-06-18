"use client";
import React from "react";
import { useResponsiveContent, useResponsiveSize } from "../../utils/functions";

import { sliderLogos } from "../../utils/aboutSliderIcons";

function ResponsiveIcons() {
	const size = useResponsiveSize();
	let { contentSmall, contentMedium } = sliderLogos(size);
	const content = useResponsiveContent(contentSmall, contentMedium);

	return (
		<>
			<div className='flex flex-col h-[100px] lg:h-[200px] w-[750px] lg:w-[950px] xl:w-[1150px] '>
				{content.map((item, index) => (
					<div
						key={index}
						className={`translate-x-0 ${
							index % 2 ? "bg-thistle bg-opacity-80" : "bg-thistle"
						}`}
					>
						<div className='glass-effect'>{item}</div>
					</div>
				))}
			</div>
		</>
	);
}

export default ResponsiveIcons;
