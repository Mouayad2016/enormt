import Link from "next/link";
import CenterLayout from "./components/CenterLayout";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function Testimonies() {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";
	const scrollContainerRef = useRef(null);

	const testimoniesRefs = useRef([]);
	const testimonies = [
		{
			name: t("testimonies.testimonies_ft.name"),
			image: "ahmad_daghrour.png",
			text: t("testimonies.testimonies_ft.text"),
			ref: useRef(null),
		},
		{
			name: t("testimonies.testimonies_se.name"),
			image: "abdul_aziz_kalagi.png",
			text: t("testimonies.testimonies_se.text"),
			ref: useRef(null),
		},
		{
			name: t("testimonies.testimonies_th.name"),
			image: "kevin_vlajkovic.png",
			text: t("testimonies.testimonies_th.text"),
			ref: useRef(null),
		},
	];
	const [currentIndex, setCurrentIndex] = useState(0);
	const scrollToElement = (ref) => {
		ref.current?.scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "start",
		});
	};

	const scrollRight = () => {
		let newIndex = currentIndex + 1;
		if (newIndex >= testimonies.length) newIndex = 0;
		setCurrentIndex(newIndex);
		scrollToElement(testimonies[newIndex].ref);
	};

	const scrollLeft = () => {
		let newIndex = currentIndex - 1;
		if (newIndex < 0) newIndex = testimonies.length - 1;
		setCurrentIndex(newIndex);
		scrollToElement(testimonies[newIndex].ref);
	};
	const handleScroll = (event) => {
		const scrollLeft = event.target.scrollLeft;
		const containerWidth = scrollContainerRef.current.offsetWidth;
		const centerPosition = scrollLeft + containerWidth / 2;

		let closestIndex = -1;
		let smallestDistance = Infinity;

		testimoniesRefs.current.forEach((ref, index) => {
			const element = ref.current;
			const elementCenter = element.offsetLeft + element.offsetWidth / 2;
			const distance = Math.abs(centerPosition - elementCenter);

			if (distance < smallestDistance) {
				smallestDistance = distance;
				closestIndex = index;
			}
		});

		if (closestIndex !== currentIndex) {
			console.log("Updating current index to:", closestIndex);
			setCurrentIndex(closestIndex);
		}
	};
	useEffect(() => {
		testimoniesRefs.current = testimonies.map((t) => t.ref);
	}, []);
	useEffect(() => {
		const scrollContainer = scrollContainerRef.current;
		scrollContainer.addEventListener("scroll", handleScroll);

		return () => {
			scrollContainer.removeEventListener("scroll", handleScroll);
		};
	}, [currentIndex]);

	return (
		<div className=' flex flex-col justify-between pb-12 bg-white text-black'>
			<CenterLayout>
				<div className='relative flex flex-col items-start justify-center md:justify-start mt-4 mb-8 md:mt-8 lg:mt-16 md:mb-8 '>
					<div className='max-w-2xl lg:max-w-3xl'>
						<h1
							className={` lg:text-6xl md:text-4xl text-3xl font-bold ${
								isRTL ? "font-notokufi" : "font-archivo"
							}`}
						>
							{t("what_others_say_about_us")}
						</h1>
					</div>
				</div>
				<div className='w-full flex  items-center'>
					{isRTL ? (
						<button
							onClick={scrollRight}
							className='flex-shrink-0 text-white hidden md:block'
						>
							<Image
								className='h-14 w-14'
								alt='icons/arrow.svg'
								src='icons/arrow.svg'
								height={30}
								width={30}
							></Image>
						</button>
					) : (
						<button
							onClick={scrollLeft}
							className='flex-shrink-0 text-white hidden md:block'
						>
							<Image
								className='rotate-180  w-14 '
								alt='icons/arrow.svg'
								src='icons/arrow.svg'
								height={30}
								width={30}
							></Image>
						</button>
					)}

					<div
						onScroll={handleScroll}
						className={`relative my-2 md:mt-8 mb-4 flex overflow-x-scroll scroll-smooth p-4 scrollbar-hide`}
						ref={scrollContainerRef}
					>
						{testimonies.map((item, i) => (
							<div
								key={i}
								className={`min-w-[300px] min-h-[200px] md:min-w-[500px] lg:min-w-[600px] bg-gray-300 bg-opacity-75 text-black  rounded-lg ${
									isRTL ? "ml-4" : "mr-4"
								} flex items-center`}
								ref={item.ref}
							>
								<div
									className={`p-8 h-full w-full glass-effect-strong-border rounded-lg flex flex-col md:flex-row-reverse items-center md:items-start justify-start ${
										isRTL ? "font-notokufi" : "font-mono"
									} text-md md:text-lg lg:text-xl `}
								>
									<Image
										className={`z-10 h-24 w-24 object-cover bg-gray-50 rounded-2xl shadow-md ${
											isRTL ? "mb-4 md:mb-0 md:mr-8" : "mb-4 md:mb-0 md:ml-8"
										} `}
										src={`/images/testimonies/${item.image}`}
										height={200}
										width={200}
									></Image>
									<div className='flex flex-col items-center justify-center md:justify-start md:items-start'>
										<p className='font-archivo font-bold pb-4 text-center md:text-start'>
											{item.name}
										</p>
										<p className='font-caveat text-center md:text-start'>
											" {item.text} "
										</p>
									</div>
								</div>
							</div>
						))}
					</div>

					{isRTL ? (
						<button
							onClick={scrollLeft}
							className='flex-shrink-0 text-white hidden md:block'
						>
							<Image
								className='rotate-180  w-14 '
								alt='icons/arrow.svg'
								src='icons/arrow.svg'
								height={30}
								width={30}
							></Image>
						</button>
					) : (
						<button
							onClick={scrollRight}
							className='flex-shrink-0 text-white hidden md:block'
						>
							<Image
								className='h-14 w-14'
								alt='icons/arrow.svg'
								src='icons/arrow.svg'
								height={30}
								width={30}
							></Image>
						</button>
					)}
				</div>
				<div className='w-full h-12 flex justify-center xl:hidden'>
					{testimonies.map((_, index) => (
						<div
							key={index}
							className={`w-5 h-2 rounded-lg m-2 transition-all duration-300 ${
								index === currentIndex ? "bg-black scale-[1.5]" : "bg-gray-300"
							}`}
						></div>
					))}
				</div>
			</CenterLayout>
		</div>
	);
}

export default Testimonies;
