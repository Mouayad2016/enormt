// components/ImageSlider.js
"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

import { useRouter } from "next/router";

const slidesData = [
	[
		"/images/slide_7/Frame 11.png",
		"/images/slide_7/Frame 2.png",
		"/images/slide_7/Frame 22.png",
		"/images/slide_7/Frame 24.png",
		"/images/slide_7/Frame 28.png",
		"/images/slide_7/Frame 29.png",
		"/images/slide_7/Frame 3.png",
		"/images/slide_7/Frame 30.png",
		"/images/slide_7/Frame 5.png",
		"/images/slide_7/Frame 11.png",
		"/images/slide_7/Frame 2.png",
		"/images/slide_7/Frame 22.png",
		"/images/slide_7/Frame 24.png",
		"/images/slide_7/Frame 28.png",
	],
	[
		"/images/slide_7/Frame 11.png",
		"/images/slide_7/Frame 2.png",
		"/images/slide_7/Frame 22.png",
		"/images/slide_7/Frame 24.png",
		"/images/slide_7/Frame 28.png",
		"/images/slide_7/Frame 29.png",
		"/images/slide_7/Frame 3.png",
		"/images/slide_7/Frame 30.png",
		"/images/slide_7/Frame 5.png",
		"/images/slide_7/Frame 11.png",
		"/images/slide_7/Frame 2.png",
		"/images/slide_7/Frame 22.png",
		"/images/slide_7/Frame 24.png",
		"/images/slide_7/Frame 28.png",
	],
	[
		"/images/side_5/Frame 1000002193.png",
		"/images/side_5/Frame 1000002196.png",
		"/images/side_5/Frame 1000002200.png",
		"/images/side_5/Frame 1000002201.png",
		"/images/side_5/Frame 1000002202.png",
		"/images/side_5/Frame 1000002203.png",
		"/images/side_5/Frame 1000002205.png",
		"/images/side_5/Frame 1000002206.png",
		"/images/side_5/Frame 1000002209.png",
		"/images/side_5/Frame 1000002210.png",
		"/images/side_5/Frame 1000002215.png",
		"/images/side_5/Frame 1000002193.png",
		"/images/side_5/Frame 1000002196.png",
		"/images/side_5/Frame 1000002200.png",
	],
	[
		"/images/slide_1/1.png",
		"/images/slide_1/10.png",
		"/images/slide_1/11.png",
		"/images/slide_1/12.png",
		"/images/slide_1/2.png",
		"/images/slide_1/3.png",
		"/images/slide_1/4.png",
		"/images/slide_1/5.png",
		"/images/slide_1/6.png",
		"/images/slide_1/7.png",
		"/images/slide_1/8.png",
		"/images/slide_1/9.png",
	],
	[
		"/images/slide_3/1.jpg",
		"/images/slide_3/11.jpg",
		"/images/slide_3/2.jpg",
		"/images/slide_3/3.jpg",
		"/images/slide_3/4.jpg",
		"/images/slide_3/5.jpg",
		"/images/slide_3/6.jpg",
		"/images/slide_3/7.png",
		"/images/slide_3/8.jpg",
		"/images/slide_3/9.png",
	],

	[
		"/images/slide_6/00.00.00.splash.png",
		"/images/slide_6/01.01.01.home.newAndPoplular.png",
		"/images/slide_6/01.01.02home.story.png",
		"/images/slide_6/01.02.01.detail.about.png",
		"/images/slide_6/01.02.02.detail.video.png",
		"/images/slide_6/01.02.03.detail.live.png",
		"/images/slide_6/01.03.01.detail.png",
		"/images/slide_6/01.05.01.detail.buy.png",
		"/images/slide_6/02.01.03.search.png",
		"/images/slide_6/02.02.02.search.png",
		"/images/slide_6/02.02.03.search.png",
		"/images/slide_6/03.01.01.my.png",
	],

	[
		"/images/slide_8/1.1-wallet-setup.png",
		"/images/slide_8/1.2-create-a-wallet.png",
		"/images/slide_8/1.3-secure-your-waller.png",
		"/images/slide_8/1.4-seed-phare.png",
		"/images/slide_8/1.4.1-remind-me-later.png",
		"/images/slide_8/1.6-crate-a-new-wallet.png",
		"/images/slide_8/1.7-use-face-id.png",
		"/images/slide_8/4-token-details.png",
		"/images/slide_8/4.1-token-details-success.png",
		"/images/slide_8/8.3-custom-tokens.png",
	],
	[
		"/images/slide_9/Article.png",
		"/images/slide_9/Home.png",
		"/images/slide_9/Login.png",
		"/images/slide_9/New Article.png",
		"/images/slide_9/Onboarding.png",
		"/images/slide_9/Profile.png",
		"/images/slide_9/Splashscreen.png",
		"/images/slide_9/Storyview.png",
	],
	[
		"/images/slide_4/Frame 25.png",
		"/images/slide_4/Frame 26.png",
		"/images/slide_4/Frame 27.png",
		"/images/slide_4/Frame 30.png",
		"/images/slide_4/Frame 31.png",
		"/images/slide_4/Frame 32.png",
		"/images/slide_4/Group 10327.png",
		"/images/slide_4/Onboarding 3.png",
		"/images/slide_4/Open Menu.png",
		"/images/slide_4/Sign In - Email.png",
		"/images/slide_4/Trade Screen.png",
	],
	[
		"/images/slide_4/Frame 25.png",
		"/images/slide_4/Frame 26.png",
		"/images/slide_4/Frame 27.png",
		"/images/slide_4/Frame 30.png",
		"/images/slide_4/Frame 31.png",
		"/images/slide_4/Frame 32.png",
		"/images/slide_4/Group 10327.png",
		"/images/slide_4/Onboarding 3.png",
		"/images/slide_4/Open Menu.png",
		"/images/slide_4/Sign In - Email.png",
		"/images/slide_4/Trade Screen.png",
	],
	[
		"/images/slide_4/Frame 25.png",
		"/images/slide_4/Frame 26.png",
		"/images/slide_4/Frame 27.png",
		"/images/slide_4/Frame 30.png",
		"/images/slide_4/Frame 31.png",
		"/images/slide_4/Frame 32.png",
		"/images/slide_4/Group 10327.png",
		"/images/slide_4/Onboarding 3.png",
		"/images/slide_4/Open Menu.png",
		"/images/slide_4/Sign In - Email.png",
		"/images/slide_4/Trade Screen.png",
	],
	[
		"/images/slide_4/Frame 25.png",
		"/images/slide_4/Frame 26.png",
		"/images/slide_4/Frame 27.png",
		"/images/slide_4/Frame 30.png",
		"/images/slide_4/Frame 31.png",
		"/images/slide_4/Frame 32.png",
		"/images/slide_4/Group 10327.png",
		"/images/slide_4/Onboarding 3.png",
		"/images/slide_4/Open Menu.png",
		"/images/slide_4/Sign In - Email.png",
		"/images/slide_4/Trade Screen.png",
	],
	[
		"/images/slide_4/Frame 25.png",
		"/images/slide_4/Frame 26.png",
		"/images/slide_4/Frame 27.png",
		"/images/slide_4/Frame 30.png",
		"/images/slide_4/Frame 31.png",
		"/images/slide_4/Frame 32.png",
		"/images/slide_4/Group 10327.png",
		"/images/slide_4/Onboarding 3.png",
		"/images/slide_4/Open Menu.png",
		"/images/slide_4/Sign In - Email.png",
		"/images/slide_4/Trade Screen.png",
	],
	[
		"/images/slide_4/Frame 25.png",
		"/images/slide_4/Frame 26.png",
		"/images/slide_4/Frame 27.png",
		"/images/slide_4/Frame 30.png",
		"/images/slide_4/Frame 31.png",
		"/images/slide_4/Frame 32.png",
		"/images/slide_4/Group 10327.png",
		"/images/slide_4/Onboarding 3.png",
		"/images/slide_4/Open Menu.png",
		"/images/slide_4/Sign In - Email.png",
		"/images/slide_4/Trade Screen.png",
	],
	[
		"/images/slide_4/Frame 25.png",
		"/images/slide_4/Frame 26.png",
		"/images/slide_4/Frame 27.png",
		"/images/slide_4/Frame 30.png",
		"/images/slide_4/Frame 31.png",
		"/images/slide_4/Frame 32.png",
		"/images/slide_4/Group 10327.png",
		"/images/slide_4/Onboarding 3.png",
		"/images/slide_4/Open Menu.png",
		"/images/slide_4/Sign In - Email.png",
		"/images/slide_4/Trade Screen.png",
	],
];

