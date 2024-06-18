// components/VerticalSlider.js
"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { useRouter } from "next/router";

const smallScreen = [
	[
		"/images/web_slider/eight/0.png",
		"/images/web_slider/eight/1.png",
		"/images/web_slider/eight/2.png",
		"/images/web_slider/eight/3.png",
		"/images/web_slider/eight/4.png",
		"/images/web_slider/eight/3.png",
		"/images/web_slider/eight/4.png",
		"/images/web_slider/eight/0.png",
		"/images/web_slider/eight/1.png",
	],
	[
		"/images/web_slider/six/1.png",
		"/images/web_slider/six/2.png",
		"/images/web_slider/six/1.png",
	],

	[
		"/images/web_slider/three/0.png",
		"/images/web_slider/three/1.png",
		"/images/web_slider/three/2.png",
		"/images/web_slider/three/3.png",
		"/images/web_slider/three/2.png",
		"/images/web_slider/three/3.png",
		"/images/web_slider/three/3.png",
	],
	[
		"/images/web_slider/seven/0.png",
		"/images/web_slider/seven/1.png",
		"/images/web_slider/seven/2.png",
		"/images/web_slider/seven/3.png",
		"/images/web_slider/seven/0.png",
		"/images/web_slider/seven/1.png",
		"/images/web_slider/seven/0.png",
		"/images/web_slider/seven/0.png",
		"/images/web_slider/seven/1.png",
	],
];

