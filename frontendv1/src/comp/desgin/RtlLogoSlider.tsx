import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";

const RtlLogoSlider = ({ slides }) => {
	const sliderContainerRef = useRef(null); // Ref for the container that will scroll
	const { locale } = useRouter();
	const isRTL = locale === "ar";

	useEffect(() => {
		const handleScroll = () => {
			if (!sliderContainerRef.current) return;

			const maxScroll =
				document.documentElement.scrollHeight - window.innerHeight;
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			const maxScrollLeft =
				sliderContainerRef.current.scrollWidth -
				sliderContainerRef.current.clientWidth;

			const newScrollLeft = (scrollTop / maxScroll) * maxScrollLeft;
			sliderContainerRef.current.scrollLeft = isRTL
				? maxScrollLeft - newScrollLeft
				: newScrollLeft;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isRTL]);
	function getSize(slide: any) {
		if (typeof window !== "undefined") {
			const width = window.innerWidth;
			if (width > 1024) {
				return [...slide, ...slide];
			} else if (width > 640) {
				return [...slide, ...slide, ...slide, ...slide];
			} else {
				console.log("else");
				return [...slide, ...slide, ...slide, ...slide];
			}
		}
		return [...slide, ...slide];
	}
	return (
		<div className={`slider-container flex ${isRTL ? "rtl" : ""}`}>
			<div
				ref={sliderContainerRef}
				className={`${
					isRTL ? "flex-row-reverse" : ""
				} slider-animate overflow-x-scroll  scrollbar-hide`}
			>
				{getSize(slides).map((icon, index) => (
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
		</div>
	);
};

export default RtlLogoSlider;
