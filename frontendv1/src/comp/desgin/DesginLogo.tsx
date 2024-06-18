"use client";
import React from "react";
import {
	useResponsiveSize,
	useResponsiveContentDesign,
} from "../../utils/functions";

import { sliderLogos } from "../../utils/desginSliderIcons";

function DesignIcons() {
	const size = useResponsiveSize();
	let { sm, md, xl } = sliderLogos(size);
	const content = useResponsiveContentDesign(sm, md, xl);

	return (
		<>
			<div className='flex flex-col w-[180vh] lg:w-[1850px] xl:w-[2700px] '>
				{content.map((item, index) => (
					<div
						key={index}
						className={` xl:h-[120px] ${
							index % 2 ? "bg-thistle bg-opacity-80" : "bg-thistle"
						}`}
					>
						<div className='glass-effect xl:h-[120px] flex  items-center'>
							{item}
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default DesignIcons;