const mediumScreen = [
	[
		"/images/web_slider/eight/0.png",
		"/images/web_slider/eight/1.png",
		"/images/web_slider/eight/2.png",
		"/images/web_slider/eight/3.png",
		"/images/web_slider/eight/4.png",
		"/images/web_slider/eight/3.png",
		"/images/web_slider/eight/4.png",
		"/images/web_slider/eight/3.png",
		"/images/web_slider/eight/4.png",
		"/images/web_slider/eight/0.png",
		"/images/web_slider/eight/1.png",
	],
	[
		"/images/web_slider/six/1.png",
		"/images/web_slider/six/2.png",
		"/images/web_slider/six/1.png",
	],

	[
		"/images/web_slider/three/0.png",
		"/images/web_slider/three/1.png",
		"/images/web_slider/three/2.png",
		"/images/web_slider/three/3.png",
		"/images/web_slider/three/2.png",
		"/images/web_slider/three/3.png",
		"/images/web_slider/three/3.png",
		"/images/web_slider/three/2.png",
		"/images/web_slider/three/3.png",
		"/images/web_slider/three/3.png",
		"/images/web_slider/three/3.png",
		"/images/web_slider/three/2.png",
		"/images/web_slider/three/3.png",
	],

	[
		"/images/web_slider/four/1.png",
		"/images/web_slider/four/1.png",
		"/images/web_slider/four/1.png",
	],

	[
		"/images/web_slider/four/0.png",
		"/images/web_slider/four/0.png",
		"/images/web_slider/four/0.png",
	],
	[
		"/images/web_slider/five/0.png",
		"/images/web_slider/five/0.png",
		"/images/web_slider/five/0.png",
	],
];
const largScreen = [
	[
		"/images/web_slider/eight/0.png",
		"/images/web_slider/eight/1.png",
		"/images/web_slider/eight/2.png",
		"/images/web_slider/eight/3.png",
		"/images/web_slider/eight/4.png",
		"/images/web_slider/eight/3.png",
		"/images/web_slider/eight/4.png",
		"/images/web_slider/eight/3.png",
		"/images/web_slider/eight/4.png",
		"/images/web_slider/eight/0.png",
		"/images/web_slider/eight/1.png",
	],
	[
		"/images/web_slider/six/1.png",
		"/images/web_slider/six/2.png",
		"/images/web_slider/six/1.png",
	],

	[
		"/images/web_slider/three/0.png",
		"/images/web_slider/three/1.png",
		"/images/web_slider/three/2.png",
		"/images/web_slider/three/3.png",
		"/images/web_slider/three/2.png",
		"/images/web_slider/three/3.png",
		"/images/web_slider/three/3.png",
		"/images/web_slider/three/2.png",
		"/images/web_slider/three/3.png",
		"/images/web_slider/three/3.png",
		"/images/web_slider/three/3.png",
		"/images/web_slider/three/2.png",
		"/images/web_slider/three/3.png",
	],

	[
		"/images/web_slider/four/1.png",
		"/images/web_slider/four/1.png",
		"/images/web_slider/four/1.png",
	],

	[
		"/images/web_slider/four/0.png",
		"/images/web_slider/four/0.png",
		"/images/web_slider/four/0.png",
	],
	[
		"/images/web_slider/five/0.png",
		"/images/web_slider/five/0.png",
		"/images/web_slider/five/0.png",
	],

	[
		"/images/web_slider/seven/0.png",
		"/images/web_slider/seven/1.png",
		"/images/web_slider/seven/2.png",
		"/images/web_slider/seven/3.png",
		"/images/web_slider/seven/0.png",
		"/images/web_slider/seven/1.png",
		"/images/web_slider/seven/0.png",
		"/images/web_slider/seven/0.png",
		"/images/web_slider/seven/1.png",
		"/images/web_slider/seven/2.png",
	],
	["/images/web_slider/nine/0.png"],
	["/images/web_slider/ten/0.png"],
];
const VerticalSlider = () => {
	const animatedElements = useRef([]);
	const lastScrollTop = useRef(0);
	const ticking = useRef(false);
	const { locale } = useRouter();
	const isRTL = locale === "ar";

	const [slidesImages, setSlidesImages] = useState<any>([[]]);
	const handleScroll = () => {
		const scrollTop = window.scrollY;
		if (!ticking.current) {
			window.requestAnimationFrame(() => {
				scrollSlides(scrollTop);
				ticking.current = false;
			});
			ticking.current = true;
		}
		lastScrollTop.current = scrollTop;
	};

	const scrollSlides = (scrollTop: any) => {
		const maxScroll =
			document.documentElement.scrollHeight - window.innerHeight;
		const viewportHeight = window.innerHeight;

		animatedElements.current.forEach((el, index) => {
			if (el) {
				const maxScrollTop = el.scrollHeight - el.clientHeight;
				const newScrollTop = (scrollTop / maxScroll) * maxScrollTop * 5;
				el.style.transition = "0.5s ease-out";
				el.scrollTop = newScrollTop;
			}
		});
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	useEffect(() => {
		if (window !== undefined && typeof window.innerWidth !== "undefined") {
			const width = window.innerWidth;
			if (width < 640) {
				console.log("width < 640");
				return setSlidesImages(smallScreen);
			} else if (width < 768) {
				console.log("width < 768");
				return setSlidesImages(mediumScreen);
			} else if (width < 1024) {
				console.log("width < 1024");
				return setSlidesImages(largScreen);
			} else {
				console.log("Else");
				return setSlidesImages(largScreen);
			}
		}
	}, []);
	return (
		<div
			className={`bg-black overflow-hidden flex w-[150vw] h-screen max-h-[1024px] sm:h-[800px]  -translate-y-2 ${
				isRTL ? "rtl translate-x-24" : "ltr -translate-x-24"
			}`}
		>
			<div className='w-full h-full  absolute z-10'></div>
			<div className='flex flex-row '>
				{slidesImages.map((slide, idx) => {
					return (
						<div
							key={idx}
							className={`-mb-2 flex flex-col overflow-hidden relative p-1 h-[screen] sm:h-[800px] `}
						>
							<div
								className={`flex flex-col overflow-y-auto space-y-1 scrollbar-hide overflow-hidden whitespace-nowrap relative   ${
									isRTL ? "flex-row-reverse" : ""
								}`}
								ref={(el) => (animatedElements.current[idx] = el)}
							>
								{slide.map((imageSrc, key) => (
									<div
										key={key}
										className={`h-auto w-30 md:w-[250px] lg:w-[300px] xl:[350px]`}
									>
										<Image
											src={imageSrc}
											width={500}
											height={500}
											alt='Slide Image'
											className='rounded-md object-cover w-30 md:w-[250px] lg:w-[300px] xl:[350px] h-auto'
										/>
									</div>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default VerticalSlider;