const ImageSlider = ({ isHeader }: any) => {
	const animatedElements = useRef([]);
	const lastScrollTop = useRef(0);
	const ticking = useRef(false);
	const { locale } = useRouter();
	const isRTL = locale === "ar";

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
		const minScrollEffect = 50;
		animatedElements.current.forEach((el: any) => {
			if (el) {
				const maxScrollLeft = el.scrollWidth - el.clientWidth;
				const newScrollLeft = (scrollTop / maxScroll) * maxScrollLeft;

				el.style.transition = "scroll-left 0.5s ease-out";
				el.scrollLeft = isRTL ? maxScrollLeft - newScrollLeft : newScrollLeft;
				setTimeout(() => {
					el.style.transition = ""; // Remove transition to avoid affecting other interactions
				}, 500); // Match this timeout to the duration of your transition
			}
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// useEffect(() => {
	// 	window.addEventListener("scroll", handleScroll);
	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);
	return (
		<div
			className={`bg-black overflow-hidden p-4 w-full  ${
				isRTL ? "rtl" : "ltr"
			} ${
				isHeader
					? "h-screen max-h-[1024px] sm:h-[800px]"
					: "h-[500px] sm:h-[700px]"
			}`}
		>
			{" "}
			{slidesData.map((slide, idx) => {
				const firstFive = slide.slice(0, 7);

				return (
					<div
						key={idx}
						className={`mb-2 ${"rotate-[30deg] lg:rotate-[25deg]"} w-[150vw]  ${
							isRTL
								? "translate-x-[100px] sm:translate-x-[200px] 2xl:translate-x-[600px] xl:translate-x-[300px] lg:translate-x-[300px]"
								: "-translate-x-[100px] sm:-translate-x-[150px] lg:-translate-x-[300px]"
						} ${
							isRTL
								? "-translate-y-[240px] sm:-translate-y-[280px] md:-translate-y-[350px] xl:-translate-y-[420px] 2xl:-translate-y-[650px]"
								: "-translate-y-[200px]  md:-translate-y-[250px] lg:-translate-y-[300px] xl:-translate-y-[400px] 2xl:-translate-y-[500px] "
						} p-1 sm:p-2  overflow-hidden relative`}
					>
						<div
							className={`flex overflow-x-auto space-x-2 scrollbar-hide overflow-hidden whitespace-nowrap relative ${
								isRTL ? "flex-row-reverse" : ""
							}`}
							ref={(el) => (animatedElements.current[idx] = el)}
						>
							{slide.map((imageSrc, key) => (
								<div key={key} className='flex-none'>
									<Image
										src={imageSrc}
										width={1000}
										height={1000}
										objectFit='cover'
										alt='Slide Image'
										className='rounded-md w-40 sm:w-44 md:w-52 lg:w-64'
									/>
								</div>
							))}{" "}
							{/* Render additional images only for large screens */}
							{firstFive.map((imageSrc, key) => (
								<div key={`extra-${key}`} className='flex-none hidden lg:block'>
									<Image
										src={imageSrc}
										width={1000}
										height={1000}
										objectFit='cover'
										alt='Slide Image'
										className='rounded-md md:w-44 lg:w-64'
									/>
								</div>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ImageSlider;
