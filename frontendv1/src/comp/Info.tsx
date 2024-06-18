import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import SliderNumber from "./components/LogoSlider";
import CenterLayout from "./components/CenterLayout";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
function HomeInfo() {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";

	const [selectedId, setSelectedId] = useState(null);
	const refOne = useRef(null);
	const refTwo = useRef(null);
	const refThree = useRef(null);
	const refFour = useRef(null);
	const refFive = useRef(null);

	const scrollContainerRef = useRef(null);

	const refsByKey = {
		"1": refOne,
		"2": refTwo,
		"3": refThree,
		"4": refFour,
		"5": refFive,
	};

	useEffect(() => {
		handleSelected("1");
	}, []);
	const handleSelected = (id: any) => {
		setSelectedId(id);
		const specificRef = refsByKey[id]?.current;

		if (specificRef && scrollContainerRef.current) {
			let containerPadding = 0;

			const screenWidth = window.innerWidth;

			// Adjust padding based on screen size
			if (screenWidth >= 768) {
				// Assuming 'medium' screen starts at 768px
				containerPadding = isRTL ? -70 : 70;
			} else {
				containerPadding = isRTL ? -15 : 15;
			}

			// Calculate the position based on direction
			const startOffset =
				scrollContainerRef.current.offsetLeft + containerPadding;
			let newScrollPosition = specificRef.offsetLeft - startOffset;

			// Adjust scroll position if RTL
			if (isRTL) {
				const elementWidth = specificRef.offsetWidth;
				const containerWidth = scrollContainerRef.current.offsetWidth;
				newScrollPosition += elementWidth - containerWidth;
			}

			scrollContainerRef.current.scrollLeft = newScrollPosition;
		}
	};

	return (
		<div className='relative bg-white h-min flex flex-col justify-between '>
			<CenterLayout>
				<div className='relative flex flex-col items-start justify-center md:justify-start mt-16 mb-8 md:mt-16 lg:mt-32 md:mb-8 '>
					<div className='max-w-2xl lg:max-w-3xl'>
						<h1
							className={`text-black lg:text-6xl md:text-4xl text-3xl font-bold ${
								isRTL ? "font-notokufi" : "font-archivo"
							}`}
						>
							{t("what_we_do")}
						</h1>
					</div>
				</div>
				<div className='flex flex-row flex-wrap h-32'>
					<button
						className='items-center m-2 '
						id='1'
						onClick={(e: any) => {
							handleSelected("1");
						}}
					>
						<span
							className={`${
								selectedId === "1"
									? "bg-black border-4  border-border text-white "
									: "bg-slate-100"
							} ${
								isRTL ? "font-notokufi" : "font-caveat"
							} px-4 py-3 rounded-xl  text-sm md:text-lg  lg:text-lg xl:text-xl text-black shadow-lg `}
						>
							{t("custom_solutions.title")}
						</span>
					</button>
					<button
						className='items-center m-2'
						id='2'
						onClick={(e: any) => {
							handleSelected("2");
						}}
					>
						<span
							className={`${
								selectedId === "2"
									? "bg-black border-4  border-border text-white "
									: "bg-slate-100"
							} px-4 py-3 rounded-xl ${
								isRTL ? "font-notokufi" : "font-caveat"
							} px-4 py-3 rounded-xl  text-sm md:text-lg  lg:text-lg xl:text-xl text-black shadow-lg`}
						>
							{t("partnership.title")}
						</span>
					</button>
					<button
						className='items-center m-2'
						id='3'
						onClick={(e: any) => {
							handleSelected("3");
						}}
					>
						<span>
							<span
								className={`${
									selectedId === "3"
										? "bg-black border-4  border-border text-white "
										: "bg-slate-100"
								} px-4 py-3  rounded-xl ${
									isRTL ? "font-notokufi" : "font-caveat"
								} px-4 py-3 rounded-xl  text-sm md:text-lg  lg:text-lg xl:text-xl text-black shadow-lg`}
							>
								{t("quality.title")}
							</span>
						</span>
					</button>
					<button
						className='items-center m-2'
						id='4'
						onClick={(e: any) => {
							handleSelected("4");
						}}
					>
						<span
							className={`${
								selectedId === "4"
									? "bg-black border-4  border-border text-white "
									: "bg-slate-100"
							} px-4 py-3  rounded-xl ${
								isRTL ? "font-notokufi" : "font-caveat"
							} px-4 py-3 rounded-xl  text-sm md:text-lg lg:text-lg xl:text-xl text-black shadow-lg`}
						>
							{t("outcomes.title")}
						</span>
					</button>
					<button
						className='items-center m-2'
						id='5'
						onClick={(e: any) => {
							handleSelected("5");
						}}
					>
						<span
							className={`${
								selectedId === "5"
									? "bg-black border-4  border-border text-white "
									: "bg-slate-100"
							} px-4 py-3  rounded-xl ${
								isRTL ? "font-notokufi" : "font-caveat"
							} px-4 py-3 rounded-xl text-sm md:text-lg lg:text-lg xl:text-xl text-black shadow-lg`}
						>
							{" "}
							{t("your_needs.title")}
						</span>
					</button>
				</div>
			</CenterLayout>

			<div
				className={`my-2 md:mt-8 flex mb-4 overflow-hidden w-full scroll-smooth ${
					isRTL ? "custom_margin_right" : "custom_margin_left"
				} mx-auto px-4 md:px-[70px] scrollbar-hide`}
				ref={scrollContainerRef}
			>
				<div className='flex flex-nowrap  justify-start items-center '>
					<div
						ref={refOne}
						className='flex flex-col-reverse h-[450px] w-[300px] md:min-w-[700px] md:h-[250px] lg:h-[300px] lg:min-w-[800px]  md:flex-row mb-6 shadow-lg mx-2 rounded-lg '
					>
						<div
							className={`bg-custom-pink  
							text-black h-full px-2 md:px-4 flex items-center max-w-lg  ${
								isRTL
									? "md:rounded-r-lg md:text-lg lg:text-lg font-notokufi"
									: "rounded-b-lg md:rounded-br-none md:rounded-l-lg text-sm md:text-md lg:text-lg font-mono"
							}`}
						>
							<p className='p-4 md:p-4'>{t("custom_solutions.description")}</p>
						</div>

						<div
							className={`flex items-center justify-center h-96 md:h-full md:min-w-96`}
						>
							<Image
								className={`object-cover w-full h-full ${
									isRTL
										? "rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
										: "rounded-t-lg  md:rounded-tl-none md:rounded-r-lg"
								}`}
								alt='solutions'
								src='/images/customsolutions.png'
								height={600}
								width={600}
							/>
						</div>
					</div>
					<div
						className='flex flex-col-reverse h-[450px] w-[300px] md:min-w-[700px] md:h-[250px] lg:h-[300px] lg:min-w-[800px]  md:flex-row mb-6 shadow-lg mx-2 rounded-lg '
						ref={refTwo}
					>
						<div
							className={`bg-custom-gray text-black h-full px-2 flex items-center max-w-lg   ${
								isRTL
									? "md:rounded-r-lg md:text-lg lg:text-lg font-notokufi"
									: "rounded-b-lg md:rounded-br-none md:rounded-l-lg text-sm md:text-md lg:text-lg font-mono"
							}`}
						>
							<p className='p-4'>{t("partnership.description")}</p>
						</div>
						<div
							className={`flex items-center justify-center h-96 md:h-full md:min-w-96`}
						>
							{" "}
							<Image
								className={`object-cover w-full h-full ${
									isRTL
										? "rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
										: "rounded-t-lg  md:rounded-tl-none md:rounded-r-lg"
								}`}
								alt='solutions'
								src='/images/partnership.png'
								height={600}
								width={600}
							/>
						</div>
					</div>
					<div
						className='flex flex-col-reverse h-[450px] w-[300px] md:min-w-[700px] md:h-[250px] lg:h-[300px] lg:min-w-[800px]  md:flex-row mb-6 shadow-lg mx-2 rounded-lg '
						ref={refThree}
					>
						<div
							className={`bg-custom-blue-light-shade  text-black h-full px-2 flex items-center max-w-lg   ${
								isRTL
									? "md:rounded-r-lg md:text-lg lg:text-lg font-notokufi"
									: "rounded-b-lg md:rounded-br-none md:rounded-l-lg text-sm md:text-md lg:text-lg font-mono"
							}`}
						>
							<p className='p-4'>{t("quality.description")}</p>
						</div>
						<div
							className={`flex items-center justify-center h-96 md:h-full md:min-w-96`}
						>
							<Image
								className={`object-cover w-full h-full ${
									isRTL
										? "rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
										: "rounded-t-lg  md:rounded-tl-none md:rounded-r-lg"
								}`}
								alt='solutions'
								src='/images/quality.png'
								height={600}
								width={600}
							/>
						</div>
					</div>
					<div
						className='flex flex-col-reverse h-[450px] w-[300px] md:min-w-[700px] md:h-[250px] lg:h-[300px] lg:min-w-[800px]  md:flex-row mb-6 shadow-lg mx-2 rounded-lg '
						ref={refFour}
					>
						<div
							className={`bg-custom-brown text-white h-full px-2 flex items-center max-w-lg   ${
								isRTL
									? "md:rounded-r-lg md:text-lg lg:text-lg font-notokufi"
									: "rounded-b-lg md:rounded-br-none md:rounded-l-lg text-sm md:text-md lg:text-lg font-mono"
							}`}
						>
							<p className='p-4'>{t("outcomes.description")}</p>
						</div>
						<div
							className={`flex items-center justify-center h-96 md:h-full md:min-w-96`}
						>
							<Image
								className={`object-cover w-full h-full ${
									isRTL
										? "rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
										: "rounded-t-lg  md:rounded-tl-none md:rounded-r-lg"
								}`}
								alt='solutions'
								src='/images/results.jpg'
								height={600}
								width={600}
							/>{" "}
						</div>
					</div>{" "}
					<div
						className='flex flex-col-reverse h-[450px] w-[300px] md:min-w-[700px] md:h-[250px] lg:h-[300px] lg:min-w-[800px]  md:flex-row mb-6 shadow-lg mx-2 rounded-lg '
						ref={refFive}
					>
						<div
							className={`bg-custom-light-brown text-black h-full px-2 flex items-center max-w-lg  ${
								isRTL
									? "md:rounded-r-lg md:text-lg lg:text-lg font-notokufi"
									: "rounded-b-lg md:rounded-br-none md:rounded-l-lg text-sm md:text-md lg:text-lg font-mono"
							}`}
						>
							<p className='p-4'>{t("your_needs.description")}</p>
						</div>
						<div
							className={`flex items-center justify-center h-96 md:h-full md:min-w-96`}
						>
							<Image
								className={`object-cover w-full h-full ${
									isRTL
										? "rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
										: "rounded-t-lg  md:rounded-tl-none md:rounded-r-lg"
								}`}
								alt='solutions'
								src='/images/needs.jpg'
								height={600}
								width={600}
							/>{" "}
						</div>
					</div>
					<div className='flex flex-row  mb-6 shadow-lg mx-2 min-w-[600px] rounded-lg '></div>
					<div className='flex flex-row  mb-6 shadow-lg mx-2 min-w-[600px] rounded-lg '></div>
					<div className='flex flex-row  mb-6 shadow-lg mx-2 min-w-[600px] rounded-lg '></div>
				</div>
			</div>
		</div>
	);
}

export default HomeInfo;
